import { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';

interface RotatingCubeProps {
    size?: number;
}

function RotatingCube({ size = 60 }: RotatingCubeProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        let app: PIXI.Application;
        let destroyed = false;

        // Initialize PixiJS app
        (async () => {
            app = new PIXI.Application();

            await app.init({
                width: 300,
                height: 300,
                backgroundAlpha: 0,
                antialias: true,
            });

            if (destroyed) {
                app.destroy(true);
                return;
            }

            containerRef.current?.appendChild(app.canvas);

            // Create graphics object for drawing triangles
            const graphics = new PIXI.Graphics();
            app.stage.addChild(graphics);

            // Cube vertices
            const vertices = [
                [-size, -size, -size], [size, -size, -size], [size, size, -size], [-size, size, -size],
                [-size, -size, size], [size, -size, size], [size, size, size], [-size, size, size]
            ];

            let angle = 0;

            // Helper functions
            const rotateX = (x: number, y: number, z: number, angle: number) => {
                const cos = Math.cos(angle);
                const sin = Math.sin(angle);
                return { x: x, y: y * cos - z * sin, z: y * sin + z * cos };
            };

            const rotateY = (x: number, y: number, z: number, angle: number) => {
                const cos = Math.cos(angle);
                const sin = Math.sin(angle);
                return { x: x * cos + z * sin, y: y, z: -x * sin + z * cos };
            };

            const project3D = (x: number, y: number, z: number) => {
                const distance = 500;
                const scale = distance / (distance + z);
                return { x: x * scale + 150, y: y * scale + 150 };
            };

            // Animation loop
            app.ticker.add(() => {
                graphics.clear();

                const projected = vertices.map(v => {
                    let rotated = rotateY(v[0], v[1], v[2], angle);
                    rotated = rotateX(rotated.x, rotated.y, rotated.z, angle * 0.5);
                    return project3D(rotated.x, rotated.y, rotated.z);
                });

                const triangles = [
                    // Front face - bright red
                    { points: [4, 5, 6], color: 0xFF0000, alpha: 1.0 },
                    { points: [4, 6, 7], color: 0xFF0000, alpha: 1.0 },
                    // Back face - dark red
                    { points: [0, 1, 2], color: 0x880000, alpha: 1.0 },
                    { points: [0, 2, 3], color: 0x880000, alpha: 1.0 },
                    // Right face - orange
                    { points: [1, 5, 6], color: 0xFF8800, alpha: 1.0 },
                    { points: [1, 6, 2], color: 0xFF8800, alpha: 1.0 },
                    // Left face - brown
                    { points: [0, 4, 7], color: 0xCC6600, alpha: 1.0 },
                    { points: [0, 7, 3], color: 0xCC6600, alpha: 1.0 },
                    // Top face - yellow
                    { points: [3, 2, 6], color: 0xFFFF00, alpha: 1.0 },
                    { points: [3, 6, 7], color: 0xFFFF00, alpha: 1.0 },
                    // Bottom face - olive
                    { points: [0, 1, 5], color: 0xCCCC00, alpha: 1.0 },
                    { points: [0, 5, 4], color: 0xCCCC00, alpha: 1.0 }
                ];

                triangles.forEach(tri => {
                    const [p1, p2, p3] = tri.points.map(i => projected[i]);
                    graphics.poly([p1.x, p1.y, p2.x, p2.y, p3.x, p3.y]);
                    graphics.fill({ color: tri.color, alpha: tri.alpha });
                });

                angle += 0.02;
            });
        })();

        // Cleanup
        return () => {
            destroyed = true;
            if (app) {
                try {
                    app.destroy(true);
                } catch (e) {
                    console.warn('Error destroying PixiJS app:', e);
                }
            }
        };
    }, [size]);

    return <div ref={containerRef} style={{ width: '300px', height: '300px' }} />;
}

export default RotatingCube;
export interface Project {
    id: number;
    title: string;
    description: string;
    status: 'live' | 'beta' |'coming-soon';
    techStack: string[];
    projectLink: string;
    githubLink: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "KarmaFinder",
        description: "Fast, responsive Reddit client with vector search, strong caching, and custom media pipeline. Features CRUD bookmark management and OAuth.",
        status: "live",
        techStack: ["Javascript", "Node.js", "Express", "Pinecone"],
        projectLink: "https://karmafinder.site/",
        githubLink: "https://github.com/hawaiichair23/KarmaFinder"
    },
    {
        id: 2,
        title: "Texterity",
        description: "A programmable text engine for streamers. Includes realtime 3D rendering with PixiJS and scripting for per-character animations. Runs as transparent overlay over any app.",
        status: "beta",
        techStack: ["Javascript", "PixiJS", "Electron", "Node.js"],
        projectLink: "#",
        githubLink: "https://github.com/hawaiichair23/texterity"
    },
    {
        id: 3,
        title: "Blueprint",
        description: "Rapid webdev MCP framework allowing AI to generate webpages in under 10 lines of code with a premade component library and simple syntax.",
        status: "beta",
        techStack: ["MCP Server", "Javascript", "Node.js"],
        projectLink: "#",
        githubLink: "https://github.com/hawaiichair23/blueprint"
    },
    {
        id: 4,
        title: "Portfolio Website",
        description: "Modern portfolio site built with React and TypeScript, featuring responsive design and smooth animations.",
        status: "live",
        techStack: ["React", "TypeScript"],
        projectLink: "#",
        githubLink: "#"
    }
];
interface StatusBadgeProps {
    status: 'live' | 'beta' | 'coming-soon';
}

function StatusBadge({ status }: StatusBadgeProps) {
    const statusText = status === 'coming-soon' ? 'Coming Soon' :
        status === 'beta' ? 'Beta' : 'Live';

    return (
        <div className={`project-status ${status}`}>
            {statusText}
        </div>
    );
}

export default StatusBadge;
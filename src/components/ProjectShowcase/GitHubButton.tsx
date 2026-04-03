import './GitHubButton.css';

function GitHubButton() {
    return (
        <a
            href="https://github.com/hawaiichair23"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
        >
            <img
                src="https://cdn.simpleicons.org/github/888888"
                alt="GitHub"
                width="18"
                height="18"
            />
        </a>
    );
}

export default GitHubButton;
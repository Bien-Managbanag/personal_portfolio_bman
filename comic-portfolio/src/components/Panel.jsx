
function Panel({
    title,
    summary,
    text,
    tags = [],
    image,
    imageAlt = "",
    isExpanded,
    onToggle
}) {
    return (
        <article className={`panel comic-panel ${isExpanded ? "expanded" : ""}`}>
            <button
                type="button"
                className="panel-toggle"
                onClick={onToggle}
                aria-expanded={isExpanded}
            >
                <h2>{title}</h2>
                <p className="panel-summary">{summary}</p>

                <span className="panel-action">
                    {isExpanded ? "CLOSE CHAPTER ↑" : "EXPLORE CHAPTER ↓"}
                </span>
            </button>

            {isExpanded && (
                <div className="panel-details">

                    {/* Display image if one is provided */}
                    {image && (
                        <figure className="panel-photo">
                            <img
                                src={image}
                                alt={imageAlt}
                                loading="lazy"
                            />
                        </figure>
                    )}

                    {/* Chapter description */}
                    <p>{text}</p>

                    {/* Technology tags */}
                    {tags.length > 0 && (
                        <div className="panel-tags">
                            {tags.map((tag) => (
                                <span key={tag}>{tag}</span>
                            ))}
                        </div>
                    )}

                </div>
            )}
        </article>
    );
}

export default Panel;

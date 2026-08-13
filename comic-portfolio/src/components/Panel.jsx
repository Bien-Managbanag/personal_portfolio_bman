function Panel({ title, text }) {
    return (
        <div className="panel">
            <h2>{title}</h2>

            <p>{text}</p>
        </div>
    );
}

export default Panel;

/** introduces props
 * Lets you pass data into a component, like parameters for a function
 */
function Panel(props) {
    return (
        <div>
            <h2>{props.title}</h2>

            <p>{props.text}</p>
        </div>
    );
}

export default Panel;

/** introduces props
 * Lets you pass data into a component, like parameters for a function
 */
const Button = (props) => {
    return (
        <>
            <button className="btn" onClick={props.onClick}>
                {props.buttonLabel}
            </button>
        </>
    )
}
export default Button;
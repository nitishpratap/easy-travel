export const Button = (props) => {
    const {text, backgroundColor, onClick} = props
    const buttonStyle = {
        backgroundColor: backgroundColor,
        borderRadius: '8px',
        height: props.height || '50px',
        color: props.color || "white",
        textAlign: 'center',
        fontSize: props.fontSize || '18px',
        fontWeight: props.fontWeight || '500',
        width: props.width || `${text.length * 13}px`,
        border: 'none',
        cursor: 'pointer'
    }
    return (
        <>
            <button onClick={onClick} style={buttonStyle}>{text}</button>
        </>
    )
}

export const Text = (props) =>{
    const {fontSize, fontWeight, fontColor , alignment, text } = props
    const textStyle = {
        fontSize : fontSize,
        fontWeight : fontWeight,
        color : fontColor,
        marginBottom : 0,
        ...props
    }
    return(
        <>
            <p style={textStyle}>
                {text}
            </p>
        </>
    )
}

import './button.css'

function Button(props) {
    return(
        <button href={props.href} className="button">{props.value}</button>
    )
}
export default Button
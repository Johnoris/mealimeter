import './card.css'

function Card(props) {
    return(
        <div className='card-component'>
            <img src={props.src}/>
            <h6>{props.text}</h6>
        </div>
    )
}
export default Card
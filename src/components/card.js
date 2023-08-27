import './card.css'
import bg from '../images/pexels-photo-1646753.jpeg'
function Card(props){
    return (
        <div className="child">
            <img src={props.path}/>
            <p>{props.title}</p>
            <small>{props.population}</small>
        </div>
    )
}   
export default Card 
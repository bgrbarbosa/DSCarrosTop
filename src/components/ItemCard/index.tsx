import './style.css'
import img from '../../assets/car-card.png'

export default function ItemCard(){
    return(
        <div className="container-item-card">
            <img src={img}/>
            <h3>Lorem ipsum dolor</h3>
        </div>
    );
}
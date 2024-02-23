import ItemCard from '../ItemCard'
import './style.css'
export default function SectionCard(){
    return(
        <div className='ct-container-section'>
            <h1>Venha nos visitar</h1>
            <ItemCard/>
            <ItemCard/>   
        </div>

    )
}
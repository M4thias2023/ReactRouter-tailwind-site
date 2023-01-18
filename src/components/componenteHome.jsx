import myGif from '../assets/133308-wonder-car.gif'
import './Homestyle.css'

export const ComponenteHome = () =>{
    return(
        <section>
            <h1 className='text-5xl font-bold'>ESTE ES COMPONENTE HOME</h1>
            <img src={myGif} alt="" />
        </section> 
        )
}
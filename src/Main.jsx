import Cards from './Cards'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'



function Main({addCart, cards}){

    useEffect(()=>{
        AOS.init()
    })
   
    return(
        <div className="main">
            <div className="main-title">
                <div className="main-one">
                    <h1>Jaegar Resto</h1>
                    <span>Tuesday, 2Feb 2021</span>
                </div>
                <div className="input">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text"  placeholder="Search for food, coffe, etc.."/>
                </div>
            </div>
            <nav>
                <ul>
                    <li>
                        <a  href="#">Hot Dishes</a>
                        <a href="#">Cold Dishes</a>
                        <a href="#">Soup</a>
                        <a href="#">Grill</a>
                        <a href="#">Appetizer</a>
                        <a href="#">Dessert</a>
                    </li>
                </ul>
                <div className="lin"></div>
            </nav>

            <section  className="main-cards">
                <div className="card-title">
                    <h4>Choose Dishes</h4>
                    <button><i class="fa-solid fa-chevron-down"></i> Dine In</button>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className="cardss">
                    {
                        cards.map(card => (
                            <Cards card={card} addCart={addCart}/>
                        ))
                        
                    }
                </div>
            </section>
        </div>
    )
}
export default Main
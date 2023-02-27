import './app.css'
import './media.css'
import Main from './Main';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import img1 from './images/img1.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'
import img4 from './images/img4.png'
import img5 from './images/img5.png'
import img6 from './images/img6.png'
import img7 from './images/img7.png'
import img8 from './images/img8.png'
import img9 from './images/img9.png'
import { useState } from 'react';
import { useRef } from 'react';


const cards = [
  {
    id: 0,
    img: img1,
    desc:'Spicy seasoned seafood noodles',
    title1:'$2.29',
    title2:'20 Bowis available'
},
{
    id: 1,
    img: img2,
    desc:'Salted Pasta with mushroom sauce',
    title1:'$2.69',
    title2:'11 Bowis available'
},
{   
    id: 2,
    img: img3,
    desc:'Beef dumpling in hot and sour soup',
    title1:'$2.99',
    title2:'16 Bowis available'
},
{
    id: 3,
    img: img4,
    desc:'Healthy noodle with spinach leaf',
    title1:'$3.29',
    title2:'22 Bowis available'
},
{
    id: 4,
    img: img5,
    desc:'Hot spicy fried rice with omelet ',
    title1:'$3.49',
    title2:'13 Bowis available'
},
{
    id: 5,
    img: img6,
    desc:'Spicy instant noodle with special omelette',
    title1:'$3.59',
    title2:'17 Bowis available'
},
{
    id: 6,
    img: img7,
    desc:'Spicy seasoned seafood noodles',
    title1:'$2.29',
    title2:'20 Bowis available'
},
{
    id: 7,
    img: img8,
    desc:'Spicy seasoned seafood noodles',
    title1: '$1.99',
    title2:'20 Bowis available'
},
{
    id: 8,
    img: img9,
    desc:'Spicy seasoned seafood noodles',
    title1: '$3.66',
    title2:'20 Bowis available'
}
]
function App() {
  

  const [ num, setNum] = useState(2)
  const [ price, setPrice] = useState([])
  const [baskets, setBaskets] = useState([])
  const [cart, setCart] = useState(false)
 

    function addCart(card){
      setBaskets(baskets => ( 
        [...baskets, {
            id: card.id,
            img: card.img,
            title: card.desc,
            price: card.title1,
            totalPrice: num
          }
        ]
    ))
    setCart(true)
  }
 
  function removeBtn(id){
    const newList = baskets.filter((card) => card.id !== id)
    setBaskets(newList)
  }
  const numeRef = useRef()
  function addNum(){
    const nums ={
      numeref: numeRef.current.value
    }

    setPrice(nums)
  }
  
  return (
    <div className="app">
      <Navbar/>
      <Main   addCart={addCart} cards={cards} />
      <Sidebar numeRef={numeRef}  baskets={baskets} cart={cart} setCart={setCart} removeBtn={removeBtn} addNum={addNum}/>
    </div>
  );
}

export default App;

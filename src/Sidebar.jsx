import { X } from 'lucide-react'
import { useState } from 'react'
import Baskets from './Baskets'


function Sidebar({baskets, cart, setCart, removeBtn, addNum={addNum}, numeRef={numeRef}}){

   
    
    return(
        <div className="sidebar">
            <h1>Orders #34562</h1>
            <div className="sidebar-btns">
                <button>Dina In</button>
                <button>To Go</button>
                <button>Delivery</button>
            </div>
            <div className="sidebar-title">
                <span>Item</span>
                <div className="sidebar-title_span">
                    <span>Qty</span>
                    <span>Price</span>
                </div>
            </div>
            <div className="sidebar-one">
                {
                    baskets.map(basket => (
                        <Baskets basket={basket} removeBtn={removeBtn} addNum={addNum} numeRef={numeRef}/>
                    ))
                }
            </div>
            <div   className={ "card-footer " + (cart ? 'open' : 'close') }>
                <div onClick={() => setCart()} className="ic"><X color='rgb(230, 99, 13)'/></div>
                <div className="number">
                    <span>Number :</span>
                    <span className='bb'>16</span>
                </div>
                <div className="totalPrice">
                    <span>Total Price :</span>
                    <span className='bb'>$46</span>
                </div>
                <div className="buttonf">
                    <button>Buy / Card</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
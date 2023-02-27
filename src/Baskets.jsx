
function Baskets({basket, removeBtn, addNum={addNum}, numeRef={numeRef}}) {

  
  
 

  return (
    <div className="sidebar-card">
      <div className="sidebar-up">
        <div className="sidebar-up_one">
          <img src={basket.img} />
          <div className="sidebar-desc">
            <h5>{basket.desc}</h5>
            <span>{basket.title1}</span>
          </div>
        </div>
        <div className="sidebar-up_two">
          <span onChange={addNum} className="sidebar-num">
            <input ref={numeRef}  type="text" />
          </span>
          <span className="total-price">{basket.totalPrice}</span>
        </div>
      </div>
      <div className="sidebar-down">
        <input type="text" placeholder="Order Note..." />
        <button onClick={() => removeBtn(basket.id)}>
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default Baskets;

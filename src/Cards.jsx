function Cards({card, addCart}) {
  return (
    <div className="cards">
      <div onClick={() => addCart(card)} className="card">
        <img src={card.img} />
        <p>{card.desc}</p>
        <span>{card.title1}</span>
        <span>{card.title2}</span>
      </div>
    </div>
  );
}

export default Cards;

import React, { useState, useEffect } from "react";

export default function Card({ card, setSelectedCards, selectedCards }) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    if (!flipped && selectedCards.length < 2 && !card.matched) {
      setFlipped(!flipped);
      setSelectedCards([...selectedCards, card])
    }
  };

  useEffect(() => {
    if (selectedCards[0] === card || selectedCards[1] === card || card.matched) {
      setFlipped(true)
    } else {
      setFlipped(false)
    }
  }, [selectedCards])


  return (
    <div className={`  ${flipped ? "" : "bg-sky-400 "}h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-48 lg:w-48  `} onClick={handleClick}>
      {flipped && <img className="h-full w-full" src={card.img} alt="" />}
    </div>
  );
}

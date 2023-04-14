import React, { useState, useEffect } from "react";

export default function Card({ card, setSelectedCards, selectedCards }) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    if (!flipped && selectedCards.length < 2 && !card.matched) {
    // Ha a kártya jelenleg 'flipped' állapotban van (azaz fel van fordítva), akkor visszafordítjuk, ha nem, akkor felülről lefelé fordítjuk (flip).
    setFlipped(!flipped);
    // Hozzáadjuk a kártyát a 'selectedCards' tömbhöz, amely tartalmazza azokat a kártyákat, amelyeket a játékos felfordított.
    setSelectedCards([...selectedCards, card])
    }
  };
  
  useEffect(() => {
    // Ellenőrizzük, hogy a kártya fel van-e fordítva, ha az egyenlő a jelenlegi kártyával vagy ha már megtalálták a párját ('matched' tulajdonság igaz).
    // Ha igaz, akkor a kártya továbbra is fel lesz fordítva.
    if (selectedCards[0] === card || selectedCards[1] === card || card.matched) {
      setFlipped(true)
    } else {
      // Ha a kártya nincs a 'selectedCards' tömbben, és nincs párja ('matched' tulajdonság hamis), akkor a kártyát lefordítjuk.
      setFlipped(false)
    }
  }, [selectedCards])
  

  return (
    <div className={`  ${flipped ? "" : "bg-sky-400 "}h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-48 lg:w-48  `} onClick={handleClick}>
    {flipped && <img className="h-full w-full" src={card.img} alt="" />}
  </div>
  );
}

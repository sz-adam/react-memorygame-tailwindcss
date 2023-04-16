import React, { useState, useEffect } from "react";
import Card from "./Card";
import kep1 from "../assets/kep1.jpg";
import kep2 from "../assets/kep2.jpg";
import kep3 from "../assets/kep3.jpg";
import kep4 from "../assets/kep4.jpg";
import kep5 from "../assets/kep5.jpg";
import kep6 from "../assets/kep6.jpg";
import kep7 from "../assets/kep7.jpg";
import kep8 from "../assets/kep8.jpg";
import kep9 from "../assets/kep9.jpg";
import kep10 from "../assets/kep10.jpg";
import kep11 from "../assets/kep11.jpg";
import kep12 from "../assets/kep12.jpg";
import kep13 from "../assets/kep13.jpg";
import kep14 from "../assets/kep14.jpg";
import kep15 from "../assets/kep15.jpg";
import kep16 from "../assets/kep16.jpg";
import kep17 from "../assets/kep17.jpg";
import kep18 from "../assets/kep18.jpg";



export default function Cards() {

  const cardItems = [
    { img: kep1, matched: false },
    { img: kep2, matched: false },
    { img: kep3, matched: false },
    { img: kep4, matched: false },
    { img: kep5, matched: false },
    { img: kep6, matched: false },    
    { img: kep7, matched: false },
    { img: kep8, matched: false },
    { img: kep9, matched: false },
    { img: kep10, matched: false },
    { img: kep11, matched: false },
    { img: kep12, matched: false },
    { img: kep13, matched: false },
    { img: kep14, matched: false },
    { img: kep15, matched: false },
    { img: kep16, matched: false },
    { img: kep17, matched: false },
    { img: kep18, matched: false },
  ];

  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);

  const [score, setScore] = useState(0);
  const [fault, setFault] = useState(0)

  
  const shuffle =() =>{
    const shuffledArray = cardItems.sort(() => Math.random() - 0.5);
    const selectedItems = cardItems.slice(0, 6);
  
    const doubleArray =[...selectedItems, ...selectedItems] //add id
    .map((item, index) => ({ ...item, id: index }))
    //shuffle
    .sort(() => Math.random() - .5)

  setCards(doubleArray)
  console.log(doubleArray)
  }

 

  useEffect(() => {
    if (gameStarted) {
      shuffle()
    }
  }, [gameStarted])

  useEffect(() => {
    // Ha a játékos két kártyát fordított fel egymás után, akkor egy másodpercnyi késleltetés 
    //után töröljük a két kártyát a 'selectedCards' tömbből, majd meghívjuk a 'check' függvényt.
    if (selectedCards.length === 2) {
      setTimeout(() => {
        setSelectedCards([])
      }, 1000)
      check()
    }
  }, [selectedCards])

  const check = () => {
    if (selectedCards.length < 2 || selectedCards[0].id === selectedCards[1].id) {
      return;
    }
    // Ellenőrizzük, hogy a játékos által fordított két kártya tartalma megegyezik-e.
    if (selectedCards[0].img === selectedCards[1].img) {
      // Ha a két kártya tartalma megegyezik, akkor létrehozunk egy új tömböt a 'cards' állapot aktualizálásához.
      // Ebben az új tömbben minden olyan kártya, amelynek a tartalma megegyezik a 
      //két fordított kártyával, a 'matched' tulajdonsága igazra lesz állítva.
      setScore((prev) => prev + 1)
      const update = cards.map((card) => {
        if (card.img === selectedCards[0].img) {
          return { ...card, matched: true }
        }
        return card
      })
      // Beállítjuk az új 'cards' állapotot.
      setCards(update)
    } else {
      setFault((prev) => prev + 1)
    }
  }

  const handleStart = () => {
    setCards()
    setSelectedCards([])
    shuffle()
    setFault(0)
    setScore(0)
  }



  return (

    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen flex flex-col justify-center items-center">
     
      <h1 className="text-center text-4xl p-7 md:text-6xl lg:text-7xl font-bold italic tracking-widest text-gray-600">Memory Game</h1>
      {cards.length === 0 && (
        <button className="bg-white text-gray-800 py-4 px-8 rounded-lg font-bold tracking-wider text-xl" onClick={shuffle}>Start Game</button>
      )}
      {cards.length > 0 && (
        <div className="flex flex-col justify-center items-center ">
          <button onClick={handleStart} className="bg-yellow-400 hover:bg-yellow-500 p-2 px-8 m-2 rounded-full font-bold tracking-widest text-base">New Game</button>
          <span className="font-bold tracking-widest text-2xl">Hit: {score}</span>
          <span className="p-1 font-bold tracking-widest text-2xl">Fault: {fault}</span>
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
            {cards.map((card) => (
              <Card
                key={card.id}
                card={card}
                setSelectedCards={setSelectedCards}
                selectedCards={selectedCards}
                
              />
            ))}
          </div>
        </div>
      )}
    </div>

  );
}
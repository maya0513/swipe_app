import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./App.css";

type CardData = { name: string; url: string };

export default function App() {
  const [cards, setCards] = useState<CardData[]>([
    { name: "Alice", url: "https://placekitten.com/300/400" },
    { name: "Bob", url: "https://placekitten.com/301/400" },
    { name: "Carol", url: "https://placekitten.com/302/400" },
  ]);

  const swiped = (direction: string, name: string) => {
    console.log(`Swiped ${direction} on ${name}`);
  };

  const outOfFrame = (name: string) => {
    console.log(`${name} left screen`);
    // カード配列から除去して再レンダー
    setCards((prev) => prev.filter((card) => card.name !== name));
  };

  return (
    <div className="app">
      <h1>Swipe Demo</h1>
      <div className="cardContainer">
        {cards.map((card) => (
          <TinderCard
            key={card.name}
            onSwipe={(dir) => swiped(dir, card.name)}
            onCardLeftScreen={() => outOfFrame(card.name)}
            preventSwipe={["up", "down"]}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${card.url})` }}
            >
              <h3>{card.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

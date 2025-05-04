import { useState } from "react";
import TinderCard from "react-tinder-card";
import "./App.css";

export default function App() {
  type CardData = { id: number; text: string; emoji: string };
  const initialCards: CardData[] = [
    { id: 1, text: "おはようございます", emoji: "☀️" },
    { id: 2, text: "お昼ごはん何食べる？", emoji: "🍱" },
    { id: 3, text: "今日は頑張ろう！", emoji: "💪" },
  ];

  const [cards, setCards] = useState<CardData[]>(initialCards);

  const swiped = (dir: string, id: number) => {
    console.log(`Swiped ${dir} on card ${id}`);
  };

  const outOfFrame = (id: number) => {
    console.log(`Card ${id} left screen`);
    setCards((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="app">
      <h1>テキスト＋絵文字スワイプ</h1>
      <div className="cardContainer">
        {cards.map((c) => (
          <TinderCard
            key={c.id}
            onSwipe={(dir: string) => swiped(dir, c.id)}
            onCardLeftScreen={() => outOfFrame(c.id)}
            preventSwipe={["up", "down"]}
          >
            <div className="card">
              <span className="emoji">{c.emoji}</span>
              <p className="message">{c.text}</p>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

import React from "react"
import Card from "./components/card";
import Header from "./components/Header";
import data from "./data";


export default function App() {

  const cards = data.map(item => {
    return (
        <Card
        key={item.id}
            {...item}
            
        />
    )
})        
  return (
    <div className="container">
     <Header/>
     <section className="cards-list">
                {cards}
     </section>
    </div>
  );
}


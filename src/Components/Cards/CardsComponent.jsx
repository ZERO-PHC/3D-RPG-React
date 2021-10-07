import React, { useRef } from "react";
import Card from "./Card";

export default function Cards({ ...props }) {

  console.log("props ref", props.roundBarRef);

  const cards = props.cards.current

  return (
    <>
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            cardData={card}
            handlePointer={props.handlePointer}
            roundBarRef={props.roundBarRef}
            getIdxDistance={props.getIdxDistance}
          />
        );
      })}
    </>
  );
}

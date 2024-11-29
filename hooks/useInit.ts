import { useState } from "react";
import cards from "../data/cards.json";

export default function (cardNum: number) {
  const [flipStates, setflipStates] = useState<boolean[]>(
    new Array(cardNum).fill(false)
  );
  const [indexes, setIndexes] = useState<number[]>(new Array(cardNum).fill(0));
  const [reverses, setReverses] = useState<boolean[]>(
    new Array(cardNum).fill(false)
  );
  const [infoShown, setInfoShown] = useState<boolean[]>(
    new Array(cardNum).fill(false)
  );

  function onReload() {
    setflipStates(new Array(cardNum).fill(false));
    // setFirstFlip(true);
    shuffleIndexes();
  }

  function shuffleIndexes() {
    const tempIndexes = Array.from(
      { length: cards.length },
      (item, index) => index
    );
    const newIndexes: number[] = [];
    for (let i = 0; i < cardNum; i++) {
      const rand = Math.floor(Math.random() * tempIndexes.length);
      newIndexes.push(tempIndexes.splice(rand, 1)[0]);
    }
    setTimeout(() => setIndexes(newIndexes), 500);
  }

  function onCardClick(index: number) {
    if (!flipStates[index]) {
      let temp = [...reverses];
      temp[index] = Math.random() > 0.5 ? true : false;
      setReverses(temp);
      temp = [...flipStates];
      temp[index] = true;
      setflipStates(temp);
    } else {
      const temp = [...infoShown];
      temp[index] = true;
      setInfoShown(temp);
    }
  }

  function closeInfo() {
    setInfoShown(new Array(cardNum).fill(false));
  }

  return {
    indexes,
    flipStates: flipStates,
    reverses,
    infoShown,
    onReload,
    onCardClick,
    closeInfo,
  };
}

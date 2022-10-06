import { useState } from "react";
import cards from "../data/cards.json";

export default function (cardNum: number) {
  const [states, setStates] = useState(new Array(cardNum).fill(false));
  const [indexes, setIndexes] = useState(new Array(cardNum).fill(0));
  const [reverses, setReverses] = useState(new Array(cardNum).fill(false));
  const [infoShown, setInfoShown] = useState(new Array(cardNum).fill(false));
  const [firstFlip, setFirstFlip] = useState(true);

  function onReload() {
    setStates(new Array(cardNum).fill(false));
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
    if (!states[index]) {
      // if (firstFlip) {
      //   shuffleIndexes();
      //   setFirstFlip(false);
      // }
      let temp = [...reverses];
      temp[index] = Math.random() > 0.5 ? true : false;
      setReverses(temp);
      temp = [...states];
      temp[index] = true;
      setStates(temp);
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
    states,
    reverses,
    infoShown,
    onReload,
    onCardClick,
    closeInfo,
  };
}

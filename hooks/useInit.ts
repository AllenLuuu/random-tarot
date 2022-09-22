import { useState } from "react";
import cards from "../data/cards.json";

export default function() {
    const [states, setStates] = useState([false, false, false]);
    const [indexes, setIndexes] = useState([0, 0, 0]);
    const [reverses, setReverses] = useState([false, false, false]);
    const [infoShown, setInfoShown] = useState([false, false, false]);
    const [firstFlip, setFirstFlip] = useState(true);
  
    function onReload() {
      setStates([false, false, false]);
      setFirstFlip(true);
    }
  
    function shuffleIndexes() {
      const tempIndexes = Array.from(
        { length: cards.length },
        (item, index) => index
      );
      console.log(tempIndexes);
      const newIndexes: number[] = [];
      for (let i = 0; i < 3; i++) {
        const rand = Math.floor(Math.random() * tempIndexes.length);
        newIndexes.push(
          tempIndexes.splice(rand, 1)[0]
        );
        console.log(i, rand, tempIndexes)
      }
      console.log(newIndexes);
      setIndexes(newIndexes);
    }
  
    function onCardClick(index: number) {
      if (!states[index]) {
        if (firstFlip) {
          shuffleIndexes();
          setFirstFlip(false);
        }
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
      setInfoShown([false, false, false]);
    }

    return {
      indexes,
      states,
      reverses,
      infoShown,
      onReload,
      onCardClick,
      closeInfo,
    }
}
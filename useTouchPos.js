
import React, {useState, useEffect} from 'react';
const useTouchPos = (initialPos) => {
  const [pos, setPos]= useState(initialPos);
  let nextPos = pos;

  const touchMove = (ev) => {

    nextPos = {x : ev.nativeEvent.pageX - pos.x, y: ev.nativeEvent.pageY-pos.y}
    setPos(nextPos)
  }
  return {x: pos.x, y: pos.y, touchMove};
}

export default useTouchPos;
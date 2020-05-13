
import React, {useState, useEffect} from 'react';
const useTouchPos = (initialPos) => {
  const [pos, setPos]= useState(initialPos);
  let nextPos = pos;
  // const touchStart = (ev) => {
  //   console.log('start event')
  // }
    // const touchRelease = (ev) => {
  //   console.log('move release')
  // }
  const touchMove = (ev) => {
    // ev.persist()
    // console.log(ev)
    nextPos = {x : ev.nativeEvent.pageX - pos.x, y: ev.nativeEvent.pageY-pos.y}
    setPos(nextPos)
    // console.log('move event', nextPos.x, nextPos.y)
  }
  return {x: pos.x, y: pos.y, touchMove};
}

export default useTouchPos;
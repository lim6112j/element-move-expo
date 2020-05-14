
import React, {useState, useMemo, useEffect} from 'react';
const useTouchPos = (throttle, initialPos) => {
  const [pos, setPos]= useState(initialPos);
  let prevPos =pos;
  let nextPos = pos;
  throttle = useMemo(() => Math.max(1, Math.min(throttle, 10)), [throttle]);
  const throttlePos = (prevPos, x, y) => {
    return {
      x: Math.abs(prevPos.x - x) % throttle === 0 ? x - prevPos.x : prevPos.x,
      y: Math.abs(prevPos.y - y) % throttle === 0 ? y - prevPos.y : prevPos.y
    }
  }
  const touchMove = (ev) => {

    // nextPos = {x : ev.nativeEvent.pageX - pos.x, y: ev.nativeEvent.pageY-pos.y}
    nextPos = throttlePos(prevPos, ev.nativeEvent.pageX, ev.nativeEvent.pageY)
    setPos(nextPos)
  }
  return {x: pos.x, y: pos.y, touchMove};
}

export default useTouchPos;
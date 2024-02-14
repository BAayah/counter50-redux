import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseCountAction, increaseCountAction, togglePlayPauseAction, resetAction, decreaseSecondsAction } from '../../store/actions';

const formatNumber = (number) => {
  return number < 10 ? `0${number}` : number;
}
export const Counter = () => {
  const dispatch = useDispatch();
  const { count, isPlaying, seconds } = useSelector((state => state))

  const formattedCount = count >= 0 ? count.toFixed(0) : `-${Math.abs(count).toFixed(0)}`;
  const formattedSeconds = formatNumber(seconds);

  useEffect(() => {
    let intervalId;

    if (isPlaying) {
      // Start the interval when in play mode
      intervalId = setInterval(() => {
        dispatch(decreaseSecondsAction());
      }, 1000);
    }

    // Clear the interval when the component unmounts or when pausing
    return () => clearInterval(intervalId);
  }, [isPlaying, dispatch]);

  const handlePlusClick = () => {
    const updatedCount = count >= 0 ? count + 0.1 : count - 0.1;

    dispatch(increaseCountAction(updatedCount));
  };

  const handleMinusClick = () => {
    const updatedCount = count >= 0 ? count + 0.1 : count - 0.1;

    dispatch(decreaseCountAction(updatedCount));
  };
  return (
    <div className="flex justify-center flex-wrap border-2 border-orange-300 rounded-lg w-96 h-80 shadow-lg shadow-orange-400/50">
      <div>
        <h2 className="text-orange-200 pt-1 text-lg">Counter</h2>
        <span className="text-orange-200 text-2xl">{formattedCount}.{formattedSeconds}</span>
        <div className="flex justify-between w-40 h-10 mt-16 ml-4">
          <button
            className="text-orange-200 border-2 border-orange-300 rounded-full w-14 h-12 font-extrabold text-2xl hover:shadow-lg hover:shadow-orange-400/50"
            onClick={handlePlusClick}>+</button>
          <button 
            className="text-orange-200 border-2 border-orange-300 rounded-full w-14 h-12 font-extrabold hover:shadow-lg hover:shadow-orange-400/50"
          onClick={handleMinusClick}>—</button>
        </div>
        <div className="flex justify-between gap-10 w-44 h-10 mt-9 mx-2.5">
          <button
            className="text-orange-200 border-2 border-orange-300 rounded-full w-40 h-16 py-2 focus:shadow-lg focus:shadow-orange-400/50"
            onClick={() => dispatch(togglePlayPauseAction())}>
            ⏯ {isPlaying ? 'pause' : 'play'}
          </button>
          <button
            className="text-orange-200 border-2 border-orange-300 rounded-full w-40 h-16 py-2 focus:shadow-lg focus:shadow-orange-400/50 "
            onClick={() => dispatch(resetAction())}> reset ⟳</button>
        </div>
      </div>
    </div>
  );
}



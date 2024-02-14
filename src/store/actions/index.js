export const INCREASE_COUNT = "INCREASE_COUNT";
export const DECREASE_COUNT = "DECREASE_COUNT";
export const TOGGLE_PLAY_PAUSE = "TOGGLE_PLAY_PAUSE";
export const DECREASE_SECONDS = 'DECREASE_SECONDS';
export const RESET = "RESET";

export const increaseCountAction = () => ({
    type: INCREASE_COUNT,
})

export const decreaseCountAction = () => ({
    type: DECREASE_COUNT,
})

export const togglePlayPauseAction = () => ({
    type: TOGGLE_PLAY_PAUSE,
})

export const decreaseSecondsAction = () => ({
    type: DECREASE_SECONDS,    
})

export const resetAction = () => ({
    type: RESET,
});
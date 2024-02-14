import { DECREASE_COUNT, DECREASE_SECONDS, INCREASE_COUNT, RESET, TOGGLE_PLAY_PAUSE } from "../actions";

const initialState = {
    count: 50,
    isPlaying: false, // Add a new state property to track play/pause
    seconds: 60,
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE_COUNT:
            return { ...state, count: state.count + 1};
        case DECREASE_COUNT:
            return { ...state, count: state.count - 1};
        case TOGGLE_PLAY_PAUSE:
            return { ...state, isPlaying: !state.isPlaying };
        case DECREASE_SECONDS:
            return { ...state, seconds: ( state.seconds - 1), };
        case RESET:
            return { ...state, count: 50, seconds: 60};
        default:
            return state;
    }
}
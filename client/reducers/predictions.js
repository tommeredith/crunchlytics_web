import { RUN_PREDICTIONS_RECEIVE, RUN_PREDICTIONS_REQUEST } from '../actions/runPredictions'

const initialState = {}

export const predictions = (state = initialState, action) => {
    switch (action.type) {
        case RUN_PREDICTIONS_RECEIVE:
            return action.payload
        case RUN_PREDICTIONS_REQUEST:
            return state
        default:
            return state
    }
}
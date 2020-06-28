import { api } from './apiFactory'
import { createAction } from '../helpers/actionFactory'

export const [ RUN_PREDICTIONS_REQUEST, RUN_PREDICTIONS_RECEIVE, runPredictionsRequest, runPredictionsReceive ] = createAction('RUN_PREDICTIONS')

export const runPredictions = (league, week) => {

    return dispatch => {
        dispatch(runPredictionsRequest(league, week))

        api.post('/predict', {
            league, 
            week
        })
        .then(response => {
            const formattedData = Object.keys(response.data).map(key => response.data[key])
            dispatch(runPredictionsReceive(formattedData))
        })
    }
}
import React from 'react'
import Loading from '../Loading'
import { withEffects, toProps } from 'refract-xstream'
import { compose } from '../../helpers/compose'
import { RUN_PREDICTIONS_REQUEST, RUN_PREDICTIONS_RECEIVE } from '../../actions/runPredictions'
import xs from 'xstream'

const Predictions = ({ isLoading = false, predictions = null }) => {

    if (isLoading){
        return (
            <div>
                <Loading />
            </div>
        )
    }
    console.log('=== predictions', predictions)
    return (
        <div>
            
            { predictions && (
                <div>
                    <h4>
                        predictions for week 
                    </h4>
                    {predictions.map((prediction, index) => {
                        return (
                            <table key={index}>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>
                                            {prediction.home_team} 
                                        </th>
                                        <th>@</th>
                                        <th>
                                            {prediction.away_team}
                                        </th>
                                        <th>
                                            Draw
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Probability</td>
                                        <td>{prediction.home_wins}%</td>
                                        <td></td>
                                        <td>{prediction.away_wins}%</td>
                                        <td>{prediction.draws}%</td>
                                    </tr>
                                    <tr>
                                        <td>Odds Should Be</td>
                                        <td>{prediction.home_odds}</td>
                                        <td></td>
                                        <td>{prediction.away_odds}</td>
                                        <td>{prediction.draw_odds}</td>
                                    </tr>
                                </tbody>
                            </table>
                        )
                    })}
                </div>
            ) }
            
        </div>
    )
}

export default compose(
    withEffects((component, { store }) => {
        const predictionsRequest$ = store
            .observe(RUN_PREDICTIONS_REQUEST)
            .map(() => toProps({ isLoading: true }))

        const predictionsReceieve$ = store
            .observe(RUN_PREDICTIONS_RECEIVE)
            .map(payload => toProps({ isLoading: false, predictions: payload.payload }))

        return xs.merge(
            predictionsRequest$,
            predictionsReceieve$
        )

    })
)(Predictions)
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { runPredictions } from '../../actions/runPredictions'
import { SOCCER_LEAGUES } from '../../helpers/constants'

const Options = ({ runPredictions }) => {

    const [ leagueValue, setLeagueValue ] = useState('premier')
    const [ weekValue, setWeekValue ] = useState(0)
    const [ currentWeek, setCurrentWeek ] = useState(SOCCER_LEAGUES.find(league => league.id == 'premier').current_week)
    return (
        <div>
            <p>
                league
            </p>
            <select onChange={(e) => [
                setLeagueValue(e.target.value),
                setCurrentWeek(SOCCER_LEAGUES.find(league => league.id == e.target.value).current_week)
            ]}>
                {
                    SOCCER_LEAGUES.map((league, index) => (<option key={index} value={league.id}>{league.name}</option>))
                }
            </select>
            <p>
                week (current week for selected league: {currentWeek})
            </p>
            <input type="number" onChange={(e) => setWeekValue(e.target.value)} />
            <div>
            <button onClick={() => runPredictions(leagueValue, weekValue)}>submit</button>
            </div>
        </div>
    )
}


export default connect(
    state => ({}),
    dispatch => ({
        runPredictions: (league, week) => dispatch(runPredictions(league, week))
    })
)(Options)
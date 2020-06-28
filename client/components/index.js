import React from 'react'
import Options from './Options'
import Predictions from './Predictions'

const App = ({ store }) => {

    return (
        <section>
            <h2>Crunchlytics</h2>
            <Options />
            <Predictions store={store} />
        </section>
    )
}

export default App
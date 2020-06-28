import React from "react"
import ReactDOM from "react-dom"
import { Provider as ReduxProvider } from "react-redux"
import configureStore from "./store/configureStore"
import App from './components'

const store = configureStore()

ReactDOM.render(
    <ReduxProvider store={store}>
        <App store={store}/>
    </ReduxProvider>,
    document.getElementById("root")
);

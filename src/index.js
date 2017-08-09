//import 'react-hot-loader/patch';
import 'materialize-css/dist/css/materialize.min.css'
import 'jquery'
import 'materialize-css/dist/js/materialize.min'

import React from 'react'
import ReactDOM from 'react-dom'

import HelloWorld from './components/HelloWorld'

import CounterStore from './stores/CounterStore'


class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12"><HelloWorld store={new CounterStore()} /></div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))

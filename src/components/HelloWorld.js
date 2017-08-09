import React from 'react'
import { observer } from 'mobx-react'

@observer
export default class HelloWorld extends React.Component {

    handleClick() {
        this.props.store.increment()
    }

    render() {
        return (
            <div>
                <p>Hello World MobX</p>
                <p>The counter: { this.props.store.count || 0 }</p>
                <button className="waves-effect waves-light btn" onClick={ () => this.handleClick() } >+ 1</button>
            </div>
        )
    }

}


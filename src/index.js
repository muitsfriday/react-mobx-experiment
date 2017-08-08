import React from 'react'
import ReactDOM from 'react-dom'


console.log('aaaaav')

class HelloWorld extends React.Component {
    render() {
        return <div>Hello World 7</div>
    }
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'))
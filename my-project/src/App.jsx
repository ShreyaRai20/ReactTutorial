
import { Component } from 'react'
import Counter from './components/Counter'
import './App.css'
import Counter02 from './components/Counter02'

class App extends Component {

  constructor() { // lifecycle method
    super()
    this.state = {
      count: 0
    }

  }

  componentDidMount() { // lifecycle method
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(console.log);
    console.log("componentDidMount : render first time")
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }


  render() { // lifecycle method
    return (
      <>
        {this.state.count >= 10 ? null : <div><Counter number={this.state.count} /></div>}
        {this.state.count >= 15 ? null : <div><Counter02 number={this.state.count} /></div>}

        <button onClick={this.increment}>increment</button> {/* error throw */}
        <button onClick={() => this.increment()}>increment</button>
        <button onClick={this.increment.bind(this)}>increment</button>
      </>
    )
  }
}

export default App

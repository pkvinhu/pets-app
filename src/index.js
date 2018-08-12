import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PetsContainer from './PetsContainer'

class Main extends Component {

  render() {
  	return (
  	  <div>
  	    <h1>Waddup</h1>
  	    <PetsContainer />
  	  </div>
  	)
  }
}

ReactDOM.render(<Main />, document.getElementById('main'))
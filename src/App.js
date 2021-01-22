import './App.css';
import seedColour from './seedColour';
import Palette from './Palatte';
import { generatePalette } from './ColorHelpers'

import React, { Component } from 'react'

class App extends Component {
  render() {
    console.log(generatePalette(seedColour[4]))
    return (
      <div>
        <Palette {...seedColour[4]} />
      </div>
    )
  }
}


export default App;
import './App.css';
import seedColour from './seedColour';
import Palette from './Palatte';
import PaletteList from './PaletteList'
import { Route, Switch } from 'react-router-dom'
import { generatePalette } from './ColorHelpers'

import React, { Component } from 'react'

class App extends Component {
  findPalette(id) {
    return seedColour.find(function (palette) {
      return palette.id === id;
    })
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" render={(routeProps) => <PaletteList palettes={seedColour} {...routeProps} />} />
        <Route exact path="/palette/:id" render={routeProps => (
          <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
        )} />
      </Switch>
      // <div>
      //   <Palette palette={generatePalette(seedColour[4])} />
      // </div>
    )
  }
}


export default App;
import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css'
import NavBar from './NavBar'
class Palatte extends Component {
    constructor(props) {
        super(props)
        this.state = { level: 500, format: "hex" }
        this.changeLevel = this.changeLevel.bind(this)
        this.changeColor = this.changeColor.bind(this)
    }
    changeLevel(level) {
        this.setState({ level })
    }
    changeColor(val) {
        this.setState({ format: val })
    }
    render() {
        const { colors, paletteName, emoji } = this.props.palette
        const { level, format } = this.state
        const colorBoxes = colors[level].map(color => (
            <ColorBox background={color[format]} name={color.name} key={color.id} />
        ))
        return (
            <div className='Palette'>
                <NavBar level={level} changeLevel={this.changeLevel} handleChange={this.changeColor} />
                <div className='Palette-color'>
                    {colorBoxes}
                </div>
                <footer className="Palette-footer">
                    {paletteName}
                    <span className="emoji">{emoji}</span>
                </footer>
            </div>
        )
    }
}

export default Palatte;

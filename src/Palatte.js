import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css'

class Palatte extends Component {
    render() {
        const colorBoxes = this.props.colors.map(color => (
            <ColorBox background={color.color} name={color.name} />
        ))
        return (
            <div className='Palette'>
                {/* TODO: Nav bar goes here */}
                <div className='Palette-color'>
                    {colorBoxes}
                </div>
                {/* Footer goes here */}
            </div>
        )
    }
}

export default Palatte;

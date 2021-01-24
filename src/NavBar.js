/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import Slider from "rc-slider";
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import 'rc-slider/assets/index.css'
import './NavBar.css'

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = { format: "hex", open: false }
        this.handleFormatChange = this.handleFormatChange.bind(this)
        this.clsoeSnackBar = this.clsoeSnackBar.bind(this)
    }
    clsoeSnackBar() {
        this.setState({
            open: false
        })
    }
    handleFormatChange(e) {
        this.setState({ format: e.target.value, open: true });
        this.props.handleChange(e.target.value)
    }
    render() {
        const { level, changeLevel } = this.props;
        const { format } = this.state;
        return (

            <header className="NavBar">
                <div className="logo">
                    <a href="#">ColourPicker</a>
                </div>
                <div className="slider-container">
                    <span>level: {level}</span>
                    <div className="slider">
                        <Slider defaultValue={level} min={100} max={900} onAfterChange={changeLevel} step={100} />
                    </div>
                </div>
                <div className="select-container">
                    <Select value={format} onChange={this.handleFormatChange}>
                        <MenuItem value="hex" >HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb" >RGB - rgb(255, 255, 255)</MenuItem>
                        <MenuItem value="rgba" >RGBA - rgba(255,255,255,1.0)</MenuItem>
                    </Select>
                </div>
                <Snackbar anchorOrigin={{ vertical: "bottom", horizontal: "left" }} open={this.state.open} autoHideDuration={3000}
                    message={<span id="message-id">Format Changed to {format.toUpperCase()}</span>} ContentProps={{ "aria-describedby": "message-id" }}
                    onClose={this.clsoeSnackBar}
                    action={[
                        <IconButton onClick={this.clsoeSnackBar} color="inherit" key="close" aria-label="close"><CloseIcon /></IconButton>
                    ]} />
            </header>
        )
    }
}

export default NavBar;
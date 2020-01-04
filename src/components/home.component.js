import React, { Component } from 'react';
import '../App.css';
import MDUIkit from 'md-uikit';
import UIkit from 'uikit';
import Typist from 'react-typist';
import 'uikit/dist/css/uikit.css';
import 'md-uikit/dist/css/md-uikit.css';
import Profile from "../assets/img/profile.jpg";
import { Link } from "react-router-dom";
import posed from 'react-pose';
const Box = posed.div({
    hoverable: true,
    pressable: true,
    init: {
        scale: 1
    },
    hover: {
        scale: 1.2
    },
    press: {
        scale: 1.1
    },
    enter: { y: 0, opacity: 1, delay: 300 }
});
class Home extends Component {
    state = {
        renderMsg: false,
        renderCursor: true,
    }

    onHeaderTyped = () => {
        this.setState({ renderMsg: true, renderCursor: false });
    }
    render() {
        return (
            <div class="page-content-inner uk-position-center uk-animation-fade">
               {/*  <Box className="primary head-name">J</Box>
                <Box className="primary head-name">e</Box>
                <Box className="primary head-name">a</Box>
                <Box className="primary head-name">n</Box>
                <div className='head-name' >&nbsp; </div>
                <Box className="primary head-name">V</Box>
                <Box className="primary head-name">e</Box>
                <Box className="primary head-name">r</Box>
                <Box className="primary head-name">a</Box>
                <br/>
                <Box className="secondary uk-margin-remove sub-name">F</Box>
                <Box className="secondary uk-margin-remove sub-name">u</Box>
                <Box className="secondary uk-margin-remove sub-name">l</Box>
                <Box className="secondary uk-margin-remove sub-name">l</Box>
                <Box className="secondary uk-margin-remove sub-name">&nbsp;</Box>
                <Box className="secondary uk-margin-remove sub-name">S</Box>
                <Box className="secondary uk-margin-remove sub-name">t</Box>
                <Box className="secondary uk-margin-remove sub-name">a</Box>
                <Box className="secondary uk-margin-remove sub-name">c</Box>
                <Box className="secondary uk-margin-remove sub-name">k</Box>
                <Box className="secondary uk-margin-remove sub-name">&nbsp;</Box>
                <Box className="secondary uk-margin-remove sub-name">D</Box>
                <Box className="secondary uk-margin-remove sub-name">e</Box>
                <Box className="secondary uk-margin-remove sub-name">v</Box>
                <Box className="secondary uk-margin-remove sub-name">e</Box>
                <Box className="secondary uk-margin-remove sub-name">l</Box>
                <Box className="secondary uk-margin-remove sub-name">o</Box>
                <Box className="secondary uk-margin-remove sub-name">p</Box>
                <Box className="secondary uk-margin-remove sub-name">e</Box>
                <Box className="secondary uk-margin-remove sub-name">r</Box> */}
                <Typist
                    startDelay={1000}
                    onTypingDone={this.onHeaderTyped}
                    className='primary head-name'>Jean Vera </Typist>
                {this.state.renderMsg &&
                    <Typist
                        className='secondary uk-margin-remove sub-name'>
                        Full Stack Web Developer </Typist>
                }

            </div>
        );
    }
}

export default Home;

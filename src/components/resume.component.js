import React, { Component } from 'react';
import Profile from "../assets/img/profile.jpg";
import { Link } from "react-router-dom";
import Typist from 'react-typist';
import Logo1 from "../assets/img/api_logo.png";
import Logo2 from "../assets/img/bootstrap_logo.png";
import Logo3 from "../assets/img/csharp_logo.png";
import Logo4 from "../assets/img/css3_logo.png";
import Logo5 from "../assets/img/github_logo.png";
import Logo6 from "../assets/img/graphQL-logo.jpg";
import Logo7 from "../assets/img/html5_logo.png";
import Logo8 from "../assets/img/jira_logo.png";
import Logo9 from "../assets/img/jquery_logo.png";
import Logo10 from "../assets/img/js_logo.png";
import Logo11 from "../assets/img/json_logo.png";
import Logo12 from "../assets/img/logo-firebase.png";
import Logo13 from "../assets/img/md_logo.png";
import Logo14 from "../assets/img/mduikit-logo.jpg";
import Logo15 from "../assets/img/mysql_logo.png";
import Logo16 from "../assets/img/nodejs_logo.png";
import Logo17 from "../assets/img/php_logo.png";
import Logo18 from "../assets/img/postgresql_logo.png";
import Logo19 from "../assets/img/react_logo.png";
import Logo20 from "../assets/img/redux-logo.png";
import Logo21 from "../assets/img/slack_logo.png";
import Logo22 from "../assets/img/sqlserver_logo.png";
import Logo23 from "../assets/img/uikit_logo.png";
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
class Resume extends Component {
    render() {
        return (
            <div className="page-content-inner">
                <Typist
                    startDelay={1000}
                    onTypingDone={this.onHeaderTyped}
                    className='primary title-name uk-margin-bottom'>Skills & Experience </Typist>
                <div className='uk-grid' data-uk-grid>
                    <div className='uk-width-1-1@s'>
                        <p>The main area of my expertise is front end development (client side of the web).</p>
                        <p>HTML, CSS, JS, Jquery, building small and medium web apps with ReactJS, custom plugins, and coding interactive layouts.</p>
                        <p>Visit my <a href="https://www.linkedin.com/in/jeanvera23/">LinkedIn</a> profile for more details or just contact me.</p>
                        <Box className='logo-img'><img src={Logo1} width='60px'/></Box>
                        <Box className='logo-img'><img src={Logo2} width='60px'/></Box>
                        <Box className='logo-img'><img src={Logo3} width='60px'/></Box>
                        <Box className='logo-img'><img src={Logo4} width='60px'/></Box>
                        <Box className='logo-img'><img src={Logo5} width='60px'/></Box>
                        <Box className='logo-img'><img src={Logo6} width='60px'/></Box>
                        <Box className='logo-img'><img src={Logo7} width='60px'/></Box>
                        <Box className='logo-img'><img src={Logo8} width='60px'/></Box>
                        <Box className='logo-img'><img src={Logo9} width='60px'/></Box>
                        <Box className='logo-img'><img src={Logo10} width='60px'/></Box>
                        <Box className='logo-img'><img src={Logo11} width='60px'/></Box>
                        <Box className='logo-img'><img src={Logo12} width='60px'/></Box>
                        <Box className='logo-img'><img src={Logo13} width='60px'/></Box>
                        <Box className='logo-img'><img src={Logo14} width='60px'/></Box>
                        <Box className='logo-img'><img src={Logo15} width='60px'/></Box>
                        <Box className='logo-img'><img src={Logo16} width='60px'/></Box>
                        <Box className='logo-img'><img src={Logo17} width='60px'/></Box>
                        <Box className='logo-img'><img src={Logo18} width='60px'/></Box>
                        <Box className='logo-img'><img src={Logo19} width='60px'/></Box>
                        <Box className='logo-img'><img src={Logo20} width='60px'/></Box>
                        <Box className='logo-img'><img src={Logo21} width='60px'/></Box>
                        <Box className='logo-img'><img src={Logo22} width='60px'/></Box>
                        <Box className='logo-img'><img src={Logo23} width='60px'/></Box>
                    </div>

                </div>
            </div>
        );
    }
}

export default Resume;

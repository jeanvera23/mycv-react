import React, { Component } from 'react';
import './App.css';
import UIkit from 'uikit';
import 'uikit/dist/css/uikit.css';
import 'md-uikit/dist/css/md-uikit.css';
import Logo from "./assets/img/jv.png";
import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import AboutMe from './components/about.component.js';
import Home from './components/home.component.js';
import Resume from './components/resume.component.js';
import Portfolio from './components/portfolio.component.js';
import PortfolioDetail from './components/portfolio_detail.component.js';
import Contact from './components/contact.component.js';
import Profile from "./assets/img/profile.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
/* import { fab } from '@fortawesome/free-brands-svg-icons' */
import { faIdCard, faCode, faToolbox, faEnvelope, faTachometerAlt,faMobileAlt,faBrain,faAtom,faDownload,faEye,faPencilRuler,faCogs,faChevronRight,faTag,faUser} from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';//,faDownload,faLinkedIn
library.add(faIdCard, faCode, faToolbox, faEnvelope,faTachometerAlt,faMobileAlt,faBrain,faAtom,fab,faDownload,faEye,faPencilRuler,faCogs,faChevronRight,faTag,faUser);

class App extends Component {
  closeModal = (e) => {
    console.log('close');
    UIkit.modal('#modal-full').hide();
  }
  render() {
    return (
      <Router>
        <div className="tm-sidebar-left uk-visible@s main_bg">
          <div className='uk-text-center'><img className="uk-border-circle uk-padding-small" src={Profile} alt="" width='140px' /></div>
          <ul className="uk-nav uk-nav-primary uk-margin-auto-vertical uk-position-center ">
            <li className='uk-animation-toggle '>
              <NavLink className='uk-animation-slide-top-small' to="/about">
                <span className="uk-margin-small-right" ><FontAwesomeIcon className='primary' icon="id-card" /></span><span> About</span>
              </NavLink>
            </li>
            <li className='uk-animation-toggle '>
              <NavLink className='uk-animation-slide-top-small' to="/resume">
                <span className="uk-margin-small-right" ><FontAwesomeIcon className='primary' icon="code" /></span><span> Skills</span>
              </NavLink>
            </li>
            <li className='uk-animation-toggle'>
              <NavLink className='uk-animation-slide-top-small' to="/portfolio">
                <span className="uk-margin-small-right" ><FontAwesomeIcon className='primary' icon="toolbox" /></span><span> Portfolio</span>
              </NavLink>
            </li>
            <li className='uk-animation-toggle '>
              <NavLink className='uk-animation-slide-top-small' to="/contact">
                <span className="uk-margin-small-right" ><FontAwesomeIcon className='primary' icon="envelope" /></span><span> Contact</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <nav className="uk-navbar-container md-bg-white uk-hidden@s" data-uk-navbar>
          <div className="uk-navbar-left">
            <a className="uk-navbar-item uk-logo" href="/#"><img src={Logo} width='50px' alt='logo' />  </a>
          </div>

          <div className="uk-navbar-right">
            <a className="uk-navbar-toggle" href="/#" data-uk-toggle="target: #modal-full"><i className="material-icons primary large">
              menu
</i> </a>
          </div>
          <div id="modal-full" className="uk-modal-full main_bg" data-uk-modal>
            <div className="uk-modal-dialog">
              <button className="uk-modal-close-full uk-close-large secondary" type="button" data-uk-close></button>
              <div className="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" data-uk-grid>
                <div className="uk-padding-large" data-uk-height-viewport>
                  <div className="uk-position-center uk-overlay uk-overlay-default">
                    <div className='uk-text-center'><img className="uk-border-circle uk-padding-small" src={Profile} alt="" width='140px' /></div>
                    <ul className="uk-nav uk-nav-primary uk-margin-auto-vertical ">
                      <li onClick={this.closeModal}>
                        <NavLink to="/about">
                          <span className="uk-margin-small-right " ><FontAwesomeIcon className='primary' icon="id-card" /></span><span> About Me</span>
                        </NavLink>
                      </li>
                      <li onClick={this.closeModal}>
                        <NavLink to="/resume">
                          <span className="uk-margin-small-right" ><FontAwesomeIcon className='primary' icon="code" /></span><span> Skills</span></NavLink>
                      </li>
                      <li onClick={this.closeModal}>
                        <NavLink to="/portfolio">
                          <span className="uk-margin-small-right " ><FontAwesomeIcon className='primary' icon="toolbox" /></span><span> Portfolio</span>
                        </NavLink>
                      </li>
                      <li onClick={this.closeModal}>
                        <NavLink to="/contact">
                          <span className="uk-margin-small-right" >
                            <FontAwesomeIcon className='primary' icon="envelope" /></span><span> Contact</span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className='page-content'>
          <Switch>
            <Route path="/about" component={AboutMe} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/portfolio_/:id" component={PortfolioDetail} />
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

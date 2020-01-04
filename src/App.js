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
import Contact from './components/contact.component.js';
class App extends Component {
  closeModal = (e) => {
    console.log('close');
    UIkit.modal('#modal-full').hide();
  }
  render() {
    return (
      <Router>
        <div className="tm-sidebar-left md-bg-grey-900 uk-visible@s ">
          <ul className="uk-nav uk-nav-primary uk-margin-auto-vertical uk-position-center ">
            <li className='uk-animation-toggle '>
              <NavLink className='uk-animation-slide-top-small' to="/about">
                <span className="uk-margin-small-right" ><i className="primary fas fa-id-card"></i></span><span> About</span>
              </NavLink>
            </li>
            <li className='uk-animation-toggle '>
              <NavLink className='uk-animation-slide-top-small' to="/resume">
                <span className="uk-margin-small-right" ><i className="primary fas fa-code"></i></span><span> Skills</span>
                </NavLink>
            </li>
            <li className='uk-animation-toggle'>
              <NavLink className='uk-animation-slide-top-small' to="/portfolio">
                <span className="uk-margin-small-right" ><i className="primary fas fa-toolbox"></i></span><span> Portfolio</span>
              </NavLink>
            </li>
            <li className='uk-animation-toggle '>
              <NavLink className='uk-animation-slide-top-small' to="/contact">
                <span className="uk-margin-small-right" ><i className="primary fas fa-envelope"></i></span><span> Contact</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <nav class="uk-navbar-container md-bg-white uk-hidden@s" data-uk-navbar>
          <div class="uk-navbar-left">
            <a class="uk-navbar-item uk-logo" href="#"><img src={Logo} width='50px'/>  </a>
          </div>

          <div class="uk-navbar-right">
            <a class="uk-navbar-toggle" data-uk-toggle="target: #modal-full"><i class="material-icons primary large">
menu
</i> </a>
          </div>
          <div id="modal-full" class="uk-modal-full" data-uk-modal>
            <div class="uk-modal-dialog">
              <button class="uk-modal-close-full uk-close-large" type="button" data-uk-close></button>
              <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" data-uk-grid>
                <div class="uk-padding-large" data-uk-height-viewport>
                  <div class="uk-position-center uk-overlay uk-overlay-default">
                    <ul className="uk-nav uk-nav-primary uk-margin-auto-vertical ">
                      <li onClick={this.closeModal}>
                        <NavLink to="/about">
                          <span className="uk-margin-small-right " ><i className="primary fas fa-id-card"></i></span><span> About Me</span>
                        </NavLink>
                      </li>
                      <li onClick={this.closeModal}>
                        <NavLink to="/resume">
                          <span className="uk-margin-small-right" ><i className="primary fas fa-code"></i></span><span> Skills</span></NavLink>
                      </li>
                      <li onClick={this.closeModal}>
                        <NavLink to="/portfolio">
                          <span className="uk-margin-small-right " ><i className="primary fas fa-toolbox"></i></span><span> Portfolio</span>
                        </NavLink>
                      </li>
                      <li onClick={this.closeModal}>
                        <NavLink to="/contact">
                          <span  className="uk-margin-small-right" >
                            <i className="primary fas fa-envelope"></i></span><span> Contact</span>
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

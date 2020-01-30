import React, { Component } from 'react';

// Logos Images
import CMUlogo from "../assets/img/cmu.jpg";
import MoviesLogo from "../assets/img/moviesplus.jpg";
import RealEstateLogo from "../assets/img/realestatelogo.jpg";
import VotingLogo from "../assets/img/votingapp.jpg";
import MDUIkitLogo from "../assets/img/mduikit-logo.jpg";
import AppFiaLogo from "../assets/img/appfia.jpg";
import EduGamesLogo from "../assets/img/edugames_logo.jpg";
import AdmisionUCSMLogo from "../assets/img/admisionucsm_logo.jpg";
import MatriculaUCSMLogo from "../assets/img/matriculaucsm_logo.jpg";
/* import AsistenciaLogo from "../assets/img/asistencia_logo.jpg"; */


import { Link } from "react-router-dom";
import Typist from 'react-typist';
class Portfolio extends Component {
    render() {
        return (
            <div className="page-content-inner" >
                <Typist
                    startDelay={1000}
                    onTypingDone={this.onHeaderTyped}
                    className='primary title-name uk-margin-bottom'>Portfolio </Typist>
                <div className='uk-grid uk-grid-match' data-uk-grid data-uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 100">
                    <div className='uk-width-1-3@s'>
                        <Link to='../portfolio_/1/'>
                            <div className="uk-card md-bg-white">
                                <div className="uk-card-media-top">
                                    <div className="uk-inline-clip uk-transition-toggle">
                                        <img src={RealEstateLogo} alt="" />
                                        <div className="uk-overlay-default uk-position-cover rgba-black-gradient"></div>
                                        <div className="uk-overlay uk-position-bottom uk-padding-small">
                                            <div className="uk-grid-collapse uk-flex-middle">
                                                <div className="uk-width-auto">
                                                    <h3 className="uk-card-title uk-margin-remove-bottom md-color-white">Real Estate Software</h3>
                                                    <p className="uk-text-meta uk-margin-remove-top uk-margin-remove-bottom md-color-grey-400">React Application</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay portfolio_element_padding">
                                            <p align='right' className="uk-h4 uk-margin-remove">
                                                <button  className="md-btn md-btn-outlined md-btn-secondary md-btn-wave-light">+</button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='uk-width-1-3@s'>
                        <Link to='../portfolio_/2/'>
                            <div className="uk-card md-bg-white">
                                <div className="uk-card-media-top">
                                    <div className="uk-inline-clip uk-transition-toggle">
                                        <img src={MDUIkitLogo} alt="" />
                                        <div className="uk-overlay-default uk-position-cover rgba-black-gradient"></div>
                                        <div className="uk-overlay uk-position-bottom uk-padding-small">
                                            <div className="uk-grid-collapse uk-flex-middle">
                                                <div className="uk-width-auto">
                                                    <h3 className="uk-card-title uk-margin-remove-bottom md-color-white">Material Design for UIKit</h3>
                                                    <p className="uk-text-meta uk-margin-remove-top uk-margin-remove-bottom md-color-grey-400">CSS and Javascript</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay portfolio_element_padding">
                                            <p align='right' className="uk-h4 uk-margin-remove">
                                                <button  className="md-btn md-btn-outlined md-btn-secondary md-btn-wave-light">+</button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='uk-width-1-3@s'>
                        <Link to='../portfolio_/3/'>
                            <div className="uk-card md-bg-white">
                                <div className="uk-card-media-top">
                                    <div className="uk-inline-clip uk-transition-toggle">
                                        <img src={AppFiaLogo} alt="" />
                                        <div className="uk-overlay-default uk-position-cover rgba-black-gradient"></div>
                                        <div className="uk-overlay uk-position-bottom uk-padding-small">
                                            <div className="uk-grid-collapse uk-flex-middle">
                                                <div className="uk-width-auto">
                                                    <h3 className="uk-card-title uk-margin-remove-bottom md-color-white">FIA '19 - Expo App</h3>
                                                    <p className="uk-text-meta uk-margin-remove-top uk-margin-remove-bottom md-color-grey-400">React Application</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay portfolio_element_padding">
                                            <p align='right' className="uk-h4 uk-margin-remove">
                                                <button className="md-btn md-btn-outlined md-btn-secondary md-btn-wave-light">+</button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </Link>
                    </div>
                    <div className='uk-width-1-3@s'>
                        <Link to='../portfolio_/4/'>
                            <div className="uk-card md-bg-white">
                                <div className="uk-card-media-top">
                                    <div className="uk-inline-clip uk-transition-toggle">
                                        <img src={EduGamesLogo} alt="" />
                                        <div className="uk-overlay-default uk-position-cover rgba-black-gradient"></div>
                                        <div className="uk-overlay uk-position-bottom uk-padding-small">
                                            <div className="uk-grid-collapse uk-flex-middle">
                                                <div className="uk-width-auto">
                                                    <h3 className="uk-card-title uk-margin-remove-bottom md-color-white">EduGames</h3>
                                                    <p className="uk-text-meta uk-margin-remove-top uk-margin-remove-bottom md-color-grey-400">JQuery Application</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay portfolio_element_padding">
                                            <p align='right' className="uk-h4 uk-margin-remove">
                                                <button  className="md-btn md-btn-outlined md-btn-secondary md-btn-wave-light">+</button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </Link>
                    </div>
                    <div className='uk-width-1-3@s'>
                        <Link to='../portfolio_/5/'>
                            <div className="uk-card md-bg-white">
                                <div className="uk-card-media-top">
                                    <div className="uk-inline-clip uk-transition-toggle">
                                        <img src={MoviesLogo} alt="" />
                                        <div className="uk-overlay-default uk-position-cover rgba-black-gradient"></div>
                                        <div className="uk-overlay uk-position-bottom uk-padding-small">
                                            <div className="uk-grid-collapse uk-flex-middle">
                                                <div className="uk-width-auto">
                                                    <h3 className="uk-card-title uk-margin-remove-bottom md-color-white">Movies Platform</h3>
                                                    <p className="uk-text-meta uk-margin-remove-top uk-margin-remove-bottom md-color-grey-400">JQuery Application</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay portfolio_element_padding">
                                            <p align='right' className="uk-h4 uk-margin-remove">
                                                <button  className="md-btn md-btn-outlined md-btn-secondary md-btn-wave-light">+</button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </Link>
                    </div>

                    <div className='uk-width-1-3@s'>
                        <Link to='../portfolio_/6/'>
                            <div className="uk-card md-bg-white">
                                <div className="uk-card-media-top">
                                    <div className="uk-inline-clip uk-transition-toggle">
                                        <img src={AdmisionUCSMLogo} alt="" />
                                        <div className="uk-overlay-default uk-position-cover rgba-black-gradient"></div>
                                        <div className="uk-overlay uk-position-bottom uk-padding-small">
                                            <div className="uk-grid-collapse uk-flex-middle">
                                                <div className="uk-width-auto">
                                                    <h3 className="uk-card-title uk-margin-remove-bottom md-color-white">Online Admission System</h3>
                                                    <p className="uk-text-meta uk-margin-remove-top uk-margin-remove-bottom md-color-grey-400">JQuery Application</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay portfolio_element_padding">
                                            <p align='right' className="uk-h4 uk-margin-remove">
                                                <button  className="md-btn md-btn-outlined md-btn-secondary md-btn-wave-light">+</button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </Link>
                    </div>
                    <div className='uk-width-1-3@s'>
                        <Link to='../portfolio_/7/'>
                            <div className="uk-card md-bg-white">
                                <div className="uk-card-media-top">
                                    <div className="uk-inline-clip uk-transition-toggle">
                                        <img src={MatriculaUCSMLogo} alt="" />
                                        <div className="uk-overlay-default uk-position-cover rgba-black-gradient"></div>
                                        <div className="uk-overlay uk-position-bottom uk-padding-small">
                                            <div className="uk-grid-collapse uk-flex-middle">
                                                <div className="uk-width-auto">
                                                    <h3 className="uk-card-title uk-margin-remove-bottom md-color-white">Students Web Enrolment System</h3>
                                                    <p className="uk-text-meta uk-margin-remove-top uk-margin-remove-bottom md-color-grey-400">JQuery Application</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay portfolio_element_padding">
                                            <p align='right' className="uk-h4 uk-margin-remove">
                                                <button  className="md-btn md-btn-outlined md-btn-secondary md-btn-wave-light">+</button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </Link>
                    </div>
                    {/* <div className='uk-width-1-3@s'>
                        <Link to='../portfolio_/8/'>
                            <div className="uk-card md-bg-white">
                                <div className="uk-card-media-top">
                                    <div className="uk-inline-clip uk-transition-toggle">
                                        <img src={AsistenciaLogo} alt="" />
                                        <div className="uk-overlay-default uk-position-cover rgba-black-gradient"></div>
                                        <div className="uk-overlay uk-position-bottom uk-padding-small">
                                            <div className="uk-grid-collapse uk-flex-middle">
                                                <div className="uk-width-auto">
                                                    <h3 className="uk-card-title uk-margin-remove-bottom md-color-white">School Attendance System</h3>
                                                    <p className="uk-text-meta uk-margin-remove-top uk-margin-remove-bottom md-color-grey-400">JQuery Application</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay portfolio_element_padding">
                                            <p align='right' className="uk-h4 uk-margin-remove">
                                                <a className="md-btn md-btn-outlined md-btn-secondary md-btn-wave-light">+</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </Link>
                    </div> */}
                    <div className='uk-width-1-3@s'>
                        <Link to='../portfolio_/9/'>
                            <div className="uk-card md-bg-white">
                                <div className="uk-card-media-top">
                                    <div className="uk-inline-clip uk-transition-toggle">
                                        <img src={VotingLogo} alt="" />
                                        <div className="uk-overlay-default uk-position-cover rgba-black-gradient"></div>
                                        <div className="uk-overlay uk-position-bottom uk-padding-small">
                                            <div className="uk-grid-collapse uk-flex-middle">
                                                <div className="uk-width-auto">
                                                    <h3 className="uk-card-title uk-margin-remove-bottom md-color-white">Voting System</h3>
                                                    <p className="uk-text-meta uk-margin-remove-top uk-margin-remove-bottom md-color-grey-400">JQuery Application</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay portfolio_element_padding">
                                            <p align='right' className="uk-h4 uk-margin-remove">
                                                <button  className="md-btn md-btn-outlined md-btn-secondary md-btn-wave-light">+</button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='uk-width-1-3@s'>
                        <Link to='../portfolio_/10/'>
                            <div className="uk-card md-bg-white">
                                <div className="uk-card-media-top">
                                    <div className="uk-inline-clip uk-transition-toggle">
                                        <img src={CMUlogo} alt="" />
                                        <div className="uk-overlay-default uk-position-cover rgba-black-gradient"></div>
                                        <div className="uk-overlay uk-position-bottom uk-padding-small">
                                            <div className="uk-grid-collapse uk-flex-middle">
                                                <div className="uk-width-auto">
                                                    <h3 className="uk-card-title uk-margin-remove-bottom md-color-white">School Website</h3>
                                                    <p className="uk-text-meta uk-margin-remove-top uk-margin-remove-bottom md-color-grey-400">Wordpress</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay portfolio_element_padding">
                                            <p align='right' className="uk-h4 uk-margin-remove">
                                                <button  className="md-btn md-btn-outlined md-btn-secondary md-btn-wave-light">+</button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;

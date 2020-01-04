import React, { Component } from 'react';
import Profile from "../assets/img/profile.jpg";
import CMUlogo from "../assets/img/cmu.jpg";
import MoviesLogo from "../assets/img/moviesplus.jpg";
import RealEstateLogo from "../assets/img/realestatelogo.jpg";
import RealEstateImg from "../assets/img/realestate.png";
import MDUIkitLogo from "../assets/img/mduikit-logo.jpg";
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
                <div className='uk-grid' data-uk-grid data-uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500">
                    <div className='uk-width-1-3@s'>
                        <div className="uk-card md-bg-white">
                            <div class="uk-card-media-top">
                                <div class="uk-inline ">
                                    <img src={RealEstateLogo} alt="" />
                                    <div class="uk-overlay-default uk-position-cover rgba-black-gradient"></div>
                                    <div class="uk-overlay uk-position-bottom uk-padding-small">
                                        <div class="uk-grid-collapse uk-flex-middle" uk-grid>
                                            <div class="uk-width-auto">
                                                <h3 class="uk-card-title uk-margin-remove-bottom md-color-white">Real Estate Software</h3>
                                                <p class="uk-text-meta uk-margin-remove-top uk-margin-remove-bottom md-color-grey-400">React Application</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-card-body">This is a Real estate application based React Application it includes an administration to add, edit or remove properties.
                                        </div>
                            <div className="uk-card-footer">
                                <p align='right'>
                                    <button data-uk-toggle="target: #my-id" className="md-btn  md-btn-text md-color-purple-700 md-btn-wave">+ info</button>
                                </p>
                            </div>
                            <div id="my-id" className='uk-modal-container' data-uk-modal>
                                <div class="uk-modal-dialog uk-modal-body">
                                    <button class="uk-modal-close-default" type="button" data-uk-close></button>
                                    <div className='uk-grid' data-uk-data>
                                        <div className='uk-width-1-3@s'>
                                            <img src={RealEstateImg} width alt="" />
                                        </div>
                                        <div className='uk-width-2-3@s'>
                                            <h3>Real Estate Software</h3>
                                            <h5>Frontend</h5>
                                            <ul class="uk-list uk-list-bullet">
                                                <li>React v16.10</li>
                                                <li>React Redux v7.1</li>
                                                <li>Firebase</li>
                                            </ul>
                                            <h5>Backend</h5>
                                            <ul class="uk-list uk-list-bullet">
                                                <li>PHP v7.1</li>
                                            </ul>
                                            <h5>Database</h5>
                                            <ul class="uk-list uk-list-bullet">
                                                <li>MySQL v8.0.17</li>
                                            </ul>
                                            <p align='center'>
                                                <a class="md-btn md-btn-steam md-btn-icon md-btn-wave-light"><i class="fas fa-external-link-alt"></i>Visit project</a>
                                                <a class="md-btn md-btn-steam md-btn-icon md-btn-wave-light"><i class="fas fa-eye"></i>Live demo</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='uk-width-1-3@s'>
                        <div className="uk-card md-bg-white">
                            <div class="uk-card-media-top">
                                <div class="uk-inline ">
                                    <img src={MDUIkitLogo} alt="" />
                                    <div class="uk-overlay-default uk-position-cover rgba-black-gradient"></div>
                                    <div class="uk-overlay uk-position-bottom uk-padding-small">
                                        <div class="uk-grid-collapse uk-flex-middle" uk-grid>
                                            <div class="uk-width-auto">
                                                <h3 class="uk-card-title uk-margin-remove-bottom md-color-white">Material Design for UIKit</h3>
                                                <p class="uk-text-meta uk-margin-remove-top uk-margin-remove-bottom md-color-grey-400">CSS and Javascript</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-card-body">This is a Real estate application based React Application it includes an administration to add, edit or remove properties.
                                        </div>
                            <div className="uk-card-footer">
                                <p align='right'>
                                    <button data-uk-toggle="target: #my-id" className="md-btn  md-btn-text md-color-purple-700 md-btn-wave">+ info</button>
                                </p>
                            </div>
                            <div id="my-id" className='uk-modal-container' data-uk-modal>
                                <div class="uk-modal-dialog uk-modal-body">
                                    <button class="uk-modal-close-default" type="button" data-uk-close></button>
                                    <div className='uk-grid' data-uk-data>
                                        <div className='uk-width-1-3@s'>
                                            <img src={RealEstateImg} width alt="" />
                                        </div>
                                        <div className='uk-width-2-3@s'>
                                            <h3>Real Estate Software</h3>
                                            <h5>Frontend</h5>
                                            <ul class="uk-list uk-list-bullet">
                                                <li>React v16.10</li>
                                                <li>React Redux v7.1</li>
                                                <li>Firebase</li>
                                            </ul>
                                            <h5>Backend</h5>
                                            <ul class="uk-list uk-list-bullet">
                                                <li>PHP v7.1</li>
                                            </ul>
                                            <h5>Database</h5>
                                            <ul class="uk-list uk-list-bullet">
                                                <li>MySQL v8.0.17</li>
                                            </ul>
                                            <p align='center'>
                                                <a class="md-btn md-btn-steam md-btn-icon md-btn-wave-light"><i class="fas fa-external-link-alt"></i>Visit project</a>
                                                <a class="md-btn md-btn-steam md-btn-icon md-btn-wave-light"><i class="fas fa-eye"></i>Live demo</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='uk-width-1-3@s'>
                        <div className="uk-card md-bg-white">
                            <div class="uk-card-media-top">
                                <div class="uk-inline ">
                                    <img src={RealEstateLogo} alt="" />
                                    <div class="uk-overlay-default uk-position-cover rgba-black-gradient"></div>
                                    <div class="uk-overlay uk-position-bottom uk-padding-small">
                                        <div class="uk-grid-collapse uk-flex-middle" uk-grid>
                                            <div class="uk-width-auto">
                                                <h3 class="uk-card-title uk-margin-remove-bottom md-color-white">FIA '20 - Expo App</h3>
                                                <p class="uk-text-meta uk-margin-remove-top uk-margin-remove-bottom md-color-grey-400">React Application</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-card-body">This is an progressive Web App based in React.
                                        </div>
                            <div className="uk-card-footer">
                                <p align='right'>
                                    <button data-uk-toggle="target: #my-id" className="md-btn  md-btn-text md-color-purple-700 md-btn-wave">+ info</button>
                                </p>
                            </div>
                            <div id="my-id" className='uk-modal-container' data-uk-modal>
                                <div class="uk-modal-dialog uk-modal-body">
                                    <button class="uk-modal-close-default" type="button" data-uk-close></button>
                                    <div className='uk-grid' data-uk-data>
                                        <div className='uk-width-1-3@s'>
                                            <img src={RealEstateImg} width alt="" />
                                        </div>
                                        <div className='uk-width-2-3@s'>
                                            <h3>FIA '20 - Expo App</h3>
                                            <h5>Frontend</h5>
                                            <ul class="uk-list uk-list-bullet">
                                                <li>React v16.10</li>
                                                <li>Google Maps API</li>
                                            </ul>
                                            <h5>Backend</h5>
                                            <ul class="uk-list uk-list-bullet">
                                                <li>PHP v7.1</li>
                                            </ul>
                                            <h5>Database</h5>
                                            <ul class="uk-list uk-list-bullet">
                                                <li>MySQL v8.0.17</li>
                                            </ul>
                                            <p align='center'>
                                                <a class="md-btn md-btn-steam md-btn-icon md-btn-wave-light"><i class="fas fa-external-link-alt"></i>Visit project</a>
                                                <a class="md-btn md-btn-steam md-btn-icon md-btn-wave-light"><i class="fas fa-eye"></i>Live demo</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='uk-width-1-3@s'>
                        <div className="uk-card md-bg-white">
                            <div class="uk-card-media-top">
                                <div class="uk-inline ">
                                    <img src={RealEstateLogo} alt="" />
                                    <div class="uk-overlay-default uk-position-cover rgba-black-gradient"></div>
                                    <div class="uk-overlay uk-position-bottom uk-padding-small">
                                        <div class="uk-grid-collapse uk-flex-middle" uk-grid>
                                            <div class="uk-width-auto">
                                                <h3 class="uk-card-title uk-margin-remove-bottom md-color-white">EduGames</h3>
                                                <p class="uk-text-meta uk-margin-remove-top uk-margin-remove-bottom md-color-grey-400">React Application</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-card-body">This is a Real estate application based React Application it includes an administration to add, edit or remove properties.
                                        </div>
                            <div className="uk-card-footer">
                                <p align='right'>
                                    <button data-uk-toggle="target: #my-id" className="md-btn  md-btn-text md-color-purple-700 md-btn-wave">+ info</button>
                                </p>
                            </div>
                            <div id="my-id" className='uk-modal-container' data-uk-modal>
                                <div class="uk-modal-dialog uk-modal-body">
                                    <button class="uk-modal-close-default" type="button" data-uk-close></button>
                                    <div className='uk-grid' data-uk-data>
                                        <div className='uk-width-1-3@s'>
                                            <img src={RealEstateImg} width alt="" />
                                        </div>
                                        <div className='uk-width-2-3@s'>
                                            <h3>Real Estate Software</h3>
                                            <h5>Frontend</h5>
                                            <ul class="uk-list uk-list-bullet">
                                                <li>React v16.10</li>
                                                <li>React Redux v7.1</li>
                                                <li>Firebase</li>
                                            </ul>
                                            <h5>Backend</h5>
                                            <ul class="uk-list uk-list-bullet">
                                                <li>PHP v7.1</li>
                                            </ul>
                                            <h5>Database</h5>
                                            <ul class="uk-list uk-list-bullet">
                                                <li>MySQL v8.0.17</li>
                                            </ul>
                                            <p align='center'>
                                                <a class="md-btn md-btn-steam md-btn-icon md-btn-wave-light"><i class="fas fa-external-link-alt"></i>Visit project</a>
                                                <a class="md-btn md-btn-steam md-btn-icon md-btn-wave-light"><i class="fas fa-eye"></i>Live demo</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='uk-width-1-3@s'>
                        <div className="uk-card md-bg-white">
                            <div class="uk-card-media-top">
                                <div class="uk-inline ">
                                    <img src={RealEstateLogo} alt="" />
                                    <div class="uk-overlay-default uk-position-cover rgba-black-gradient"></div>
                                    <div class="uk-overlay uk-position-bottom uk-padding-small">
                                        <div class="uk-grid-collapse uk-flex-middle" uk-grid>
                                            <div class="uk-width-auto">
                                                <h3 class="uk-card-title uk-margin-remove-bottom md-color-white">Voting System</h3>
                                                <p class="uk-text-meta uk-margin-remove-top uk-margin-remove-bottom md-color-grey-400">React Application</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-card-body">This is a Real estate application based React Application it includes an administration to add, edit or remove properties.
                                        </div>
                            <div className="uk-card-footer">
                                <p align='right'>
                                    <button data-uk-toggle="target: #my-id" className="md-btn  md-btn-text md-color-purple-700 md-btn-wave">+ info</button>
                                </p>
                            </div>
                            <div id="my-id" className='uk-modal-container' data-uk-modal>
                                <div class="uk-modal-dialog uk-modal-body">
                                    <button class="uk-modal-close-default" type="button" data-uk-close></button>
                                    <div className='uk-grid' data-uk-data>
                                        <div className='uk-width-1-3@s'>
                                            <img src={RealEstateImg} width alt="" />
                                        </div>
                                        <div className='uk-width-2-3@s'>
                                            <h3>Real Estate Software</h3>
                                            <h5>Frontend</h5>
                                            <ul class="uk-list uk-list-bullet">
                                                <li>React v16.10</li>
                                                <li>React Redux v7.1</li>
                                                <li>Firebase</li>
                                            </ul>
                                            <h5>Backend</h5>
                                            <ul class="uk-list uk-list-bullet">
                                                <li>PHP v7.1</li>
                                            </ul>
                                            <h5>Database</h5>
                                            <ul class="uk-list uk-list-bullet">
                                                <li>MySQL v8.0.17</li>
                                            </ul>
                                            <p align='center'>
                                                <a class="md-btn md-btn-steam md-btn-icon md-btn-wave-light"><i class="fas fa-external-link-alt"></i>Visit project</a>
                                                <a class="md-btn md-btn-steam md-btn-icon md-btn-wave-light"><i class="fas fa-eye"></i>Live demo</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='uk-width-1-3@s'>
                        <div className="uk-card md-bg-white">
                            <div class="uk-card-media-top">
                                <div class="uk-inline ">
                                    <img src={RealEstateLogo} alt="" />
                                    <div class="uk-overlay-default uk-position-cover rgba-black-gradient"></div>
                                    <div class="uk-overlay uk-position-bottom uk-padding-small">
                                        <div class="uk-grid-collapse uk-flex-middle" uk-grid>
                                            <div class="uk-width-auto">
                                                <h3 class="uk-card-title uk-margin-remove-bottom md-color-white">Online Admission System
</h3>
                                                <p class="uk-text-meta uk-margin-remove-top uk-margin-remove-bottom md-color-grey-400">JQuery Application</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-card-body">This is a Real estate application based React Application it includes an administration to add, edit or remove properties.
                                        </div>
                            <div className="uk-card-footer">
                                <p align='right'>
                                    <button data-uk-toggle="target: #my-id" className="md-btn  md-btn-text md-color-purple-700 md-btn-wave">+ info</button>
                                </p>
                            </div>
                            <div id="my-id" className='uk-modal-container' data-uk-modal>
                                <div class="uk-modal-dialog uk-modal-body">
                                    <button class="uk-modal-close-default" type="button" data-uk-close></button>
                                    <div className='uk-grid' data-uk-data>
                                        <div className='uk-width-1-3@s'>
                                            <img src={RealEstateImg} width alt="" />
                                        </div>
                                        <div className='uk-width-2-3@s'>
                                            <h3>Real Estate Software</h3>
                                            <h5>Frontend</h5>
                                            <ul class="uk-list uk-list-bullet">
                                                <li>React v16.10</li>
                                                <li>React Redux v7.1</li>
                                                <li>Firebase</li>
                                            </ul>
                                            <h5>Backend</h5>
                                            <ul class="uk-list uk-list-bullet">
                                                <li>PHP v7.1</li>
                                            </ul>
                                            <h5>Database</h5>
                                            <ul class="uk-list uk-list-bullet">
                                                <li>MySQL v8.0.17</li>
                                            </ul>
                                            <p align='center'>
                                                <a class="md-btn md-btn-steam md-btn-icon md-btn-wave-light"><i class="fas fa-external-link-alt"></i>Visit project</a>
                                                <a class="md-btn md-btn-steam md-btn-icon md-btn-wave-light"><i class="fas fa-eye"></i>Live demo</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='uk-width-1-3@s'>
                        <div className="uk-card md-bg-white">
                            <div class="uk-card-media-top">
                                <div class="uk-inline ">
                                    <img src={RealEstateLogo} alt="" />
                                    <div class="uk-overlay-default uk-position-cover rgba-black-gradient"></div>
                                    <div class="uk-overlay uk-position-bottom uk-padding-small">
                                        <div class="uk-grid-collapse uk-flex-middle" uk-grid>
                                            <div class="uk-width-auto">
                                                <h3 class="uk-card-title uk-margin-remove-bottom md-color-white">Students Web Enrolment System</h3>
                                                <p class="uk-text-meta uk-margin-remove-top uk-margin-remove-bottom md-color-grey-400">React Application</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-card-body">This is a Real estate application based React Application it includes an administration to add, edit or remove properties.
                                        </div>
                            <div className="uk-card-footer">
                                <p align='right'>
                                    <button data-uk-toggle="target: #my-id" className="md-btn  md-btn-text md-color-purple-700 md-btn-wave">+ info</button>
                                </p>
                            </div>
                            <div id="my-id" className='uk-modal-container' data-uk-modal>
                                <div class="uk-modal-dialog uk-modal-body">
                                    <button class="uk-modal-close-default" type="button" data-uk-close></button>
                                    <div className='uk-grid' data-uk-data>
                                        <div className='uk-width-1-3@s'>
                                            <img src={RealEstateImg} width alt="" />
                                        </div>
                                        <div className='uk-width-2-3@s'>
                                            <h3>Real Estate Software</h3>
                                            <h5>Frontend</h5>
                                            <ul class="uk-list uk-list-bullet">
                                                <li>React v16.10</li>
                                                <li>React Redux v7.1</li>
                                                <li>Firebase</li>
                                            </ul>
                                            <h5>Backend</h5>
                                            <ul class="uk-list uk-list-bullet">
                                                <li>PHP v7.1</li>
                                            </ul>
                                            <h5>Database</h5>
                                            <ul class="uk-list uk-list-bullet">
                                                <li>MySQL v8.0.17</li>
                                            </ul>
                                            <p align='center'>
                                                <a class="md-btn md-btn-steam md-btn-icon md-btn-wave-light"><i class="fas fa-external-link-alt"></i>Visit project</a>
                                                <a class="md-btn md-btn-steam md-btn-icon md-btn-wave-light"><i class="fas fa-eye"></i>Live demo</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='uk-width-1-3@s'>
                        <div className="uk-card md-bg-white">
                            <div class="uk-card-media-top">
                                <div class="uk-inline ">
                                    <img src={RealEstateLogo} alt="" />
                                    <div class="uk-overlay-default uk-position-cover rgba-black-gradient"></div>
                                    <div class="uk-overlay uk-position-bottom uk-padding-small">
                                        <div class="uk-grid-collapse uk-flex-middle" uk-grid>
                                            <div class="uk-width-auto">
                                                <h3 class="uk-card-title uk-margin-remove-bottom md-color-white">School Attendance System</h3>
                                                <p class="uk-text-meta uk-margin-remove-top uk-margin-remove-bottom md-color-grey-400">Jquery Application</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-card-body">This is a Real estate application based React Application it includes an administration to add, edit or remove properties.
                                        </div>
                            <div className="uk-card-footer">
                                <p align='right'>
                                    <button data-uk-toggle="target: #my-id" className="md-btn  md-btn-text md-color-purple-700 md-btn-wave">+ info</button>
                                </p>
                            </div>
                            <div id="my-id" className='uk-modal-container' data-uk-modal>
                                <div class="uk-modal-dialog uk-modal-body">
                                    <button class="uk-modal-close-default" type="button" data-uk-close></button>
                                    <div className='uk-grid' data-uk-data>
                                        <div className='uk-width-1-3@s'>
                                            <img src={RealEstateImg} width alt="" />
                                        </div>
                                        <div className='uk-width-2-3@s'>
                                            <h3>Real Estate Software</h3>
                                            <h5>Frontend</h5>
                                            <ul class="uk-list uk-list-bullet">
                                                <li>React v16.10</li>
                                                <li>React Redux v7.1</li>
                                                <li>Firebase</li>
                                            </ul>
                                            <h5>Backend</h5>
                                            <ul class="uk-list uk-list-bullet">
                                                <li>PHP v7.1</li>
                                            </ul>
                                            <h5>Database</h5>
                                            <ul class="uk-list uk-list-bullet">
                                                <li>MySQL v8.0.17</li>
                                            </ul>
                                            <p align='center'>
                                                <a class="md-btn md-btn-steam md-btn-icon md-btn-wave-light"><i class="fas fa-external-link-alt"></i>Visit project</a>
                                                <a class="md-btn md-btn-steam md-btn-icon md-btn-wave-light"><i class="fas fa-eye"></i>Live demo</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='uk-width-1-3@s'>
                        <div className="uk-card md-bg-white">
                            <div class="uk-card-media-top">
                                <div class="uk-inline ">
                                    <img src={MoviesLogo} alt="" />
                                    <div class="uk-overlay-default uk-position-cover rgba-black-gradient"></div>
                                    <div class="uk-overlay uk-position-bottom uk-padding-small">
                                        <div class="uk-grid-collapse uk-flex-middle" uk-grid>
                                            <div class="uk-width-auto">
                                                <h3 class="uk-card-title uk-margin-remove-bottom md-color-white">Movies Platform</h3>
                                                <p class="uk-text-meta uk-margin-remove-top uk-margin-remove-bottom md-color-grey-400">JQuery Application</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-card-body">This is a Real estate application based React Application it includes an administration to add, edit or remove properties.
                                        </div>
                            <div className="uk-card-footer">
                                <p align='right'>
                                    <button data-uk-toggle="target: #my-id" className="md-btn  md-btn-text md-color-purple-700 md-btn-wave">+ info</button>
                                </p>
                            </div>
                            <div id="my-id" className='uk-modal-container' data-uk-modal>
                                <div class="uk-modal-dialog uk-modal-body">
                                    <button class="uk-modal-close-default" type="button" data-uk-close></button>
                                    <div className='uk-grid' data-uk-data>
                                        <div className='uk-width-1-3@s'>
                                            <img src={RealEstateImg} width alt="" />
                                        </div>
                                        <div className='uk-width-2-3@s'>
                                            <h3>Real Estate Software</h3>
                                            <h5>Frontend</h5>
                                            <ul class="uk-list uk-list-bullet">
                                                <li>React v16.10</li>
                                                <li>React Redux v7.1</li>
                                                <li>Firebase</li>
                                            </ul>
                                            <h5>Backend</h5>
                                            <ul class="uk-list uk-list-bullet">
                                                <li>PHP v7.1</li>
                                            </ul>
                                            <h5>Database</h5>
                                            <ul class="uk-list uk-list-bullet">
                                                <li>MySQL v8.0.17</li>
                                            </ul>
                                            <p align='center'>
                                                <a class="md-btn md-btn-steam md-btn-icon md-btn-wave-light"><i class="fas fa-external-link-alt"></i>Visit project</a>
                                                <a class="md-btn md-btn-steam md-btn-icon md-btn-wave-light"><i class="fas fa-eye"></i>Live demo</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='uk-width-1-3@s'>
                        <div className="uk-card md-bg-white">
                            <div class="uk-card-media-top">
                                <div class="uk-inline ">
                                    <img src={CMUlogo} alt="" />
                                    <div class="uk-overlay-default uk-position-cover rgba-black-gradient"></div>
                                    <div class="uk-overlay uk-position-bottom uk-padding-small">
                                        <div class="uk-grid-collapse uk-flex-middle" uk-grid>
                                            <div class="uk-width-auto">
                                                <h3 class="uk-card-title uk-margin-remove-bottom md-color-white">School Website</h3>
                                                <p class="uk-text-meta uk-margin-remove-top uk-margin-remove-bottom md-color-grey-400">Wordpress</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-card-body">This is a Real estate application based React Application it includes an administration to add, edit or remove properties.
                                        </div>
                            <div className="uk-card-footer">
                                <p align='right'>
                                    <button data-uk-toggle="target: #my-id" className="md-btn  md-btn-text md-color-purple-700 md-btn-wave">+ info</button>
                                </p>
                            </div>
                            <div id="my-id" className='uk-modal-container' data-uk-modal>
                                <div class="uk-modal-dialog uk-modal-body">
                                    <button class="uk-modal-close-default" type="button" data-uk-close></button>
                                    <div className='uk-grid' data-uk-data>
                                        <div className='uk-width-1-3@s'>
                                            <img src={RealEstateImg} width alt="" />
                                        </div>
                                        <div className='uk-width-2-3@s'>
                                            <h3>Real Estate Software</h3>
                                            <h5>Frontend</h5>
                                            <ul class="uk-list uk-list-bullet">
                                                <li>React v16.10</li>
                                                <li>React Redux v7.1</li>
                                                <li>Firebase</li>
                                            </ul>
                                            <h5>Backend</h5>
                                            <ul class="uk-list uk-list-bullet">
                                                <li>PHP v7.1</li>
                                            </ul>
                                            <h5>Database</h5>
                                            <ul class="uk-list uk-list-bullet">
                                                <li>MySQL v8.0.17</li>
                                            </ul>
                                            <p align='center'>
                                                <a class="md-btn md-btn-steam md-btn-icon md-btn-wave-light"><i class="fas fa-external-link-alt"></i>Visit project</a>
                                                <a class="md-btn md-btn-steam md-btn-icon md-btn-wave-light"><i class="fas fa-eye"></i>Live demo</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;

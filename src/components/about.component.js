import React, { Component } from 'react';
import pdf from '../assets/cv_jvera2020.pdf'
import Typist from 'react-typist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class AboutMe extends Component {
    render() {
        return (
            <div className='page-content-inner'>
                <Typist
                    startDelay={1000}
                    onTypingDone={this.onHeaderTyped}
                    className='primary title-name uk-margin-bottom'>About Me </Typist>
                <div className='uk-grid' data-uk-grid data-uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500">
                    <div className='uk-width-1-1@m  '>
                        <div className='uk-grid' data-uk-grid>
                            <div className='uk-width-1-1@s'>
                                <div className='uk-grid' data-uk-grid>
                                    <h4 className='secondary'>Personal Information</h4>
                                    <div>
                                        <div className="uk-text-center">
                                            <p align='justify'>Front-end Developer, author of UIKit Material Design, and graduate of Software Engineering. More than 5 years commercial experience helping start-ups, small businesses, and agencies achieve high-quality web and mobile applications.</p>
                                        </div>
                                        <div data-uk-grid className='uk-child-width-1-3@m uk-child-width-1-1@s uk-grid-small uk-text-center uk-grid'>
                                            <div>
                                            <a href={pdf} className="md-btn md-btn-icon md-bg-indigo-600 md-color-white uk-padding-small"><FontAwesomeIcon className='md-color-white' icon="download" /> Download CV</a></div>
                                            <div><a href='https://www.linkedin.com/in/jeanvera23/' className="md-btn md-btn-linkedin md-btn-icon md-btn-wave"><FontAwesomeIcon className='md-color-white' icon={['fab', 'linkedin']} /> Linkedin</a></div>
                                            <div><a href='https://github.com/jeanvera23' className="md-btn md-btn-steam md-btn-icon md-btn-wave-light"><FontAwesomeIcon className='md-color-white' icon={['fab', 'github']} /> Github</a></div>
                                        </div>
                                    </div>
                                    <div className='uk-width-1-1@s'>
                                        <div>
                                            <h4 className='secondary'>My Basics</h4>
                                            <div className='uk-grid uk-grid-match' data-uk-grid uk-height-match="target: > div > .uk-card">
                                                <div className='uk-width-1-2@s uk-width-1-4@m'>
                                                    <div className='uk-card uk-card-body uk-text-center'>
                                                        <i className="primary fas fa-tachometer-alt fa-2x"></i>
                                                        <FontAwesomeIcon className='primary' icon="tachometer-alt" size="2x" />
                                                        <h4 className='uk-margin-remove'>Fast</h4>
                                                        <p align='justify'>Fast load times and lag free interaction, my highest priority</p>
                                                    </div>
                                                </div>
                                                <div className='uk-width-1-2@s uk-width-1-4@m'>
                                                    <div className='uk-card uk-card-body uk-text-center'>
                                                        <i className="primary fas fa-mobile-alt fa-2x"></i>
                                                        <FontAwesomeIcon className='primary' icon="mobile-alt" size="2x" />
                                                        <h4 className='uk-margin-remove'>Responsive</h4>
                                                        <p align='justify'>In 2019, almost 50% of the web traffic worldwide is on mobile devices, and is growing. The online future is largely mobile.</p>
                                                    </div>
                                                </div>
                                                <div className='uk-width-1-2@s uk-width-1-4@m'>
                                                    <div className='uk-card uk-card-body uk-text-center'>
                                                        <i className="primary fas fa-brain fa-2x"></i>
                                                        <FontAwesomeIcon className='primary' icon="brain" size="2x" />
                                                        <h4 className='uk-margin-remove'>Intuitive</h4>
                                                        <p align='justify'>Made it simple, made it useful. Strong preference for easy to use, intuitive UX/UI.</p>
                                                    </div>
                                                </div>
                                                <div className='uk-width-1-2@s uk-width-1-4@m'>
                                                    <div className='uk-card uk-card-body uk-text-center'>
                                                        <i className="primary fas fa-atom fa-2x"></i>
                                                        <FontAwesomeIcon className='primary' icon="atom" size="2x" />
                                                        <h4 className='uk-margin-remove'>Dynamic</h4>
                                                        <p align='justify'>Websites don't have to be static, I love making pages come to life.</p>
                                                    </div>
                                                </div>
                                            </div>
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

export default AboutMe;

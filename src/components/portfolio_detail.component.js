import React, { Component } from 'react';
import Typist from 'react-typist';
import MDUIkit from 'md-uikit';


// Projects Images
import img_VotingDesktop from "../assets/img/projects/voting-desktop.jpg";
import img_CMUDesktop from "../assets/img/projects/cmu-desktop.jpg";
import img_CMUMobile from "../assets/img/projects/cmu-mobile.jpg";
import img_MoviesMobile from "../assets/img/projects/movies-mobile.jpg";
import img_MoviesDesktop from "../assets/img/projects/movies-desktop.jpg";
import img_MaterialMobile from "../assets/img/projects/material-mobile.jpg";
import img_MaterialDesktop from "../assets/img/projects/material-desktop.jpg";
import img_RealEstateMobile from "../assets/img/projects/realestate-mobile.jpg";
import img_RealEstateDesktop from "../assets/img/projects/realestate-desktop.jpg";
import img_EduGamesMobile from "../assets/img/projects/edugames-mobile.jpg";
import img_EduGamesDesktop from "../assets/img/projects/edugames-desktop.jpg";
import img_MatriculaUCSMMobile from "../assets/img/projects/matricula-ucsm-mobile.jpg";
import img_MatriculaUCSMDesktop from "../assets/img/projects/matricula-ucsm-desktop.jpg";
import img_MatriculaExtra1 from "../assets/img/projects/matricula_extra1.jpg";
import img_MatriculaExtra2 from "../assets/img/projects/matricula_extra2.jpg";
import AdmisionMobile from "../assets/img/projects/admision-mobile.jpg";
import FiaMobile from "../assets/img/projects/fia-mobile.jpg";
import AdmisionDesktop from "../assets/img/projects/admision-desktop.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Contact extends Component {
    state = {
        isVerified: false,
        isSent: false
    }
    constructor(props) {
        super(props);
        this.inputName = React.createRef();
    }
    componentDidMount() {
        MDUIkit.init();
    }
    goBack = (e) => {
        e.preventDefault();
        console.log("GO back")
        this.props.history.goBack();
    }
    renderContent(id) {
        let content;
        switch (id) {
            case '1': {
                content = (
                    <div className='uk-width-1-1@s'>
                        <div className='uk-width-1-1@s'>
                            <div className='uk-grid'>
                                <div className='uk-width-2-3@s'><img className='uk-padding' src={img_RealEstateDesktop} width alt="" /></div>
                                <div className='uk-width-1-3@s uk-text-center'><img className='uk-padding' src={img_RealEstateMobile} width='90%' alt="" /></div>
                            </div>
                        </div>
                        <div className='uk-width-1-1@s'>
                            <p align='center'>This is a Real estate application based in React, it includes a website and admin portal an administration to add, edit or remove properties.</p><br />
                        </div>
                        <div className='uk-width-1-1@s'>
                            <div className='uk-grid-divider' data-uk-grid>
                                <div className='uk-width-1-2@s '>
                                    <div className='uk-padding uk-text-center'>
                                        <FontAwesomeIcon className='primary' icon="pencil-ruler" size="2x" />
                                        <h4 className='uk-margin-remove'>Frontend</h4>
                                        <ul className="uk-list uk-list-large uk-list-divider">
                                            <li>React v16.10</li>
                                            <li>React Redux v7.1</li>
                                            <li>Firebase</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='uk-width-1-2@s'>
                                    <div className='uk-padding uk-text-center'>
                                        <FontAwesomeIcon className='primary' icon="cogs" size="2x" />
                                        <h4 className='uk-margin-remove'>Backend</h4>
                                        <ul className="uk-list uk-list-large uk-list-divider">
                                            <li>PHP v7.1</li>
                                            <li>PHPSpreadsheet</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='uk-width-1-1@s'>
                            <p align='center'><br />
                                <a href="https://github.com/jeanvera23/real-estate-app" className="md-btn md-btn-steam md-btn-icon md-btn-wave-light"><FontAwesomeIcon className='md-color-white' icon={['fab', 'github']} /> Visit project</a>
                                <a href="http://inmobiliariamonicatejada.com/" className="md-btn md-btn-steam md-btn-icon md-btn-wave-light" title='External link'><FontAwesomeIcon className='md-color-white' icon="eye" /> Live demo</a>
                            </p>
                        </div>
                    </div>
                );
                break;
            }
            case '2': {
                content = (
                    <>
                        <div className='uk-width-1-1@s'>
                            <div className='uk-grid'>
                                <div className='uk-width-2-3@s'><img className='uk-padding' src={img_MaterialDesktop} width alt="" /></div>
                                <div className='uk-width-1-3@s uk-text-center'><img className='uk-padding' src={img_MaterialMobile} width='90%' alt="" /></div>
                            </div>
                        </div>
                        <div className='uk-width-1-1@s'>
                            <p align='center'>Material Design for UIkit is a CSS framework that have hundreds of beautiful components, templates, animations, effects and helpers inspired in <a href='https://material.io/design/'>Google Material Design</a>. Everything fully responsive, compatible with different browsers.</p><br />
                        </div>
                        <div className='uk-width-1-1@s'>

                            <div className='uk-card uk-card-body uk-text-center'>
                                <h3>Buttons</h3>
                                <h6>Basic</h6>
                                <div class="uk-child-width-1-6@m uk-child-width-1-2@s uk-grid-small uk-text-center uk-grid uk-grid-stack" data-uk-grid>
                                    <div><a class="md-btn md-btn-wave">Default</a></div>
                                    <div><a class="md-btn md-btn-wave-light md-btn-primary">Primary</a></div>
                                    <div><a class="md-btn md-btn-wave-light md-btn-secondary">Secondary</a></div>
                                    <div><a class="md-btn disabled" disabled>Disabled</a></div>
                                </div>
                                <h6>Outlined</h6>
                                <div class="uk-child-width-1-6@m uk-child-width-1-2@s uk-grid-small uk-text-center uk-grid uk-grid-stack" data-uk-grid>
                                    <div><a class="md-btn md-btn-outlined md-btn-secondary md-btn-wave-light">Primary</a></div>
                                    <div><a class="md-btn md-btn-outlined md-btn-primary md-btn-wave-light">Primary</a></div>
                                    <div><a class="md-btn md-btn-outlined md-btn-secondary md-btn-shaped md-btn-wave-light">Shaped</a></div>
                                    <div><a class="md-btn md-btn-outlined md-btn-secondary md-btn-wave-light md-btn-icon"><i class="material-icons">home</i>ICON</a></div>
                                </div>
                                <h6>Social</h6>
                                <div class="uk-child-width-1-6@m uk-child-width-1-2@s uk-grid-small uk-text-center uk-grid uk-grid-stack" data-uk-grid>
                                    <div><a class="md-btn md-btn-facebook md-btn-icon md-btn-wave-light"><FontAwesomeIcon className='md-color-white' icon={['fab', 'facebook-f']} /> FACEBOOK</a></div>
                                    <div><a class="md-btn md-btn-twitter md-btn-icon md-btn-wave-light"><FontAwesomeIcon className='md-color-white' icon={['fab', 'twitter']} />  TWITTER</a></div>
                                    <div><a class="md-btn md-btn-youtube md-btn-icon md-btn-wave-light"><FontAwesomeIcon className='md-color-white' icon={['fab', 'google-plus-g']} /> GOOGLE +</a></div>
                                    <div><a class="md-btn md-btn-instagram md-btn-icon md-btn-wave-light"><FontAwesomeIcon className='md-color-white' icon={['fab', 'instagram']} /> Instagram</a></div>
                                    <div><a class="md-btn md-btn-pinterest md-btn-icon md-btn-wave-light"><FontAwesomeIcon className='md-color-white' icon={['fab', 'pinterest']} /> Pinterest</a></div>
                                    <div><a class="md-btn md-btn-linkedin md-btn-icon md-btn-wave-light"><FontAwesomeIcon className='md-color-white' icon={['fab', 'linkedin']} /> Linkedin</a></div>
                                    <div><a class="md-btn md-btn-snapchat md-btn-icon md-btn-wave"><FontAwesomeIcon icon={['fab', 'snapchat']} /> Snapchat</a></div>
                                    <div><a class="md-btn md-btn-whatsapp md-btn-icon md-btn-wave-light"><FontAwesomeIcon className='md-color-white' icon={['fab', 'whatsapp']} /> Whatsapp</a></div>
                                </div>
                            </div>
                        </div>
                        <div className='uk-width-1-1@s'>
                            <br />
                            <div className='uk-card uk-card-body uk-text-center'>
                                <h4>Input validation</h4>
                                <div class="uk-child-width-1-1 uk-child-width-1-2@m uk-grid-small uk-text-center uk-margin uk-grid uk-grid-stack" data-uk-grid="">
                                    <div class="uk-first-column">
                                        <div class="md-input-wrapper md-input-wrapper-with-trailing-icon md-input-wrapper-helper-text md-input-danger">
                                            <label>Email</label>
                                            <input type="email" class="md-input" required />
                                            <span class="md-input-bar"></span>
                                            <p>Must contain @..</p>
                                            <span class="md-input-icon"><i class="material-icons">error</i></span></div>
                                    </div>
                                    <div class="uk-grid-margin uk-first-column">
                                        <div class="md-input-wrapper md-input-wrapper-with-trailing-icon md-input-wrapper-helper-text md-input-danger">
                                            <label>Text</label>
                                            <input type="text" class="md-input" minlength="8" autocomplete="off" />
                                            <span class="md-input-bar"></span>
                                            <p>minlength="8"</p>
                                            <span class="md-input-icon"><i class="material-icons">error</i></span></div>
                                    </div>
                                    <div class="uk-grid-margin uk-first-column">
                                        <div class="md-input-wrapper md-input-wrapper-helper-text">
                                            <label>Number</label>
                                            <input type="number" class="md-input" min="10" max="20" required />
                                            <span class="md-input-bar"></span>
                                            <p>Between 10 - 20</p>
                                        </div>
                                    </div>
                                </div>
                                <div >
                                    <p>There is a wide collection of web components available, please <a href='http://mduikit.com'>click here</a> to learn more about MDUIkit.</p>
                                </div>
                            </div>
                        </div>
                        <div className='uk-width-1-1@s'>
                            <p align='center'><br />
                                <a href='https://github.com/jeanvera23/material-design-uikit' className="md-btn md-btn-steam md-btn-icon md-btn-wave-light"><FontAwesomeIcon className='md-color-white' icon={['fab', 'github']} /> Visit project</a>
                                <a href='http://mduikit.com/' className="md-btn md-btn-steam md-btn-icon md-btn-wave-light" title='External link'><FontAwesomeIcon className='md-color-white' icon="eye" /> Live demo</a>
                            </p>
                        </div>
                    </>
                )
                break;
            }
            case '3': {
                content = (
                    <>
                        <div className='uk-width-1-1@s'>
                            <div className='uk-grid'>
                                <div className='uk-width-2-3@s'><iframe className='uk-padding' title="video" width="100%" height="315" src="https://www.youtube.com/embed/qhj-ShzaW-E" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                                <div className='uk-width-1-3@s uk-text-center'><img className='uk-padding' src={FiaMobile} width='90%' alt="" /></div>
                            </div>
                        </div>
                        <div className='uk-width-1-1@s'>
                            <p align='center'>Developed a Progresive Web App and a portal to manage the registration, access control and marketing for expositors.</p><br />
                        </div>
                        <div className='uk-width-1-1@s'>
                            <div className='uk-grid-divider' data-uk-grid>
                                <div className='uk-width-1-2@s '>
                                    <div className='uk-padding uk-text-center'>
                                        <FontAwesomeIcon className='primary' icon="pencil-ruler" size="2x" />
                                        <h4 className='uk-margin-remove'>Frontend</h4>
                                        <ul className="uk-list uk-list-large uk-list-divider">
                                            <li>React v16.10</li>
                                            <li>Google Maps API</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='uk-width-1-2@s'>
                                    <div className='uk-padding uk-text-center'>
                                        <FontAwesomeIcon className='primary' icon="cogs" size="2x" />
                                        <h4 className='uk-margin-remove'>Backend</h4>
                                        <ul className="uk-list uk-list-large uk-list-divider">
                                            <li>PHP v7.1</li>
                                            <li>PHPSpreadsheet</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='uk-width-1-1@s'>
                            <p align='center'><br />
                                <a href='http://appfia.com/' className="md-btn md-btn-steam md-btn-icon md-btn-wave-light" title='External link'><FontAwesomeIcon className='md-color-white' icon="eye" /> Live demo</a>
                            </p>
                        </div>
                    </>
                )
                break;
            }
            case '4': {
                content = (
                    <>
                        <div className='uk-width-1-1@s'>
                            <div className='uk-grid'>
                                <div className='uk-width-2-3@s'><img className='uk-padding' src={img_EduGamesDesktop} width alt="" /></div>
                                <div className='uk-width-1-3@s uk-text-center'><img className='uk-padding' src={img_EduGamesMobile} width='90%' alt="" /></div>
                            </div>
                        </div>
                        <div className='uk-width-1-1@s'>
                            <p align='center'>Developed a Web Portal to provide educative resources for students, this platform aims to attract and evaluate students' abilities through interactive games and activities.</p><br />
                        </div>
                        <div className='uk-width-1-1@s'>
                            <div className='uk-grid-divider' data-uk-grid>
                                <div className='uk-width-1-2@s '>
                                    <div className='uk-padding uk-text-center'>
                                        <FontAwesomeIcon className='primary' icon="pencil-ruler" size="2x" />
                                        <h4 className='uk-margin-remove'>Frontend</h4>
                                        <ul className="uk-list uk-list-large uk-list-divider">
                                            <li>HTML5, CSS3, Javscript</li>
                                            <li>JQuery v3</li>
                                            <li>Construct2 Software</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='uk-width-1-2@s'>
                                    <div className='uk-padding uk-text-center'>
                                        <FontAwesomeIcon className='primary' icon="cogs" size="2x" />
                                        <h4 className='uk-margin-remove'>Backend</h4>
                                        <ul className="uk-list uk-list-large uk-list-divider">
                                            <li>PHP v7.1</li>
                                            <li>PHPSpreadsheet</li>
                                            <li>mPDF</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='uk-width-1-1@s'>
                            <p align='center'><br />
                                <a href='http://edugames.jeanvera.com/' className="md-btn md-btn-steam md-btn-icon md-btn-wave-light" title='External link'><FontAwesomeIcon className='md-color-white' icon="eye" /> Live demo</a>
                            </p>
                        </div>
                    </>
                )
                break;
            }
            case '5': {
                content = (
                    <>
                        <div className='uk-width-1-1@s'>
                            <div className='uk-grid'>
                                <div className='uk-width-2-3@s'><img className='uk-padding' src={img_MoviesDesktop} width alt="" /></div>
                                <div className='uk-width-1-3@s uk-text-center'><img className='uk-padding' src={img_MoviesMobile} width='90%' alt="" /></div>
                            </div>
                        </div>
                        <div className='uk-width-1-1@s'>
                            <p align='center'>Movies Application is a responsive website developed in HTML5, CSS3,Javascript and JQuery.</p><br />
                        </div>
                        <div className='uk-width-1-1@s'>
                            <div className='uk-grid-divider' data-uk-grid>
                                <div className='uk-width-1-2@s '>
                                    <div className='uk-padding uk-text-center'>
                                        <FontAwesomeIcon className='primary' icon="pencil-ruler" size="2x" />
                                        <h4 className='uk-margin-remove'>Frontend</h4>
                                        <ul className="uk-list uk-list-large uk-list-divider">
                                            <li>HTML5, CSS3, Javscript</li>
                                            <li>JQuery v3</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='uk-width-1-2@s'>
                                    <div className='uk-padding uk-text-center'>
                                        <FontAwesomeIcon className='primary' icon="cogs" size="2x" />
                                        <h4 className='uk-margin-remove'>Backend</h4>
                                        <ul className="uk-list uk-list-large uk-list-divider">
                                            <li>PHP v7.1</li>
                                            <li>PHPSpreadsheet</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='uk-width-1-1@s'>
                            <p align='center'><br />
                                <a href='http://moviesapp.jeanvera.com/Views/index.php' className="md-btn md-btn-steam md-btn-icon md-btn-wave-light" title='External link'><FontAwesomeIcon className='md-color-white' icon="eye" /> Live demo</a>
                            </p>
                        </div>
                    </>
                )
                break;
            }
            case '6': {
                content = (
                    <>
                        <div className='uk-width-1-1@s'>
                            <div className='uk-grid'>
                                <div className='uk-width-2-3@s'><img className='uk-padding' src={AdmisionDesktop} width alt="" /></div>
                                <div className='uk-width-1-3@s uk-text-center'><img className='uk-padding' src={AdmisionMobile} width='90%' alt="" /></div>
                            </div>
                        </div>
                        <div className='uk-width-1-1@s'>
                            <p align='justify'>
                                Developed a new Admission Portal to manage the admission process for +1500 applicants. This platform uses vision api for an image validation prior to registration.
                                </p><br />
                        </div>
                        <div className='uk-width-1-1@s'>
                            <div className='uk-grid-divider' data-uk-grid>
                                <div className='uk-width-1-2@s '>
                                    <div className='uk-padding uk-text-center'>
                                        <FontAwesomeIcon className='primary' icon="pencil-ruler" size="2x" />
                                        <h4 className='uk-margin-remove'>Frontend</h4>
                                        <ul className="uk-list uk-list-large uk-list-divider">
                                            <li>HTML5, CSS3, Javscript</li>
                                            <li>JQuery v3</li>
                                            <li>Google Vision API. D3.js, FullCalendarJS</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='uk-width-1-2@s '>
                                    <div className='uk-padding uk-text-center'>
                                        <FontAwesomeIcon className='primary' icon="cogs" size="2x" />
                                        <h4 className='uk-margin-remove'>Backend</h4>
                                        <ul className="uk-list uk-list-large uk-list-divider">
                                            <li>PHP v7.1</li>
                                            <li>PHPMailer</li>
                                            <li>mPDF</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='uk-width-1-1@s'>
                                <br />
                                <p align='center' className='uk-text-emphasis'>Sorry, the privacy contract doesn't allow me to show the live preview or the code of this project.</p>
                            </div>
                        </div>
                    </>
                )
                break;
            }
            case '7': {
                content = (
                    <>
                        <div className='uk-width-1-1@s'>
                            <div className='uk-grid'>
                                <div className='uk-width-2-3@s'><img className='uk-padding' src={img_MatriculaUCSMDesktop} width alt="" /></div>
                                <div className='uk-width-1-3@s uk-text-center'><img className='uk-padding uk-padding-remove-top' src={img_MatriculaUCSMMobile} width='90%' alt="" /></div>
                            </div>
                        </div>
                        <div className='uk-width-1-1@s'>
                            <p align='center'>Developed a new Enrolment Portal to manage the enrolment process for +7800 students.</p>
                            <br />
                        </div>
                        <div className='uk-width-1-1@s'>
                            <div className='uk-grid'>
                                <div className='uk-width-1-3@s uk-text-center'><img className='uk-padding uk-padding-remove-top' width='90%' src={img_MatriculaExtra1} alt="" /></div>
                                <div className='uk-width-2-3@s'><img src={img_MatriculaExtra2} alt="" /></div>
                            </div>
                        </div>
                        <div className='uk-width-1-1@s'>
                            <div className='uk-grid-divider' data-uk-grid>
                                <div className='uk-width-1-2@s '>
                                    <div className='uk-padding uk-text-center'>
                                        <FontAwesomeIcon className='primary' icon="pencil-ruler" size="2x" />
                                        <h4 className='uk-margin-remove'>Frontend</h4>
                                        <ul className="uk-list uk-list-large uk-list-divider">
                                            <li>HTML5, CSS3, Javscript</li>
                                            <li>JQuery v3, FullCalendar.js, OneSignal SDK</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='uk-width-1-2@s'>
                                    <div className='uk-padding uk-text-center'>
                                        <FontAwesomeIcon className='primary' icon="cogs" size="2x" />
                                        <h4 className='uk-margin-remove'>Backend</h4>
                                        <ul className="uk-list uk-list-large uk-list-divider">
                                            <li>ASP.net Core</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='uk-width-1-1@s'>
                            <p align='center'><br />
                                Sorry, the privacy contract doesn't allow me to show the live preview or the code of this project.
                            </p>
                        </div>
                    </>
                )
                break;
            }
            case '8': {
                content = (
                    <>
                        <div className='uk-width-1-1@s'>
                            <div className='uk-grid'>
                                <div className='uk-width-2-3@s'><img className='uk-padding' src={img_CMUDesktop} width alt="" /></div>
                                <div className='uk-width-1-3@s uk-text-center'><img className='uk-padding' src={img_CMUMobile} width='90%' alt="" /></div>
                            </div>
                        </div>
                    </>
                )
                break;
            }
            case '9': {
                content = (
                    <>
                        <div className='uk-width-1-1@s'>
                            <div className='uk-grid'>
                                <div className='uk-width-1-1'><img className='uk-padding' src={img_VotingDesktop} width alt="" /></div>

                            </div>
                        </div>
                        <div className='uk-width-1-1@s'>
                            <p align='center'>Developer of the new Voting Web and Mobile applications for more than +12000 students. Project leader, responsible for the installation, configuration and control during the electoral process.</p><br />
                        </div>
                        <div className='uk-width-1-1@s'>
                            <div className='uk-grid-divider data-uk-grid' data-uk-grid>
                                <div className='uk-width-1-2@s '>
                                    <div className='uk-padding uk-text-center'>
                                        <FontAwesomeIcon className='primary' icon="pencil-ruler" size="2x" />
                                        <h4 className='uk-margin-remove'>Frontend</h4>
                                        <ul className="uk-list uk-list-large uk-list-divider">
                                            <li>HTML5, CSS3, Javscript</li>
                                            <li>JQuery v3</li>
                                            <li>D3.js</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='uk-width-1-2@s'>
                                    <div className='uk-padding uk-text-center'>
                                        <FontAwesomeIcon className='primary' icon="cogs" size="2x" />
                                        <h4 className='uk-margin-remove'>Backend</h4>
                                        <ul className="uk-list uk-list-large uk-list-divider">
                                            <li>PHP v7.1</li>
                                            <li>PHPSpreadsheet</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='uk-width-1-1@s'>
                            <p align='center'><br />
                                <a href='http://votingapp.jeanvera.com/' className="md-btn md-btn-steam md-btn-icon md-btn-wave-light" title='External link'><FontAwesomeIcon className='md-color-white' icon="eye" /> Live demo</a>
                            </p>
                        </div>
                    </>
                )
                break;
            }
            case '10': {
                content = (
                    <>
                        <div className='uk-width-1-1@s'>
                            <div className='uk-grid'>
                                <div className='uk-width-2-3@s'><img className='uk-padding' src={img_CMUDesktop} width alt="" /></div>
                                <div className='uk-width-1-3@s uk-text-center'><img className='uk-padding' src={img_CMUMobile} width='90%' alt="" /></div>
                            </div>
                        </div>
                        <div className='uk-width-1-1@s'>
                            <p align='center'>This is a website for a school using Wordpress v4.</p><br />
                        </div>
                        <div className='uk-width-1-1@s'>
                            <div className='uk-grid-divider data-uk-grid' data-uk-grid>
                                <div className='uk-width-1-1@s '>
                                    <div className='uk-padding uk-text-center'>
                                        <FontAwesomeIcon className='primary' icon="pencil-ruler" size="2x" />
                                        <h4 className='uk-margin-remove'>Plugins</h4>
                                        <ul className="uk-list uk-list-large uk-list-divider">
                                            <li>Visual Composer 4.10</li>
                                            <li>WooCommerce 3.3</li>
                                            <li>Slider Revolution</li>
                                            <li>Contact Form 7</li>
                                            <li>Video Parallax</li>
                                            <li>Google Maps Support</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='uk-width-1-1@s'>
                            <p align='center'><br />
                                <a href='http://www.cmu.edu.pe/' className="md-btn md-btn-steam md-btn-icon md-btn-wave-light">
                                    <FontAwesomeIcon className='md-color-white' icon="eye" title='External link' /> Live demo</a>
                            </p>
                        </div>
                    </>
                )
                break;
            }
            default: {
                content = <h3>No content</h3>
            }
        }
        return content;
    }
    render() {
        var { id } = this.props.match.params;
        let content = [
            { 'Name': 'Real Estate Software' },
            { 'Name': 'Material Design for UIKit' },
            { 'Name': 'FIA \'19 - Expo App' },
            { 'Name': 'EduGames' },
            { 'Name': 'Movies Platform' },
            { 'Name': 'Online Admission System' },
            { 'Name': 'Students Web Enrolment System' },
            { 'Name': 'School Attendance System' },
            { 'Name': 'Voting System' },
            { 'Name': 'CMU School Website' }
        ];
        console.log(content[id]);
        return (
            <div className='page-content-inner'>
                <div className='uk-grid' data-uk-data>
                    <div className='uk-width-1-1@s'>
                        <Typist
                            startDelay={1000}
                            onTypingDone={this.onHeaderTyped}
                            className=' md-color-grey-900 title-name uk-margin-bottom'><a className='primary' onClick={this.goBack}>Portfolio <FontAwesomeIcon icon="chevron-right" title='arrow' /> </a>{content[id - 1].Name}</Typist>
                    </div>
                    {this.renderContent(id)}
                </div>
            </div>
        )
    }
}

export default Contact;

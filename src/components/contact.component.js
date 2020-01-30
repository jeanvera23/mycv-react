import React, { Component } from 'react';
import Typist from 'react-typist';
import MDUIkit from 'md-uikit';
import UIkit from 'uikit';
import Recaptcha from 'react-recaptcha';
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
    verifyRecaptcha = (response) => {
        if (response) {
            this.setState({ isVerified: true })
        }
    }
    callback = (response) => {
        console.log(response)
    }
    SendEmail = (e) => {
        e.preventDefault();
        var inputName = document.querySelector('#input_name').value;
        var inputEmail = document.querySelector('#input_email').value;
        var inputSubject = document.querySelector('#input_subject').value;
        var inputMessage = document.querySelector('#input_message').value;
        UIkit.notification.closeAll();
        if(inputName !== '' && inputEmail !=='' && inputSubject !== '' && inputMessage !== '' ){
        var formData = new FormData();
        formData.append('inputName', inputName);
        formData.append('inputEmail', inputEmail);
        formData.append('inputSubject', inputSubject);
        formData.append('inputMessage', inputMessage);
        fetch("http://jeanvera.com/scripts/send_email.php", {
            method: 'POST',
            body: formData
        })
            .then(res => res.text())
            .then(data => {
                if (data) {
                    this.setState({ isSent: true })
                }
            }).catch(() => {

            });
        }else{
            UIkit.notification({ message: 'Please fill all the required fields.', pos: 'bottom-right', status: 'danger' });
        }
    }
    render() {
        return (
            <div className='page-content-inner'>
                <Typist
                    startDelay={1000}
                    onTypingDone={this.onHeaderTyped}
                    className='primary title-name uk-margin-bottom'>Contact Me </Typist>
                <div className='uk-grid uk-grid-small' data-uk-grid data-uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500">
                    <div className='uk-width-1-2@m'>
                        <p align='justify'>I am interested in freelance or full-time opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to contact me using below form either.</p>

                        {this.state.isSent ?
                            <div>
                                <div>Thanks for contact me. I'll send you a response as soon as possible.</div>
                                <br />
                                <a href={'http://jeanvera.com/#/contact'} className="md-btn md-btn-primary md-btn-wave-light">Send another message</a>
                            </div>
                            :
                            <div className='uk-grid' data-uk-grid>
                                <div className='uk-width-1-2@m'>
                                    <div className="md-input-wrapper md-input-wrapper-outlined md-input-wrapper-with-icon">
                                        <span className="md-input-icon"><FontAwesomeIcon className='font-21' icon="user" /></span>
                                        <label>Name</label>
                                        <input type="text" className="md-input" id='input_name' />
                                        <span className="md-input-bar"></span>
                                    </div>
                                </div>
                                <div className='uk-width-1-2@m'>
                                    <div className="md-input-wrapper md-input-wrapper-outlined md-input-wrapper-with-icon">
                                        <span className="md-input-icon"><FontAwesomeIcon className='font-21' icon="envelope" /></span>
                                        <label>Email</label>
                                        <input type="text" className="md-input" required id='input_email' />
                                        <span className="md-input-bar"></span>
                                    </div>
                                </div>
                                <div className='uk-width-1-1'>
                                    <div className="md-input-wrapper md-input-wrapper-outlined md-input-wrapper-with-icon">
                                        <span className="md-input-icon"><FontAwesomeIcon className='font-21' icon="tag" /></span>
                                        <label>Subject</label>
                                        <input type="text" className="md-input" id='input_subject' />
                                        <span className="md-input-bar"></span>
                                    </div>
                                </div>
                                <div className='uk-width-1-1'>
                                    <div className="md-input-wrapper md-input-textarea">
                                        <label>Message</label>
                                        <textarea className="md-input" required id='input_message'></textarea>
                                    </div>
                                </div>
                                <div>
                                    <Recaptcha
                                        sitekey="6LcRMswUAAAAAIrr6srX0BasJ3EjXqeUHctLQjxp"
                                        render="explicit"
                                        onloadCallback={this.callback}
                                        verifyCallback={this.verifyRecaptcha}
                                    />
                                </div>
                                <div className='uk-width-1-1'>
                                    {this.state.isVerified ?
                                        <a className="md-btn md-btn-primary md-btn-wave-light" onClick={this.SendEmail}><FontAwesomeIcon className='md-color-white' icon="envelope" /> Send message</a> :
                                        <a className="md-btn disabled">Send message</a>
                                    }
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div>

                </div>
            </div>
        );
    }
}

export default Contact;

import React, { Component } from 'react';
import Profile from "../assets/img/profile.jpg";
import { Link } from "react-router-dom";
import Typist from 'react-typist';
import MDUIkit from 'md-uikit';
import UIkit from 'uikit';
class Contact extends Component {
    constructor(props) {
        super(props);
        this.inputName = React.createRef();
    }
    componentDidMount() {
        MDUIkit.init();
    }

    SendEmail = (e) => {
        e.preventDefault();
        var inputName = document.querySelector('#input_name');
        var inputEmail = document.querySelector('#input_email');
        var inputSubject = document.querySelector('#input_subject');
        var inputMessage = document.querySelector('#input_message');
        UIkit.notification.closeAll();
        UIkit.notification({ message: 'Please fill all the required fields.', pos: 'bottom-right', status: 'danger' });
        console.log(inputName.value);
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
                console.log(data);
            }).catch(() => {

            });
    }
    render() {
        return (
            <div className='page-content-inner'>
                <Typist
                    startDelay={1000}
                    onTypingDone={this.onHeaderTyped}
                    className='primary title-name uk-margin-bottom'>Contact Me </Typist>
                <div className='uk-grid uk-grid-small' data-uk-grid>
                    <div className='uk-width-1-2@m'>
                        <p align='justify'>I am interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to contact me using below form either.</p>
                        <div className='uk-grid' data-uk-grid>
                            <div className='uk-width-1-2@m'>
                                <div className="md-input-wrapper md-input-wrapper-outlined md-input-wrapper-with-icon">
                                    <span className="md-input-icon"><i className="fas fa-user"></i></span>
                                    <label>Name</label>
                                    <input type="text" className="md-input" id='input_name' />
                                    <span className="md-input-bar"></span>
                                </div>
                            </div>
                            <div className='uk-width-1-2@m'>
                                <div className="md-input-wrapper md-input-wrapper-outlined md-input-wrapper-with-icon">
                                    <span className="md-input-icon"><i className="fas fa-envelope"></i></span>
                                    <label>Email</label>
                                    <input type="text" className="md-input" required />
                                    <span className="md-input-bar"></span>
                                </div>
                            </div>
                            <div className='uk-width-1-1'>
                                <div className="md-input-wrapper md-input-wrapper-outlined md-input-wrapper-with-icon">
                                    <span className="md-input-icon"><i className="fas fa-tag"></i></span>
                                    <label>Subject</label>
                                    <input type="text" className="md-input" />
                                    <span className="md-input-bar"></span>
                                </div>
                            </div>
                            <div className='uk-width-1-1'>
                                <div className="md-input-wrapper md-input-textarea">
                                    <label>Message</label>
                                    <textarea className="md-input" autocomplete="off" required></textarea>
                                </div>
                            </div>
                            <div className='uk-width-1-1'>
                                <a className="md-btn md-btn-primary md-btn-wave-light" onClick={this.SendEmail}>Send</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        );
    }
}

export default Contact;

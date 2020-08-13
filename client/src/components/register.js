import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
    state = {
        fullName: '',
        phone: '',
        email: '',
        message: '',
        sent: false,
        buttonText: 'Send Message',
    }

    //handle inputs
    handleFullName = (e) => {
        this.setState({ fullName: e.target.value })
    }
    handlePhone = (e) => {
        this.setState({ phone: e.target.value })
    }
    handleEmail = (e) => {
        this.setState({ email: e.target.value })
    }
    handleMessage = (e) => {
        this.setState({ message: e.target.value })
    }
    //end of handle innputs

    formSubmit = (e) => {
        e.preventDefault();

        let data = {
            fullName: this.state.fullName,
            phone: this.state.phone,
            email: this.state.email,
            message: this.state.message
        }

        axios.post('/api/forma', data)
            .then(res => {
                this.setState({
                    sent: true
                }, this.resetForm())
            })
            .catch(() => {
                console.log('message not sent');
            })
    }

    // for reseting initial data
    resetForm=()=>{
        this.setState({
            fullName:'',
            phone:'',
            email:'',
            message:''
        })
        setTimeout(()=>{
            this.setState({
                sent:false,
            })
        },3000)
    }
    render() {
        console.log(this.state.sent);
        return (
            <div className="contact" id="contact">
                <div className="container"><h2 className="text-capitalize"><span>הירשמו עכשיו</span></h2><p>מס' המקומות מוגבל</p></div>
                <div className="contact-child">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="contact-form">
                                    <form onSubmit={this.formSubmit}>
                                        <input type="text"
                                            placeholder="שם מלא"
                                            value={this.state.fullName}
                                            onChange={this.handleFullName}
                                        />
                                        <input type="text"
                                            placeholder="מס' טלפון"
                                            value={this.state.phone}
                                            onChange={this.handlePhone}
                                        />
                                        <input type="text"
                                            placeholder="אימייל"
                                            value={this.state.email}
                                            onChange={this.handleEmail}
                                            required
                                        />
                                        <textarea placeholder="Message"
                                            value={this.state.message}
                                            onChange={this.handleMessage}
                                        ></textarea>


                                           <div className={this.state.sent?'msg msgAppear':'msg'}>Message has been sent</div>
                                        <input type="submit" value="הירשם" className="text-uppercase" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Register;
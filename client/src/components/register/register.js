import React, { Component } from 'react';
import axios from 'axios';
import './register.css';
import { ButtonToolbar } from 'react-bootstrap';
import PopupExmp from './popup';

class Register extends Component {
    state = {
        registerShow: false,
        fullName: '',
        phone: '',
        email: '',
        message: '',
        sent: false
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

    formSubmit = () => {
        // e.preventDefault();
        this.setState({ registerShow: true })
        const data = {
            fullName: this.state.fullName,
            phone: this.state.phone,
            email: this.state.email,
            message: this.state.message
        }
        console.log(data);
        axios.post('/api/forma', data)
            .then(res => {
                if (res.status === 200) {
                    this.setState({ sent: true })
                    console.log(res);
                }
                else {
                    console.log(`error code ${res.status}`)
                }
            })
            .catch((err) => {
                console.log(err.message);

            })
        console.log('dgbfhdgngsfg');

    }

    resetForm = () => {
        this.setState({
            fullName: '',
            phone: '',
            message: '',
            email: '',
            sent: false
        })


    }

    render() {
        let registerClose = () =>{
            this.setState({ registerShow: false });
           this.resetForm();
        } 

        return (
            <div className="contact" id="contact">
                {/* <div className="container"> */}
                    <h2 className="text-capitalize">
                        {/* <span>הירשמו עכשיו</span> */}
                        <span>לקבלת פרטים נוספים</span>
                    </h2>

                    <p>***מס' המקומות מוגבל</p>
                {/* </div> */}
                <div className="contact-child">
                    <div className="formregister">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="contact-form">
                                    <form>
                                        <input type="text"
                                            placeholder="שם מלא"
                                            value={this.state.fullName}
                                            onChange={this.handleFullName}
                                            required
                                        />
                                        <input type="text"
                                            placeholder="מס' טלפון"
                                            value={this.state.phone}
                                            onChange={this.handlePhone}
                                            required
                                        />
                                        <input type="text"
                                            placeholder="אימייל"
                                            value={this.state.email}
                                            onChange={this.handleEmail}

                                            required="Enter your e-mail"

                                            // value='/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i'
                                            message="Enter a valid e-mail address"

                                        />
                                        <textarea placeholder="Message"
                                            value={this.state.message}
                                            onChange={this.handleMessage}
                                        ></textarea>

                                        {this.state.sent ? <div className='msg'>Message has been sent</div> : ''}
                                        {/* <i class="glyphicon-thumbs-up"></i> */}
                                  
                                        <ButtonToolbar>
                                             <input type="button" value="הירשם" className="button" onClick={this.formSubmit} />
                                            {/* <button className='btnTypeManager' onClick={() => {
                                               
                                            }}>הירשם</button> */}
                                            <PopupExmp
                                                show={this.state.registerShow}
                                                onHide={registerClose}
                                            />
                                        </ButtonToolbar>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div >
        );
    }
}

export default Register;



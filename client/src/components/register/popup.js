import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
// import { Redirect } from 'react-router-dom';

class PopupExmp extends Component {
    state = {}

    render() {
        // if (this.state.isBusinessManager) {
        //     return <Redirect to='/Admin'/>
        // }
        // if (this.state.isEmployee) {
        //     return <Redirect to='/Employee'/>            
        // }
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton={true}>
                    <Modal.Title id="contained-modal-title-vcenter">
                
        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <Button variant="secondary" onClick={()=>{ }
                    }>נפתלי
              </Button>
                    <Button variant="primary" onClick={()=>{ }}>
                        יהודה
              </Button> */}
                    <img id='success' src='iconfinder_Tick_Mark_Dark_1398912.png' alt='success' />
                    <h4><b>ההרשמה בוצעה בהצלחה</b></h4>
                    <h4>צוות N.A hairstyle יצור איתך קשר ב48 שעות הקרובות</h4>
                    <div>

                    </div>

                </Modal.Body>
                <Modal.Footer>
                    {/* <img src='https://image.freepik.com/free-vector/men-hair-moustache-styling-vintage-gentleman-haircut-beauty-beard-fashion-mustaches-styles-illustration-set_102902-1602.jpg' alt=''/> */}
                    <Button variant='danger' onClick={this.props.onHide}>חזור</Button>
                </Modal.Footer>
            </Modal >

        );
    }
}

export default PopupExmp;
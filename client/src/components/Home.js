import React, { Component } from 'react';
import '../App.css';
import { Carousel } from 'react-bootstrap';



class Home extends Component {

    render() {
        return (
            <div className="body">
                
                <header id="home">
                    <div className="content">
                        <div className="d-flex align-items-center flex-column justify-content-center">
                            <h1> BARBER קורס </h1>
                            <p>הכשרת ספרים</p>
                  
                        </div>
                    </div>

                    <Carousel >
                        <Carousel.Item >
                            <img
                                className="d-block w-100"
                                src="/imgs/logo.png"
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/imgs/84983794-styling-hair-with-combs-and-tools-in-barbershop-on-stone-background-top-view-mock-up.jpg"
                                alt="Third slide"
                            />

   
                        </Carousel.Item>

                    </Carousel>
                </header>


            </div>
        );
    }

}

export default Home;
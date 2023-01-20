import React from 'react';
import './Insureance.css';
import finan from '../images/logo/finansial.jpg';
import According from '../images/logo/According.jpg';
import mesurment from '../images/logo/mesurment.png';
const Insureance = () => {
    return (
        <div className='insurance'>
            <div className='container'>
                <div className='headSection'>
                    <div className='row g-5'>
                        <div className='col-12 col-lg-6 col-xl-6'>
                            <p className='title'>The Solution To Your Insurance Needs</p>
                        </div>
                        <div className='col-12 col-lg-6 col-xl-6'>
                            <p className='description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla ullam, voluptatibus nostrum molestiae eius unde, perferendis, magni totam quidem consequuntur sequi commodi.</p>
                        </div>
                    </div>
                </div>
                <div className='content'>
                    <div className='row'>
                        <div className='col-12 col-lg-4 col-xl-4 colMargin'>
                            <div className='contentBox'>
                                <img src={finan} alt="" />
                                <p className='title'>Financial Professional</p>
                                <p className='description'>Lorem ipsum dolor sit amet. dolor sit amet. Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-4 col-xl-4 colMargin'>
                            <div className='contentBox'>
                                <img src={mesurment} alt="" />
                                <p className='title'>Mature <br /> Calculation</p>
                                <p className='description'>Lorem ipsum dolor sit amet. dolor sit amet. Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-4 col-xl-4 colMargin'>
                            <div className='contentBox'>
                                <img src={According} alt="" />
                                <p className='title'>According Condition</p>
                                <p className='description'>Lorem ipsum dolor sit amet. dolor sit amet. Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Insureance;
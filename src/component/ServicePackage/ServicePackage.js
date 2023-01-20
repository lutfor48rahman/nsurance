import React from 'react';
import './ServicePackage.css';
import according from '../images/logo/house.jpg';
import business from '../images/logo/office.jpg';
import personal from '../images/logo/bag.png';
const ServicePackage = () => {
    return (
        <div className='package'>
            <div className='container packageBg'>
            <div className='head'>
                <p className='title'>The Best <span>Service</span> That we Have</p>
               <div className='descriptionDiv'>
               <p className='description'>Providing a variety of personal insurance solutions, business insurance, and employee benefits is the best from insurance incorporated.</p>
               </div>
            </div>
            </div>

            <div className="packages container">
                <div className="row container">
                    <div className='col-12 col-lg-4 col-xl-4'>
                        <div className='packageContent'>
                            <img className='image' src={according} alt="" />
                            <p className='name'>Personal Insurance</p>
                            <p className='amount'><span>$127</span>/Month</p>
                            <hr />
                            <p className='points'><span>&#x2022;</span> Home Insurance</p>
                            <p className='points'><span>&#x2022;</span> Auto Insurance</p>
                            <p className='points'><span>&#x2022;</span> Individual Life Insurance</p>
                            <p className='points'><span>&#x2022;</span> Individual Health Insurance</p>
                            <div className='packageButton'>
                                <button>Subscribe</button>
                            </div>
                        </div>

                    </div>
                    <div className='col-12 col-lg-4 col-xl-4'>
                        <div className='packageContent'>
                            <img className='image' src={business} alt="" />
                            <p className='name'>Personal Insurance</p>
                            <p className='amount'><span>$127</span>/Month</p>
                            <hr />
                            <p className='points'><span>&#x2022;</span> Home Insurance</p>
                            <p className='points'><span>&#x2022;</span> Auto Insurance</p>
                            <p className='points'><span>&#x2022;</span> Individual Life Insurance</p>
                            <p className='points'><span>&#x2022;</span> Individual Health Insurance</p>
                            <div className='packageButton'>
                                <button className='button2'>Subscribe</button>
                            </div>
                        </div>

                    </div>
                    <div className='col-12 col-lg-4 col-xl-4'>
                        <div className='packageContent'>
                            <img className='image' src={personal} alt="" />
                            <p className='name'>Personal Insurance</p>
                            <p className='amount'><span>$127</span>/Month</p>
                            <hr />
                            <p className='points'><span>&#x2022;</span> Home Insurance</p>
                            <p className='points'><span>&#x2022;</span> Auto Insurance</p>
                            <p className='points'><span>&#x2022;</span> Individual Life Insurance</p>
                            <p className='points'><span>&#x2022;</span> Individual Health Insurance</p>
                            <div className='packageButton'>
                                <button>Subscribe</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicePackage;
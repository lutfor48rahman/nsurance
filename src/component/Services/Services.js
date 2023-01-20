import React from 'react';
import './Services.css';
import amazon from '../images/amazon.jpg';
import payoneer from '../images/payoneer.png';
import bitpay from '../images/bitpay.png';
import applepay from '../images/apple.png';
import googlepay from '../images/googlePay.jpg';
import alipay from '../images/alipay.jpg';

const Services = () => {
    return (
        <div className='services'>
            <div className='container'>
                <div className='head'>
                    <p>We are lisence over 25</p>
                </div>
                <div className='row'>
                    <div className='col-6 col-lg-2 col-xl-2'>
                        <img src={amazon} alt="" />
                    </div>
                    <div className='col-6 col-lg-2 col-xl-2'>
                        <img src={bitpay} alt="" />
                    </div>
                    <div className='col-6 col-lg-2 col-xl-2'>
                        <img src={payoneer} alt="" />
                    </div>
                    <div className='col-6 col-lg-2 col-xl-2'>
                        <img src={applepay} alt="" />
                    </div>
                    <div className='col-6 col-lg-2 col-xl-2'>
                        <img src={googlepay} alt="" />
                    </div>
                    <div className='col-6 col-lg-2 col-xl-2'>
                        <img src={alipay} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
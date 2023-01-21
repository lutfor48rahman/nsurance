import React from 'react';
import './ClientReview.css';
import { FaStar } from 'react-icons/fa';
import man from '../images/man2.jpg';

const ClientReview = () => {
    const stars = Array(5).fill(0);
    const columns = Array(8).fill(0);
    return (
        <div className='review'>
            <div className='head'>
                <p>Real <span>Clients</span> With HOnest <span>Reviews</span> And They Are Coverage.</p>
            </div>
            <div className='row g-3'>
                {
                    columns.map((_,index)=>{
                        return(
                            <div className='col-12 col-lg-3 col-xl-3'>
                  <div className='reviewBox'>
                    <div className='headName'>
                        <div>
                        <img src={man} alt="" />
                        </div>
                        <div>
                            <p className='name'>Bradley Lawlor</p>
                            <p className='title'>Super Duper</p>
                        </div>
                    </div>
                    <div className='description'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, doloremque?</p>

                    </div>
                  <div>
                  {
                    stars.map((_,index) => {
                        return(
                            <FaStar style={{
                                marginRight:10,
                                color:'orange'
                            }}/>
                        )
                    })
                   }
                  </div>
                  </div>
                </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ClientReview;
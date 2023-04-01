import React from 'react';

const PovioVision =()=>{
    return(
        <section className="software_featured_area_two sec_pad" id="vision" style={{position:"relative"}}>
            <div className="container">
            <img className='img-fluid' style={{right:"10px",bottom:"0px",position:"absolute"}} src={require ("../img/povio/about2.png")} alt=""/>
            <img className='img-fluid' style={{left:"10px",top:"130px",position:"absolute"}} src={require ("../img/povio/triangle6.png")} alt=""/>
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 d-flex align-items-center pl-0">
                        <div className="visionPovio_featured_content">
                            <h2 className="mb-30 wow fadeInRight" data-wow-delay="0.2s">Vision and Goal</h2>
                            <p className="wow fadeInRight mb-4" data-wow-delay="0.4s">Vision: The vision of the PoVio project is to create a decentralized, 
                            open and inclusive digital world where users can interact, transact, and create without the limitations of centralized systems. 
                            It aims to provide a seamless integration between the physical and virtual world, and provide users with a new form of digital ownership and identity.
                            </p>
                            <p className="wow fadeInRight" data-wow-delay="0.6s">Goal: The goal of the PoVio project is to become the backbone of a new decentralized 
                            internet, where users have control over their data and digital assets, and can participate in a global digital economy. By leveraging blockchain technology, 
                            the project aims to create a trustless, transparent, and secure virtual world that provides users with a new level of freedom, autonomy, and innovation. 
                            The ultimate goal is to create a more equitable, sustainable and thriving digital society for all.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PovioVision;
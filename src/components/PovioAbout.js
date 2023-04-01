import React from 'react';

const PovioAbout =()=>{
    return(
        <section className="software_featured_area_two sec_pad" id="about" style={{position:"relative"}}>
            <img className='img-fluid' style={{right:"10px",position:"absolute"}} src={require ("../img/povio/triangle2.png")} alt=""/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="software_featured_img wow fadeInLeft" data-wow-delay="0.3s">
                            <img className="img-fluid position-absolute" src={require("../img/povio/groupmask2.png")} alt=""/>
                            <div>
                            <img className="img-fluid position-relative" src={require("../img/povio/maskgroup (copy3).png")} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center pl-0">
                        <div className="about_featured_content">
                            <h2 className="mb-3 wow fadeInRight" data-wow-delay="0.4s">About Us</h2>
                            <p className="wow fadeInRight mb-2" data-wow-delay="0.5s">The PoVio project is a decentralized virtual world platform built on blockchain technology, with a focus on providing an immersive and inclusive experience for content creators. As a content creator, you will have the opportunity to join a vibrant & growing community of like minded individuals & take part in the creation of a new digital society.</p>
                            <p className="w_color f_400 mb_50 wow fadeInRight" data-wow-delay="0.6s">With PoVio, you will be able to monetize your creations and establish your digital identity as a valuable content creator. The  platform ensures that you have complete control over your content, and you can receive fair compensation for your work. The PoVio platform offers a range of tools and services that allow you to create and share your content in a variety of ways. Whether you are a musician, artist, writer, or game designer, you will find the resources you need to bring your vision to life.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PovioAbout;
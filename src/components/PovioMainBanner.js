import React from 'react';
import Reveal from 'react-reveal/Reveal';

const PovioMainBanner =()=>{
    return(
        <section className="software_featured_area_two sec_Sec" id="home" style={{position:"relative"}}>
            
                <img className='img-fluid' style={{left:"30px",top:"100px",position:"absolute"}} src={require ("../img/povio/about1.png")} alt=""/>
                <img className='img-fluid' style={{right:"0px",top:"0px",position:"absolute"}} src={require ("../img/povio/Shape.png")} alt=""/>
                <img className='img-fluid' style={{left:"0px",bottom:"0px",position:"absolute"}} src={require ("../img/povio/about2.png")} alt=""/>

            <div className="container">
                <div className="row">
                    <div className="col-lg-5 project_sec_title" bottom duration={500}>
                        <div className='text-center'>
                        <Reveal effect="fadeInUp" duration={1300}><h2>YOUR PLATFORM <br/><span style={{color:"#E841BA"}}>YOUR</span> RULES!</h2></Reveal>
                        </div>
                        <div style={{border: "14px solid #E841BA", width:"fit-content"}} bottom duration={600}>
                            <video width="100%" height="auto" controls loop autoPlay muted>
                                {/* <source src={require("../../img/")} type={video/mp4}> */}
                                <source src={require("../img/povio/Video_Povio.mp4")}/>
                            </video>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center pl-0">
                        {/* <div className="about_featured_content">
                            <h2 className="mb-3 wow fadeInRight" data-wow-delay="0.2s">About Us</h2>
                            <p className="wow fadeInRight mb-2" data-wow-delay="0.4s">The PoVio project is a decentralized virtual world platform built on blockchain technology, with a focus on providing an immersive and inclusive experience for content creators. As a content creator, you will have the opportunity to join a vibrant & growing community of like minded individuals & take part in the creation of a new digital society.</p>
                            <p className="w_color f_400 mb_50 wow fadeInRight" data-wow-delay="0.6s">With PoVio, you will be able to monetize your creations and establish your digital identity as a valuable content creator. The  platform ensures that you have complete control over your content, and you can receive fair compensation for your work. 
                            The PoVio platform offers a range of tools and services that allow you to create and share your content in a variety of ways. Whether you are a musician, artist, writer, or game designer, you will find the resources you need to bring your vision to life.</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PovioMainBanner;
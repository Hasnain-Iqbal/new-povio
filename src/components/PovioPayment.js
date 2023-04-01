import React from 'react';
import PovioPaymentTitle from './PovioPaymentTitle';
import Fade from 'react-reveal/Fade';

const PovioPayment = () => {
    return(
        <React.Fragment>
            <section className="seo_service_area sec_pad" id="payments" style={{position:"relative"}}>
                <div className="container">
                    <img className='img-fluid' style={{left:"10px",position:"absolute"}} src={require ("../img/povio/about1.png")} alt=""/>
                    <PovioPaymentTitle Title='NFT Payments' TitleP='As content creator you need to have an easy way to monetize your digital content – your audio, video, text or photo content. PoWio.io is providing the payment options'/>
                    <div className="row seo_service_info">
                        <Fade bottom duration={500}>
                            <div className="col-lg-6 col-md-6">
                                <div className="seo_service_item">
                                    <div className="d-flex justify-content-center mb-4"><img src={require('../img/povio/01.png')} alt=""/></div>
                                    <p className="mb-2">NFT (Non-Fungible Token) payments refer to a new way of monetizing and selling digital content using blockchain technology. In the PoVio project, NFTs are used as a form of digital ownership and allow to sell the work as unique and valuable assets.</p>
                                    <p className="mb-2">With NFT payments, content creators could sell their creations directly to their audience without the need for intermediaries. They receive a fairer compensation for their work and have complete control over their content & its distribution. NFTs are stored on the blockchain, can be easily traded, bought, & sold on the PoVio platform and other decentralized marketplaces.</p>
                                    <p className="mb-2">It also provide a new level of security and authenticity for digital content. Their ownership and authenticity can be easily verified and tracked, which helps to prevent fraud.</p>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom duration={700} >
                            <div className="col-lg-6 col-md-6">
                                <div className="seo_service_item">
                                <div className="d-flex justify-content-center mb-4"><img src={require('../img/povio/02.png')} alt=""/></div>
                                    <p className="mb-2">The NFT subscription model refers to a way of monetizing digital content using NFTs and recurring payments. In the PoVio project, content creators can offer their works as NFTs on a subscription basis, allowing their audience to access their content and receive new updates on a recurring basis.</p>
                                    <p className="mb-2">With this model, you can receive a steady and predictable income from the work while providing the audience with exclusive access to new and updated content. The NFTs serve as a form of digital ownership, providing a sense of ownership and engagement with the content.</p>
                                    <p className="mb-2">It provides a new level of trust, as the recurring payments are recorded & can be easily tracked & verified. This ensure that content creators receive fair compensation for their work, & the audience can trust that they are getting what they paid for</p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default PovioPayment;

import React, {Component} from 'react';

class PovioDigital extends Component{
    render(){
        return(
            <section className="event_team_area digital_influencer" id="influencer">
            <div className="container">
                <div className='d-flex flex-wrap' style={{justifyContent:"space-between"}}>
                    <div className="col-lg-6 col-md-6">
                        <div className="mb-4">
                            <div className="">
                                <h1 className="w_color f_600 f_size_50 mb-3">Digital influencers face several <span style={{color:"#E841BA"}}>challenges</span> in today's digital world</h1>
                                <div className='col-lg-9 col-md-12'>
                                    <p className='digital_influencer_para'>Digital influencers currently face several challenges, including dependence on intermediaries, lack of ownership and control, 
                                        unfair compensation, limited reach and visibility, and vulnerability to censorship. These challenges limit their ability to 
                                        monetize their content and engage with their audience effectively.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <div className="">
                            <div className={`p_digital_item `}>
                                <img className="wow fadeInRight mb-5" data-wow-delay="0.2s" src={require("../img/povio/001.png")} alt=""/>
                                <h4 className="o_color f_size_20 mb-2">Dependence on intermediaries</h4>
                                <p className="digital_influencer_paragraph">Many digital influencers rely on centralized 
                                platforms, such as social media and content-sharing websites, to reach their audience 
                                and monetize their content. This dependence on intermediaries can limit their control 
                                over their content and reduce their earnings, as these platforms take a portion of 
                                their revenue as fees.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <div className="">
                        <div className={`p_digital_item `}>
                                <img className="wow fadeInRight mb-5" data-wow-delay="0.2s" src={require("../img/povio/002.png")} alt=""/>
                                <h4 className="o_color f_size_20 mb-2">Lack of ownership and control</h4>
                                <p className="digital_influencer_paragraph">Digital influencers often do not own their content or 
                                the rights to their digital assets, making it difficult for them to monetize their work 
                                and secure their income over time.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                    <div className="">
                        <div className={`p_digital_item `}>
                                <img className="wow fadeInRight mb-5" data-wow-delay="0.2s" src={require("../img/povio/03.png")} alt=""/>
                                <h4 className="o_color f_size_20 mb-2">Unfair compensation</h4>
                                <p className="digital_influencer_paragraph">Many digital influencers are not fairly compensated for 
                                their work, as the revenue generated from their content is often split between them and the centralized 
                                platforms they use.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                    <div className="">
                        <div className={`p_digital_item `}>
                                <img className="wow fadeInRight mb-5" data-wow-delay="0.2s" src={require("../img/povio/04.png")} alt=""/>
                                <h4 className="o_color f_size_20 mb-2">Limited reach and visibility</h4>
                                <p className="digital_influencer_paragraph">Digital influencers can face limitations in reaching and 
                                engaging with their audience, as the algorithms used by centralized platforms prioritize content 
                                from larger, more established influencers.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                    <div className="">
                        <div className={`p_digital_item `}>
                                <img className="wow fadeInRight mb-5" data-wow-delay="0.2s" src={require("../img/povio/05.png")} alt=""/>
                                <h4 className="o_color f_size_20 mb-2">Vulnerability to censorship</h4>
                                <p className="digital_influencer_paragraph">Digital influencers are often at risk of having their content 
                                censored or removed from centralized platforms, limiting their freedom of speech and ability to reach 
                                their audience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

export default PovioDigital;
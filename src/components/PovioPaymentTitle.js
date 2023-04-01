import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal';

class PovioPaymentTitle extends Component {
    render(){
        var {Title, TitleP} = this.props;
        return(
            <div className=" about_featured_content text-center mb_70">
                <Reveal effect="fadeInUp" duration={1300}><h2><span style={{color:"#E841BA"}}>NFT</span> Payments</h2></Reveal>
                <div  className='seo_sec_title'>
                <Reveal effect="fadeInUp" duration={1600}><p>{TitleP}</p></Reveal>
                </div>
            </div>
        )
    }
}
export default PovioPaymentTitle;

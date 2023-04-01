import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal';

class PovioProjectTitle extends Component {
    render(){
        return(
            <div className="project_sec_title text-center mb_70">
                <Reveal effect="fadeInUp" duration={1300}><h2> PoVio Project Offers A <span style={{color:"#E841BA"}}>Unique</span> Opportunity</h2></Reveal>
                <div className='d-flex justify-content-center'> 
                    <div className='col-md-10'>
                        <Reveal effect="fadeInUp" duration={1600}><p>In summary, the PoVio project offers content creators a unique opportunity to be part of a decentralized and inclusive digital world, 
                        where you can build your reputation, monetize your content, and participate in a thriving global digital economy. Most important aspect of this platform: 
                        it is your own tool: you own it, you control it. Platform can be customized: your logo, your background, your contact information. 
                        It runs as your own homepage on fully decentralized infrastructure.</p>
                        </Reveal>
                    </div>
                </div>
            </div>
        )
    }
}
export default PovioProjectTitle;

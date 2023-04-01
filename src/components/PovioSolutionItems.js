import React, {Component} from 'react';
import Reveal from 'react-reveal'
class PovioSolutionItems extends Component{
    render(){
        var{HRtitle, HRdescription, Hicon, rclass, iclass} = this.props;
        return(
                <div className="col-lg-4 col-sm-6">
                    <Reveal bottom cascade>
                    <div className={`p_service_item ${rclass}`}>
                        <div className={`icon ${iclass}`}><i className={`ti-${Hicon}`}></i></div>
                        <h4 className="w_color f_size_22 f_700">{HRtitle}</h4>
                        <h5 className="new_color f_size_30">{HRdescription}</h5>
                    </div>
                    </Reveal>
                </div>
            
        )
    }
}
export default PovioSolutionItems;
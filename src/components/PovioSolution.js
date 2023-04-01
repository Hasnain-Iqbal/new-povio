import React, {Component} from 'react';
import PovioSolutionItems from './PovioSolutionItems';

class PovioSolution extends Component{
    render(){
        let PovioSolutionsData = this.props.PovioSolutionsData;
        return(
            <section className="prototype_service_info" id="solutions" style={{position:"relative"}}>
                <div className="container">
                    <img className='img-fluid' style={{left:"10px",position:"absolute"}} src={require ("../img/povio/triangle3.png")} alt=""/>
                    <img className='img-fluid' style={{right:"10px",bottom:"30px",position:"absolute"}} src={require ("../img/povio/triangle5.png")} alt=""/>
                    <div className="text-center">
                        <h1 className="w_color f_600 solutions f_size_50 mb_50">Solutions</h1>
                    </div>
                        <div className="row p_service_info text-center w_color justify-content-center">
                                {
                                    PovioSolutionsData.HRService.map(item => {
                                        return(
                                            <PovioSolutionItems HRtitle={item.HRtitles} HRdescription={item.HRdescription}  Hicon={item.Hicon} rclass={item.rclass} iclass={item.iclass} key={item.id}/>
                                        )
                                    })
                                }
                        </div>
                </div>
            </section>
        )
    }
}
export default PovioSolution;
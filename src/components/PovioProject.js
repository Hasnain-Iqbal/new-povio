import React from 'react';
import PovioProjectTitle from './PovioProjectTitle';

const PovioProject = () => {
    return(
        <React.Fragment>
            <section className="seo_service_area sec_pad" id="projects" style={{position:"relative"}}>
                <img className='img-fluid' style={{right:"10px",position:"absolute"}} src={require ("../img/povio/triangle3.png")} alt=""/>
                <img className='img-fluid' style={{left:"10px",bottom:"70px",position:"absolute"}} src={require ("../img/povio/triangle4.png")} alt=""/>

                    <div className="container">
                        <PovioProjectTitle bottom duration={500} />
                    </div>
            </section>
        </React.Fragment>
    )
}

export default PovioProject;

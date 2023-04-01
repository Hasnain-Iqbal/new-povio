import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class PovioFooter extends Component {
    render(){
        let FooterData = this.props.FooterData;
        var{rclass} = this.props;
        return(
            <footer className={`payment_footer_area ${rclass}`}>
                <div className="footer_top_six">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-4 col-sm-6">
                                <div className="">
                                    <a href="index.html" className="f-logo"><img height="90px" width="90px" src={require("../../img/povio/logo.png")} alt=""/></a>
                                    <p className="w_color">Copyright © 2023 Desing by <span className='p_color' href=".#">ABC</span></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="f_widget about-widget">
                                    <h3 className="f-title f_600 w_color f_size_18 mb_40 mt-3">Content Us</h3> 
                                    <p className="mt_40 w_color">Telegram channel: <a className='p_color' href="https://t.me/PoVio_io">Povio</a></p>
                                    <p className="w_color">E-mail: <span className='p_color' href="hello@povio.io">hello@povio.io</span></p>
                                </div>
                            </div>
                            {/* <div className="col-lg-3 col-sm-6">
                                <div className="f_widget about-widget">
                                    <h3 className="f-title f_600 w_color f_size_18 mb_40">Help?</h3>
                                    <ul className="list-unstyled f_list">
                                        {
                                            FooterData.helpLinks.map(links => {
                                                return(
                                                    <li key={links.id}><Link to={links.url}>{links.item}</Link></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div> */}
                            <div className="col-lg-2 col-sm-6">
                                <div className="f_widget social-widget">
                                    <h3 className="f-title f_600 w_color f_size_18 mb_40 mt-3">Follow Us</h3>
                                    <div className="f_social_icon">
                                        {
                                            FooterData.socialIcon.map(item =>{
                                                return(
                                                    <a href={item.url} key={item.id}><i className={item.icon}></i></a>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default PovioFooter;
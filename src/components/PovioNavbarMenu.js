import React, {Component} from 'react';
import {Link} from 'react-scroll';
import Sticky from 'react-stickynode';

class PovioNavbarMenu extends Component {
    render() {
        var {mClass, nClass, cClass, slogo, hbtnClass} =this.props;
        return (
            <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
                <header className="header_area">
                <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
                    <div className={`container ${cClass}`}>
                        <Link className={`navbar-brand ${slogo}`} to="/">
                            <img height="90px" width="90px" src={require("../img/povio/logo.png")} alt=""/>
                            <img height="90px" width="90px"  src={require("../img/povio/logo.png")} alt="logo"/>
                        </Link>
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="menu_toggle">
                                <span className="hamburger">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                                <span className="hamburger-cross">
                                    <span></span>
                                    <span></span>
                                </span>
                            </span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                                <li className="nav-item">
                                    <Link className="nav-link" activeClass="active" to="home"  smooth={true} offset={0} duration={500}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" activeClass="active" to="about" smooth={true} offset={0} duration={1000}>About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" activeClass="active" to="projects" smooth={true} offset={-90} duration={1000}>Project</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" activeClass="active" to="vision" smooth={true} offset={0} duration={1000}>Vision</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" activeClass="active" to="influencer" smooth={true} offset={0} duration={1000}>Influencer</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" activeClass="active" to="solutions" smooth={true} offset={-90} duration={1000}>Solutions</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" activeClass="active" to="payments" smooth={true} offset={-90} duration={1000}>Payments</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" activeClass="active" to="creators" smooth={true} offset={-90} duration={1000}>Creators</Link>
                                </li>
                            </ul>
                            <a className={`btn_get btn_hover ${hbtnClass}`} href="#get-app">Get Started</a>
                        </div>
                    </div>
                </nav>
                </header>
            </Sticky>
        );
    }
}

export default PovioNavbarMenu;
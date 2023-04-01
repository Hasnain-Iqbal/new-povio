import React from 'react'
import PovioPayment from '../components/PovioPayment';
import PovioSolution from '../components/PovioSolution.js';
import PovioSolutionsData from '../components/PovioSolutionsData';
import PovioCreator from "../components/PovioCreator";
import PovioProject from '../components/PovioProject';
import PovioAbout from '../components/PovioAbout.js';
import PovioVision from '../components/PovioVision.js';
import PovioDigital from '../components/PovioDigital';
import PovioMainBanner from '../components/PovioMainBanner.js';
import PovioNavbarMenu from '../components/PovioNavbarMenu';
import FooterData from '../components/Footer/FooterData';
import PovioFooter from '../components/Footer/PovioFooter';

function Povio() {
  return (
    <div>
        <PovioNavbarMenu slogo="sticky_logo" mClass="menu_four" nClass="w_menu" hbtnClass="btn_get_radious menu_custfive"/>
        <PovioMainBanner/>
        <PovioAbout/>
        <PovioProject/>
        <PovioVision/>
        <PovioDigital/>
        <PovioSolution PovioSolutionsData={PovioSolutionsData}/>
        <PovioPayment/>
        <PovioCreator />
        <PovioFooter rclass={'payment_footer_area_two'} FooterData={FooterData}/>
    </div>
  )
}

export default Povio

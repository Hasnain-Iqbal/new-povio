import React from "react";
const NotFound = () => (
  <div className="body_wrapper">
    <section className="error_two_area">
      <div className="container flex">
        <div className="error_content_two text-center">
          <img src={require("../img/error.png")} alt="" />
          <h2>Error. We can’t find the page you’re looking for.</h2>
          <p>
            Sorry for the inconvenience. Go to our homepage 
          </p>
          <a href="/povio" className="about_btn btn_hover">
            Home<i className="arrow_right"></i>
          </a>
        </div>
      </div>
    </section>
  </div>
);
export default NotFound;

import React from 'react'
import ReactPlayer from 'react-player'

export default function HeroSlider() {
  return (
    <div id="slides-shop" className="cover-slides">
      <ul className="slides-container">
        <li className="text-left">
          <img
            src="https://img.waimaoniu.net/534/534-201805291043509604.jpg"
            alt=""
          />
          {/* <video src={('https://player.vimeo.com/external/363013770.sd.mp4?s=5c31ecc6d9ebca73ee3807c0fe484291a1753e33&profile_id=139&oauth2_token_id=57447761')} /> */}
          <div className="container">
            <div className="row">
              <div className="col-md-12  wow fadeInLeft">
                <h1 className="m-b-20">
                  <strong></strong>
                </h1>
                <p className="m-b-40">
                  {' '}
                  <br />
                </p>
                <p>
                  {/* <a className="btn hvr-hover" href="/our-services">
                    Servicios
                  </a> */}
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="text-center">
          <img src="" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-12 ">
                <h1 className="m-b-20">
                  <strong></strong>
                </h1>
                <p className="m-b-40"></p>
                <p>
                  {/* <a className="btn hvr-hover" href="/our-services">
                    servicios
                  </a> */}
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="text-right">
          <img src="" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                    <br />

                    <br />
                  </strong>
                </h1>
                <p className="m-b-40">
                  <br />{' '}
                </p>
                <p>
                  {/* <a className="btn hvr-hover" href="#">
                    Servicios
                  </a> */}
                </p>
              </div>
            </div>
          </div>
        </li>
        {/* <li className="text-right">
          <img src="images/servicios/04-min.jpg" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                    <br />
                  </strong>
                </h1>
                <p className="m-b-40">
                  <br />
                  {" "}
                  <br />
                  
                </p>
                <p>
                  <a className="btn hvr-hover" href="#">
                    Servicios
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li> */}
      </ul>
      <div className="slides-navigation">
        <a href="#" className="next">
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </a>
        <a href="#" className="prev">
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  )
}

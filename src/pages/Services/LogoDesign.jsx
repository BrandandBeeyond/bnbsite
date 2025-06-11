import React from "react";
import HexCanvas from "../../components/hexcanvas/HexCanvas";
import "./css/portfolio.css";
import AnayaMain from "../../images/brands/anayamain.svg";
import BhandariMain from "../../images/brands/bhandari.svg";
import AnayaVector from "../../images/brands/anaya.svg";
import AmoraLogo from "../../images/brands/amoralogo.svg";
import BhandariLogo from "../../images/brands/bhandarilogo.svg";
import BhandariLabel from "../../images/brands/bhandarilabel.svg";
import AmoraVector from "../../images/brands/amora.svg";
import BrandYogiVector from "../../images/brands/brandyogi.svg";
import BrandYogiLogo from "../../images/brands/brandyogimain.svg";
import BrandYogiLabel from "../../images/brands/brandyogisub.svg";
import StrataVector from "../../images/brands/strata.svg";
import GraycoldVector from "../../images/brands/graygold.svg";
import GraycoldLogo from "../../images/brands/graygoldmain.svg";
import StrataLogo from "../../images/brands/stratamain.svg";
import SmartVector from "../../images/brands/smart.svg";
import SmartLogo from "../../images/brands/smartmain.svg";
import SparkleVector from "../../images/brands/sparkle.svg";
import SparkleLogo from "../../images/brands/sparklemain.svg";
import SwayamVector from "../../images/brands/swayam.svg";
import SwayamLogo from "../../images/brands/swayammain.svg";
import SmartNatureLogo from "../../images/brands/smartnaturemain.svg";
import SmartNatureVector from "../../images/brands/smartnature.svg";

const LogoDesign = () => {
  return (
    <>
      <HexCanvas title={`Logo Design`} />

      <section className="logodesign">
        <div className="row brandrow">
          <div className="col-lg-6 col-6 p-0 d-flex justify-content-center align-items-center">
            <img
              src={AnayaMain}
              className="img-fluid anayamain"
              alt=""
            />
          </div>
          <div className="col-lg-6 col-6 p-0">
            <div className="brand-hording position-relative">
              <img src={AnayaVector} className="img-fluid Lbrandlogo" alt="" />
              <img
                src={require("../../images/brands/anayabg.png")}
                className="img-fluid h-100 w-100 object-fit-cover"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="row flex-row-reverse brandrow">
          <div className="col-lg-6 col-6 p-0 d-flex justify-content-center align-items-center">
            <div className="d-flex flex-row gap-3 align-items-center">
              <img
                src={AmoraLogo}
                className="img-fluid amoralogo"
                alt=""
               
              />
              <img
                src={require("../../images/brands/amoraname.png")}
                className="img-fluid mt-2 mt-sm-4 amoramain"
               
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 col-6 p-0">
            <div className="brand-hording position-relative">
              <img src={AmoraVector} className="img-fluid Lbrandlogo" alt="" />
              <img
                src={require("../../images/brands/amorabg.png")}
                className="img-fluid h-100 w-100 object-fit-cover"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="row brandrow">
          <div className="col-lg-6 col-6 p-0 d-flex justify-content-center align-items-center">
            <div className="d-flex flex-row gap-3 align-items-center">
              <img
                src={BhandariLogo}
                className="img-fluid bhandarilogo"
                alt=""
              
              />
              <img
                src={BhandariLabel}
                className="img-fluid bhandarimain"
                
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 col-6 p-0">
            <div className="brand-hording position-relative">
              <img src={BhandariMain} className="img-fluid Lbrandlogo" alt="" />
              <img
                src={require("../../images/brands/bhandaribg.jpg")}
                className="img-fluid h-100 w-100 object-fit-cover"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="row flex-row-reverse brandrow">
          <div className="col-lg-6 col-6 p-0 d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column gap-3 justify-content-center align-items-center">
              <img
                src={BrandYogiLogo}
                className="img-fluid brandyogilogo"
                alt=""
                
              />
              <img
                src={BrandYogiLabel}
                className="img-fluid brandyogimain"
               
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 col-6 p-0">
            <div className="brand-hording position-relative">
              <img
                src={BrandYogiVector}
                className="img-fluid Rbrandlogo"
                alt=""
              />
              <img
                src={require("../../images/brands/brandyogibg.png")}
                className="img-fluid h-100 w-100 object-fit-cover"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="row brandrow">
          <div className="col-lg-6 col-6 p-0 d-flex justify-content-center align-items-center">
            <img
              src={StrataLogo}
              className="img-fluid stratalogo"
              alt=""
             
            />
          </div>
          <div className="col-lg-6 col-6 p-0">
            <div className="brand-hording position-relative">
              <img src={StrataVector} className="img-fluid Lbrandlogo" alt="" />
              <img
                src={require("../../images/brands/stratabg.png")}
                className="img-fluid h-100 w-100 object-fit-cover"
                style={{ objectPosition: "bottom" }}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="row flex-row-reverse brandrow">
          <div className="col-lg-6 col-6 p-0 d-flex justify-content-center align-items-center">
            <img
              src={GraycoldLogo}
              className="img-fluid graycoldlogo"
              alt=""
             
            />
          </div>
          <div className="col-lg-6 col-6 p-0">
            <div className="brand-hording position-relative">
              <img
                src={GraycoldVector}
                className="img-fluid Rbrandlogo"
                alt=""
              />
              <img
                src={require("../../images/brands/graycoldbg.png")}
                className="img-fluid h-100 w-100 object-fit-cover"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="row brandrow">
          <div className="col-lg-6 col-6 p-0 d-flex justify-content-center align-items-center">
            <img
              src={SmartLogo}
              className="img-fluid smartlogo"
              alt=""
             
            />
          </div>
          <div className="col-lg-6 col-6 p-0">
            <div className="brand-hording position-relative">
              <img src={SmartVector} className="img-fluid Lbrandlogo" alt="" />
              <img
                src={require("../../images/brands/smartbg.png")}
                className="img-fluid h-100 w-100 object-fit-cover"
                style={{ objectPosition: "bottom" }}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="row flex-row-reverse brandrow">
          <div className="col-lg-6 col-6 p-0 d-flex justify-content-center align-items-center">
            <img
              src={SparkleLogo}
              className="img-fluid sparklogo"
              alt=""
             
            />
          </div>
          <div className="col-lg-6 col-6 p-0">
            <div className="brand-hording position-relative">
              <img
                src={SparkleVector}
                className="img-fluid Rbrandlogo"
                alt=""
              />
              <img
                src={require("../../images/brands/sparklebg.png")}
                className="img-fluid h-100 w-100 object-fit-cover"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="row brandrow">
          <div className="col-lg-6 col-6 p-0 d-flex justify-content-center align-items-center">
            <img
              src={SwayamLogo}
              className="img-fluid smartlogo"
              alt=""
              
            />
          </div>
          <div className="col-lg-6 col-6 p-0">
            <div className="brand-hording position-relative">
              <img src={SwayamVector} className="img-fluid Lbrandlogo" alt="" />
              <img
                src={require("../../images/brands/swayambg.png")}
                className="img-fluid h-100 w-100 object-fit-cover"
                style={{ objectPosition: "bottom" }}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="row flex-row-reverse brandrow">
          <div className="col-lg-6 col-6 p-0 d-flex justify-content-center align-items-center">
            <img
              src={SmartNatureLogo}
              className="img-fluid smartNlogo"
              alt=""
              
            />
          </div>
          <div className="col-lg-6 col-6 p-0">
            <div className="brand-hording position-relative">
              <img
                src={SmartNatureVector}
                className="img-fluid Rbrandlogo"
                alt=""
              />
              <img
                src={require("../../images/brands/smartnaturebg.png")}
                className="img-fluid h-100 w-100 object-fit-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogoDesign;

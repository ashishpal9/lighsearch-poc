"use client"
import React from "react";
import Image from "next/image";
import Dropdown from "react-bootstrap/Dropdown";
import xraybtnIcons from "@/assets/images/icons/xray_btnicons.svg";
import xrayBtn1 from "@/assets/images/icons/xray_btn1.svg";
import xrayBtn2 from "@/assets/images/icons/xray_btn2.svg";
import xrayBtn3 from "@/assets/images/icons/xray_btn3.svg";
import xrayBtn4 from "@/assets/images/icons/xray_btn4.svg";
import xrayBtn5 from "@/assets/images/icons/xray_btn5.svg";
import xrayBtn6 from "@/assets/images/icons/xray_btn6.svg";
import xrayBtn7 from "@/assets/images/icons/xray_btn7.svg";

function AnalysisComponent() {
  return (
    <>
      <section className="analysis_flow">
        <div className="analysis_heading">
          <h3>Flex Ext analysis</h3>
        </div>
        <div className="row">
          <div className="analysis_left">
            <div className="card_analysis">
              <ul className="analysis_sublist">
                <li>
                  <span className="analysis_label">Subject ID</span>
                  <p className="analysis_infotag">Kevin01-5</p>
                </li>
                <li>
                  <span className="analysis_label">Visit ID</span>
                  <p className="analysis_infotag">PostOp</p>
                </li>
                <li>
                  <span className="analysis_label">Visit Date</span>
                  <p className="analysis_infotag">02/03/2024</p>
                </li>
                <li>
                  <span className="analysis_label">Index Location</span>
                  <p className="analysis_infotag"> C1, C2, C3-C4</p>
                </li>
              </ul>
              <div className="analysis_leftbtn">
                <div className="analysis_leftout_line">
                  <button className="theme-btn theme-outline-primary">
                    Save
                  </button>
                  <button className="theme-btn theme-outline-primary">
                    Cancel
                  </button>
                </div>
                <div className="analysis_registerbtn">
                  <button className="theme-btn theme-dark">Register</button>
                </div>
              </div>
            </div>
          </div>
          <div className="analysis_center">
            <div className="card_analysis">
              <div className="xray_btn">
                <div className="center_cardflow">
                  <ul>
                    <li className="xray_dropdown">
                      <Dropdown>
                          <Dropdown.Toggle className="xray_btnclick">
                            <Image src={xrayBtn1} alt="icons" />
                          </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#">Action</Dropdown.Item>
                          <Dropdown.Item href="#">Another action</Dropdown.Item>
                          <Dropdown.Item href="#">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                    <li>
                      <button className="xray_btnclick">
                        <Image src={xrayBtn7} alt="icons"></Image>
                      </button>
                    </li>
                    <li>
                      <button className="xray_btnclick">
                        <Image src={xrayBtn2} alt="icons"></Image>
                      </button>
                    </li>
                    <li>
                      <button className="xray_btnclick">
                        <Image src={xrayBtn3} alt="icons"></Image>
                      </button>
                    </li>
                    <li>
                      <button className="xray_btnclick">
                        <Image src={xrayBtn4} alt="icons"></Image>
                      </button>
                    </li>
                    <li>
                      <button className="xray_btnclick">
                        <Image src={xrayBtn5} alt="icons"></Image>
                      </button>
                    </li>
                    <li>
                      <button className="xray_btnclick">
                        <Image src={xrayBtn6} alt="icons"></Image>
                      </button>
                    </li>
                  </ul>
                  <div className="xray_mod">
                    <button className="xray_modbtn">
                      <Image src={xraybtnIcons} alt="icons" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="xray_canvas">
                <div className="center_cardflow"></div>
              </div>
            </div>
          </div>
          <div className="analysis_right">
            <div className="card_analysis">
              <div className="spin_title">Cervical Spine</div>
              <ul className="cne_list">
                <li>
                  <button className="cne_btn">
                    <span className="cone_title">C1</span>
                    <span className="neone_title">NE</span>
                  </button>
                </li>
                <li>
                  <button className="cne_btn">
                    <span className="cone_title">C2</span>
                    <span className="neone_title">NE</span>
                  </button>
                </li>
                <li>
                  <button className="cne_btn isactived_cned">
                    <span className="cone_title">C3</span>
                    <span className="neone_title">NE</span>
                  </button>
                </li>
                <li>
                  <button className="cne_btn">
                    <span className="cone_title">C4</span>
                    <span className="neone_title">NE</span>
                  </button>
                </li>
                <li>
                  <button className="cne_btn">
                    <span className="cone_title">C5</span>
                    <span className="neone_title">NE</span>
                  </button>
                </li>
              </ul>
              <div className="analysis_leftbtn">
                <div className="anaysis_objects">Objects</div>
                <div className="analysis_registerbtn">
                  <button className="theme-btn theme-dark">01</button>
                  <button className="theme-btn theme-dark">02</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AnalysisComponent;

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import icnBack from "../../assets/images/icons/icn-light-back.svg";
import icnProject from "../../assets/images/icons/icn-project.png";
import icnLightCalendar from "../../assets/images/icons/icn-light-calendar.svg";
import icnLightEdit from "../../assets/images/icons/icn-light-edit.svg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const PerformFlex = () => {
  return (
    <>
      <div className="top-bar">
        <Link href="/projects" className="back-link">
          <Image src={icnBack} alt="user_avtar" />
        </Link>
        <h4 className="page-title">Project Detail</h4>
        <div className="blank-wrp"></div>
      </div>
      <div className="pt-4">
        <div className="card site-card mb-3">
          <div className="card-body">
            <div className="dark-card mb-2">
              <div className="info-wrapper">
                <div className="info-left">
                  <h5 className="mb-2">PreOp</h5>
                  <div className="info-title-value">
                    <span className="info-title text-white-o6">Visit</span>
                  </div>
                </div>
                <div className="info-middle">
                  <button className="theme-btn theme-gray">
                    <Image src={icnLightCalendar} alt="icn-light-calendar" />{" "}
                    <span className="info-title text-white-o6">01/01/2024</span>
                  </button>
                </div>
                <div className="info-right">
                  <button className="theme-btn theme-gray">
                    <Image src={icnLightEdit} alt="icn-light-calendar" /> Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h6 className="mb-3">XR exam</h6>
        <div className="xr_exam">
          <ul>
            <li className="xr_examflex">
              <div className="exam_head_left">Flex Ext analysis</div>
              <div className="exam_head_right">
                <div className="examhead_right_block">
                  Last Updated: 17/21/2024
                  <div className="info-right">
                    <button className="theme-btn theme-dark">
                      <Image src={icnLightEdit} alt="icn-light-calendar" /> Edit
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li className="xr_examflex">
              <div className="exam_head_left">Last Updated: 17/21/2024</div>
              <div className="exam_head_right">
                <div className="info-right">
                  <button className="theme-btn theme-light">
                  Perform
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PerformFlex;

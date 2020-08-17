import React from "react";
import "./styles.scss";

const Footer = (props, context) => (
  <footer className="footer">
    <div className="copyrights">
      <span className="address">
        서울특별시 마포구 잔다리로 109(우편번호 04003)
      </span>
      <span className="phonefax">TEL (02)325-1722 FAX (02)326-1723</span>
      <br />
      <span className="corpid">사업자등록번호 105-87-44487</span>
      <span className="representer">대표자 : 이지연</span>
      <span className="email">Email : easy@easyspub.co.kr</span>
      <br />
      <span className="copyright">
        Copyright(c)2015 이지스퍼블리싱㈜ EasysPublishing Co., Ltd. All Rights
        Reserved
      </span>
    </div>
  </footer>
);

export default Footer;

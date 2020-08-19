import React from "react";

const LandingPage = (props, context) => (
  <div className="flex flex-wrap">
    <div className="w-full bg-gray-100 mt-4 text-center">
      <div className="font-semibold text-2xl mb-4 ">
        사람을 구체적으로 도와주는 책
      </div>
      <div className="font-semibold text-4xl mb-4">이지스퍼블리싱(주)</div>
    </div>
    <div className="flex flex-wrap w-full bg-gray-100 mb-4 text-center">
      <div className="w-full lg:w-1/2 xl:w-1/2 bg-gray-200">
        <div className="rounded-full h-32 w-32 bg-gray-400 items-center">
          easys IT
        </div>
      </div>
      <div className="w-full lg:w-1/2 xl:w-1/2 bg-gray-200">
        <div className="rounded-full h-32 w-32 bg-gray-400 justify-center">
          easys IT
        </div>
      </div>
    </div>
    <div className="w-full bg-gray-100 mb-4 text-center">
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
  </div>
);

export default LandingPage;

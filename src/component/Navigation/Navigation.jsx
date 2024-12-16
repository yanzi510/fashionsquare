import React from "react";

const Navigation = () => {
  return (
    <div className="box__brand-tab">
      <a
        href="/brand"
        className="link__tab"
      >
        브랜드
      </a>
      <a
        href="/category"
        className="link__tab selected"
      >
        카테고리
      </a>
    </div>
  );
};

export default Navigation;

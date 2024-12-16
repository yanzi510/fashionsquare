import React from "react";

const Header = () => {
  return (
    <header>
      <div className="box__header_container">
        <div className="box__header box__header--dark">
          <div className="box__header-inner" style={{ backgroundColor: "rgb(88, 85, 226)" }}>
            <div className="box__header-content">
              <button type="button" className="button__back"><span className="for-a11y">뒤로 가기</span></button>
              <div className="box__header-title">
                <h1 className="box__title">
                  <a
                    className="link__logo"
                    href="https://m.gmarket.co.kr/?sectionSeq=3&pageTypeSeq=2"
                  >
                    <img src="https://script.gmarket.co.kr/build/mobile/image/single/gnb/logo_fashionsquare_white.png" className="image" alt="패션스퀘어" />
                  </a>
                </h1>
              </div>
              <div className="box__header-menu">
                <button type="button" className="button__search"><span className="for-a11y">검색</span></button>
                <a 
                  href="https://cart.gmarket.co.kr/ko/m/cart"
                  className="link__cart"
                >
                  <span className="for-a11y">장바구니</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

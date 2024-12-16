import React from "react";

const BottomNavigation = () => {
  return (
    <div className="box__bottom-navigation" role="navigation" aria-label="하단 고정메뉴">
      <div className="box__bottom-navigation-inner">
        <ul className="list">
          <li className="list-item">
            <a href="//m.gmarket.co.kr" className="link link__home" aria-current="false">
              <span className="for-a11y">홈</span>
            </a>
          </li>
          <li className="list-item">
            <button type="button" className="link link__search" aria-current="false">
              <span className="for-a11y">검색</span>
            </button>
          </li>
          <li className="list-item">
            <a href="//my.gmarket.co.kr/ko/mo/Main" className="link link__myg" aria-current="false">
              <span className="for-a11y">마이지</span>
            </a>
          </li>
          <li className="list-item">
            <a href="//m.gmarket.co.kr/n/recent-views" className="link link__rvh link__rvh--none" aria-current="false">
              <span className="for-a11y">최근 쇼핑 활동</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomNavigation;

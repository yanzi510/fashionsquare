import React, { useState } from 'react';
import classNames from 'classnames';

const ItemCard = ({ data }) => {
  const { itemCardList, brand, brandName, tag, tagName, deliveryFree, favorite, score, review, buy, benefit, benefitCoupon, benefitCard, coupon, card, price } = data || {};
  
  return (
    <>
      <div className="box__itemcard-wrap">
        {itemCardList.map((item, idx) => {
          return (
            <div className="box__itemcard-container" key={idx}>
              <div className="box__itemcard-body">
                <div className="box__itemcard-inner">
                  <a
                    href="#"
                    className="link__itemcard"
                  >
                    <span className="box__itemcard-img">
                      <img src={item.imageUrl} className="image__itemcard" alt={item.text} />
                    </span>
                  </a>
                  <div className="box__itemcard-info">
                    <a
                      href="#"
                      className="link__itemcard-info"
                    >
                      {item.tag && (
                        <span className="box__itemcard-best-tag">
                          <span className="text__best-tag">{item.tagName}</span>
                        </span>
                      )}
                      <span className="box__itemcard-title-area">
                        {item.brand && (
                          <span className="text__brand">
                            <span className="box__itemcard-fashion-tag">
                              <img className="image" src="//script.gmarket.co.kr/build/mobile/image/single/fashionsquare/component/itemcard/logo_fashionsquare_3x.png" alt="패션스퀘어 상품" />
                            </span>
                            <span className="text">{item.brandName}</span>
                          </span>
                        )}
                        <span className="text__title">{item.text}</span>
                      </span>
                      <span className="box__itemcard-price-area">
                        <span className="box__price-seller">
                          <strong className="text__price-seller">{item.price}</strong>
                          <span className="text__unit">원</span>
                        </span>
                      </span>
                      {item.deliveryFree && (
                        <div className="box__itemcard-delivery">
                          <span className="text__delivery">무료배송</span>
                        </div>
                      )}
                      <span className="box__itemcard-info-score">
                        <span className="box__score-awards">
                          <span className="for-a11y">평점</span>
                          <span className="text__score">{item.score}</span>
                          <span className="for-a11y">후기</span>
                          <span className="text__num">({item.review})</span>
                          <span className="for-a11y">건</span>
                        </span>
                        <span className="box__score-buycnt">
                          <span className="text">구매 {item.buy}</span>
                          <span className="for-a11y">건</span>
                        </span>
                      </span>
                      {item.benefit && (
                        <span className="box__itemcard-benefit-tag">
                          {item.benefitCoupon && (
                            <span className="box__tag box__tag-coupon">
                              <span className="box__inner">{item.coupon} 쿠폰</span>
                            </span>
                          )}
                          {item.benefitCard && (
                            <span className="box__tag box__tag-card">
                              <span className="box__inner">결제할인 {item.card}</span>
                            </span>
                          )}
                        </span>
                      )}
                    </a>
                    <button
                      type="button"
                      className={classNames('button__favorite-item', item.favorite ? 'button__favorite-item--active' : ' ')}
                    >
                      <span className="for-a11y">관심상품 등록하기</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ItemCard;

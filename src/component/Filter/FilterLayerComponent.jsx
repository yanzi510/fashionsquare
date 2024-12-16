import React, { useState } from 'react';
import classNames from 'classnames';

const FilterLayerComponent = ({ data }) => {
  const { conditionList, brandList } = data || {};
  const [ filterComponentActive, setFilterComponentActive ] = useState(false);
  // const [ index, setIndex ] = useState(0);

  const toggleComponent = (e) => {
    const nodes = [...e.target.parentElement.children];
    const index = nodes.indexOf(e.target);
    console.log(nodes);

    setFilterComponentActive(!filterComponentActive);
  };

  return (
    <div className="box__layer-scoll">
      <div className="box__component box__component-keyword-filter">
        <div className="box__filter-content">
          <div className="box__form-search-input">
            <form action="#">
              <input
                type="search"
                className="form__input"
                id="search-within-result"
                name="keyword"
                placeholder="결과 내 재검색"
              />
              <button
                type="submit"
                title="입력하신 키워드로 재검색 합니다."
                className="button__search-result"
              >
                <span className="for-a11y">결과 내 재검색</span>
              </button>
            </form>
            <button
              type="button"
              className="button__keyword-delete"
            >
              <span className="for-a11y">검색어 삭제</span>
            </button>
          </div>
        </div>
      </div>
      <div className="box__component box__component-check-linear-filter">
        <div className="box__filter-content">
          <div className="box__category-group">
            <ul className="list__category">
              {conditionList.map((item, idx) => {
                return (
                  <li className="list-item" key={idx}>
                    <div className="box__link-category">
                      <input
                        type="checkbox"
                        id={`filter_${item.id}`}
                        className="form__input-checkbox"
                      />
                      <label for={`filter_${item.id}`} className="form__label">
                        {item.text}
                      </label>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className={classNames('box__component box__component-price-filter', filterComponentActive && 'box__component--active')}>
        <div className="box__filter-content">
          <button
            className="button__filter-toggle js-button__filter-toggle"
            aria-expanded={filterComponentActive}
            onClick={(e) => toggleComponent(e)}
          >
            <span className="text__title">가격대</span>
          </button>
          <div className="box__category-group">
            <div className="box__price-range">
              <div className="box__price-range-form">
                <span className="box__form-price-input">
                  <label className="for-a11y" for="min_price">최소금액</label>
                  <input
                    type="number"
                    id="min_price"
                    className="form__input"
                    placeholder="최소금액"
                  />
                  <span className="text__money">원</span>
                </span>
                <span className="text__hyphen">~</span>
                <span className="box__form-price-input">
                  <label className="for-a11y" for="max_price">최대금액</label>
                  <input
                    type="number"
                    id="max_price"
                    className="form__input"
                    placeholder="최대금액"
                  />
                  <span className="text__money">원</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classNames('box__component box__component-check-linear-filter', filterComponentActive && 'box__component--active')}>
        <div className="box__filter-content">
          <button
            className="button__filter-toggle js-button__filter-toggle"
            aria-expanded={filterComponentActive}
            onClick={(e) => toggleComponent(e)}
          >
            <span className="text__title">브랜드</span>
          </button>
          <div className="box__category-group">
            <ul className="list__category">
              {brandList.map((item, idx) => {
                return (
                  <li className="list-item" key={idx}>
                    <div className="box__link-category">
                    <input
                      type="checkbox"
                      id={`brand_${item.id}`}
                      className="form__input-checkbox"
                    />
                    <label for={`brand_${item.id}`} className="form__label">
                      <span className="text__label">{item.text}</span>
                      </label>
                    </div>
                  </li>
                );
              })}
              <li className="list-item list-item__more">
                <button
                  className="button__show-more js-button__show-more"
                  aria-expanded="false"
                >
                  더보기
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterLayerComponent;

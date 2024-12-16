import React from 'react';
import classNames from 'classnames';
import FilterLayerComponent from "./FilterLayerComponent";

import dummyData from './../dummyData/dummyData.json';

const FilterLayer = ({ filterLayerActive, toggleFilterLayer }) => {

  return (
    <div className={classNames('box__filter-container', filterLayerActive && 'box__filter-container--active')} role="dialog">
      <div className="box__layer-content">
        <div className="box__component box__component-filter-title">
          <h3 className="text__title">필터</h3>
          <div className="box__filter-reset">
            <button
              type="button"
              className="button__filter-reset"
            >
              <span className="text">모두 지우기</span>
            </button>
          </div>
          <button
            type="button"
            className="button__filter-layer-close"
            onClick={() => toggleFilterLayer()}
          >
            <span className="button__close-text">필터 레이어 닫기</span>
          </button>
        </div>
        <FilterLayerComponent data={dummyData.filterData} />
      </div>
      <div class="box__dimmed" aria-hidden="true"></div>
    </div>
  );
};

export default FilterLayer;

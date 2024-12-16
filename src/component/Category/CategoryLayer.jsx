import React from 'react';
import classNames from 'classnames';
import CategoryList from "./fragments/CategoryList";

import dummyData from '../dummyData/dummyData.json';

const Category = ({categoryLayerActive, toggleCategoryLayer }) => {

  return (
    <div className={classNames('box__layer-category', categoryLayerActive && 'box__layer-category--active')} role="dialog">
      <div className="box__layer-content">
        <div className="box__layer-title">
          <p className="text__title">패션스퀘어 카테고리</p>
          <button
            type="button"
            className="button__close"
            onClick={() => toggleCategoryLayer()}
          >
            <span className="for-a11y">레이어 닫기</span>
          </button>
        </div>
        
        <CategoryList data={dummyData.categoryData} />
      </div>
      <div class="box__dimmed" aria-hidden="true"></div>
    </div>
  );
};

export default Category;

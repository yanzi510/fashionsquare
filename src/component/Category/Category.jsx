import React, { useState } from 'react';
import CategoryList from "./fragments/CategoryList";
import CategorySub from "./CategorySub";
import CategoryLayer from "./CategoryLayer";

import dummyData from '../dummyData/dummyData.json';

const Category = () => {
  const [ categoryLayerActive, setCategoryLayerActive ] = useState(false);

  const toggleCategoryLayer = () => {
    setCategoryLayerActive(!categoryLayerActive);
  };

  return (
    <>
      <div className="box__sub-category">
        <div className="box__sub-category-inner">
          <div className="box__1depth-content">
            <div className="box__1depth-content-inner">
              <button
                type="button"
                className="button__category"
                aria-haspopup="dialog"
                aria-label="카테고리 레이어 열기"
                onClick={() => {
                  toggleCategoryLayer();
                }}
              >
                카테고리
              </button>
              
              <div className="box__scroll-content">
                <CategoryList data={dummyData.categoryData} />
              </div>
            </div>
          </div>

          <CategorySub data={dummyData.categoryData} />
        </div>
      </div>

      <CategoryLayer data={dummyData.categoryData} categoryLayerActive={categoryLayerActive} toggleCategoryLayer={toggleCategoryLayer} />
    </>
  );
};

export default Category;

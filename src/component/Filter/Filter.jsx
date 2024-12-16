import React, { useState } from 'react';
import FilterLayer from "./FilterLayer";

const Filter = ({ data }) => {
  const { conditionList } = data || {};
  const [ filterLayerActive, setFilterLayerActive ] = useState(false);

  const toggleFilterLayer = () => {
    setFilterLayerActive(!filterLayerActive);
  };
  
  return (
    <>
      <div className="box__filter-item">
        <div className="box__filter-item-inner">
          <div className="box__filter-quick">
            {conditionList.map((item, idx) => {
              return (
                <div className="box__quick-item" key={idx}>
                  <input
                    type="checkbox"
                    id={item.id}
                    className="form__input-checkbox"
                  />
                  <label for={item.id} className="form__label">
                    {item.text}
                  </label>
                </div>
              );
            })}

            <button
              type="button"
              className="button__filter"
              aria-haspopup="dialog"
              aria-label="필터 레이어 열기"
              onClick={() => {
                toggleFilterLayer();
              }}
            >
              필터
            </button>
          </div>
        </div>
      </div>

      <FilterLayer filterLayerActive={filterLayerActive} toggleFilterLayer={toggleFilterLayer} />
    </>
  );
};

export default Filter;

import React, { useState } from 'react';
import classNames from 'classnames';

const Sorting = ({ data }) => {
  const { sortingList } = data || {};
  const [ sortingLayerActive, setSortingLayerActive ] = useState(false);
  const [ selectedIdx, setSelectedIdx ] = useState(0);

  const toggleSortingLayer = () => {
    setSortingLayerActive(!sortingLayerActive);
  };
  
  return (
    <>
      <div className="box__sorting-information">
        <div className="box__search-result">
          <span className="text__item-count text__emphasis">1</span>
          <span className="text">개의 검색 결과</span>
        </div>
        <div className="box__sorting">
          <button
            type="button"
            className="button__sorting"
            title="정렬 방식을 변경하려면 버튼을 클릭해 주세요."
            aria-haspopup="dialog"
            onClick={() => {
              toggleSortingLayer();
            }}
          >
            정렬
          </button>
          <div className={classNames('box__sorting-option', sortingLayerActive && 'box__sorting-option--active')} role="dialog">
            <div className="box__dimmed" aria-hidden="true"></div>
            <div className="box__option-content">
              <p className="text__title">정렬</p>
              <button
                type="button"
                className="button__close"
                onClick={() => {
                  toggleSortingLayer();
                }}
              >
                닫기
              </button>
              <ul className="list__sorting-option">
                {sortingList.map((item, idx) => {
                  return (
                    <li className={classNames('list-item', idx === selectedIdx ? 'list-item--active' : ' ')} key={idx}>
                      <a
                        href="#"
                        className="link"
                        role="button"
                        onClick={() => {
                          setSelectedIdx(idx);
                        }}
                      >
                        <img src={item.imageUrl} className="image" width="32px" height="32px" alt={item.text} />
                        {item.text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sorting;

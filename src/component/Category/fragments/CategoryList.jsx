import React, { useState } from 'react';
import classNames from 'classnames';

const Category = ({ data }) => {
  const { categoryList } = data || {};
  const [ selectedIdx, setSelectedIdx ] = useState(0);

  return (
    <ul className="list__category">
      {categoryList.map((item, idx) => {
        return (
          <li className={classNames('list-item', idx === selectedIdx ? 'list-item--active' : ' ')} key={idx}>
            <a
              href={item.link}
              className="link__category"
              onClick={() => {
                setSelectedIdx(idx);
              }}
            >
              <span className="box__category-img">
                <img src={item.imageUrl} alt={item.text} className="image" />
              </span>
              <span className="text__category">{item.text}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Category;

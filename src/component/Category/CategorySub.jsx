import React, { useState } from 'react';
import classNames from 'classnames';

const CategorySub = ({ data }) => {
  const { categorySubList } = data || {};
  const [ selectedIdx, setSelectedIdx ] = useState();

  return (
    <div className="box__2depth-content">
      <ul className="list__category">
        {categorySubList.map((item, idx) => {
          return (
            <li className={classNames('list-item', idx === selectedIdx ? 'list-item--active' : ' ')} key={idx}>
              <a
                href={item.link}
                className="link__category"
                onClick={() => {
                  setSelectedIdx(idx);
                }}
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategorySub;

import { useState } from 'react';

const EnTab = () => {
  const [currentTab, clickTab] = useState(0);

  const menuArr = [
    { name: 'A' },
    { name: 'B' },
    { name: 'C' },
    { name: 'D' },
    { name: 'E' },
    { name: 'F' },
    { name: 'G' },
    { name: 'H' },
    { name: 'I' },
    { name: 'J' },
    { name: 'K' },
    { name: 'L' },
    { name: 'M' },
    { name: 'N' },
    { name: 'O' },
    { name: 'P' },
    { name: 'Q' },
    { name: 'R' },
    { name: 'S' },
    { name: 'T' },
    { name: 'U' },
    { name: 'V' },
    { name: 'W' },
    { name: 'X' },
    { name: 'Y' },
    { name: 'Z' },
  ];

  const clickHandler = (index) => {
    clickTab(index);
  }

  return (
    <div className="box__brand-tabpanel" role="tabpanel">
      <ul className="list__category">
      {menuArr.map((el, index) => (
        <li className="list-item">
          <a
            className={index === currentTab ? "link__category selected" : "link__category"}
            onClick={() => clickHandler(index)}
            role="tab"
          >
            {el.name}
          </a>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default EnTab;

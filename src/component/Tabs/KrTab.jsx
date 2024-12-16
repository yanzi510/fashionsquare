import { useState } from 'react';

const KrTab = () => {
  const [currentTab, clickTab] = useState(0);

  const menuArr = [
    { name: 'ㄱ' },
    { name: 'ㄴ' },
    { name: 'ㄷ' },
    { name: 'ㄹ' },
    { name: 'ㅁ' },
    { name: 'ㅂ' },
    { name: 'ㅅ' },
    { name: 'ㅇ' },
    { name: 'ㅈ' },
    { name: 'ㅊ' },
    { name: 'ㅋ' },
    { name: 'ㅌ' },
    { name: 'ㅍ' },
    { name: 'ㅎ' },
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

export default KrTab;

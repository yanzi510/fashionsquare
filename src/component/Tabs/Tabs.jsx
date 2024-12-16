import { useState } from 'react';
import KrTab from './KrTab';
import EnTab from './EnTab';

const Tabs = () => {
  const [currentTab, clickTab] = useState(0);

  const menuArr = [
    { name: '가나다', content: <KrTab /> },
    { name: 'ABC', content: <EnTab /> },
  ];

  const clickHandler = (index) => {
    clickTab(index);
  }

  return (
    <div className="box__brand-section">
      <div className="box__brand-tab--sub" role="tablist">
        {menuArr.map((el, index) => (
          <a
            className={index === currentTab ? "link__tab selected" : "link__tab"}
            onClick={() => clickHandler(index)}
            role="tab"
          >
            {el.name}
          </a>
        ))}
      </div>
      {menuArr[currentTab].content}
    </div>
  );
};

export default Tabs;

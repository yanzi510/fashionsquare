import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import BottomNavigation from "./component/BottomNavigation/BottomNavigation";
import Navigation from "./component/Navigation/Navigation";
import Tabs from "./component/Tabs/Tabs";
import Category from "./component/Category/Category";
import Filter from "./component/Filter/Filter";
import Sorting from "./component/Sorting/Sorting";
import ItemCard from "./component/ItemCard/ItemCard";

import dummyData from './component/dummyData/dummyData.json';

function App() {
  return (
    <div id='_next'>
      <Header />
      <div role='main'>
        <div id='container'>
          <div id='service__fashionsqure' className='box__fashionsqure-wrap'>
            <div className='box__brand-index box__brand-index--result'>
              <div className='box__brand-index--inner'>
                <Navigation />

                {/* <Tabs /> */}

                <div className="box__brand-footer" style={{display: 'none'}}>
                  <div className="box__button">
                    <button type="button" class="button__cancel">취소</button>
                    <button type="button" class="button__apply">적용</button>
                  </div>
                </div>
              </div>
            </div>

            <Category data={dummyData.categoryData} />
            <Filter data={dummyData.filterData} />
            <Sorting data={dummyData.sortingData} />
            <ItemCard data={dummyData.itemCardData} />
          </div>
        </div>
      </div>
      <Footer />
      <BottomNavigation />
    </div>
  );
}

export default App;

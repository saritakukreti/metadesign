import Button from "./components/Buttons/Button";
import Feeds from "./components/Feeds/Feeds";
import PriceAnalyticsMain from "./components/PriceAnalytics/PriceAnalyticsMain";
import SideBar from "./components/Screens/SideBar";
import TopBar from "./components/Screens/TopBar";

function App() {
  return (
    <div className="wrapper">
      <TopBar />

      <section className="dasboard">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-md-3">
              <SideBar />
            </div>
            <div className="col-md-9">
              <PriceAnalyticsMain />
              <Feeds />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

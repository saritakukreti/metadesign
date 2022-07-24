import React from "react";
import PriceAnalytics from "./PriceAnalytics";

const PriceAnalyticsMain = () => {
  return (
    <div className="row">
      <div className="col-md-6 mobile-mt">
        <PriceAnalytics
          icon="fa fa-eur"
          text="Lorem, ipsum dolor sit amet"
          amount="0.000.000,00"
        />
      </div>
      <div className="col-md-6 mobile-mt">
        <PriceAnalytics
          icon="fa fa-eur"
          text="Lorem, ipsum dolor sit amet"
          amount="0.000.000,00"
        />
      </div>
    </div>
  );
};

export default PriceAnalyticsMain;

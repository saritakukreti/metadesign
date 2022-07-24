import React from "react";
import FeedItem from "./FeedItem";

const Feeds = () => {
  const feeds = [
    {
      _id: 1,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      icons: "fa fa-edit",
    },
    {
      _id: 2,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      icons: "fa fa-refresh",
    },
    {
      _id: 3,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      icons: "fa fa-list",
    },
    {
      _id: 4,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      icons: "fa fa-globe",
    },
    {
      _id: 5,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      icons: "fa fa-refresh",
    },
    {
      _id: 6,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      icons: "fa fa-user",
    },
    {
      _id: 7,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      icons: "fa fa-bank",
    },
    {
      _id: 8,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      icons: "fa fa-briefcase",
    },
    {
      _id: 9,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      icons: "fa fa-bar-chart",
    },
    {
      _id: 10,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      icons: "fa fa-jpy",
    },
    {
      _id: 11,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      icons: "fa fa-btc",
    },
    {
      _id: 12,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      icons: "fa fa-car",
    },
    {
      _id: 13,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      icons: "fa fa-window-restore",
    },
    {
      _id: 14,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      icons: "fa fa-address-card",
    },
  ];
  return (
    <div className="row">
      <div className="col-md-12 tiles">
        {feeds.map((item, i) => (
          <FeedItem
            key={item._id}
            icon={item.icons}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Feeds;

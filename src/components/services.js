import React, { Component } from "react";
import Title from "./title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info: "Free cocktails on demand. Tasteful choices"
      },
      {
        icon: <FaHiking />,
        title: "endless Hiking",
        info:
          "Together with our experts everyday we have hiking through Zanka Mountain"
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "Airport to Hotel or Hotel to Airport. Any time free shutle service"
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "Taste our best beer"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services"></Title>
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
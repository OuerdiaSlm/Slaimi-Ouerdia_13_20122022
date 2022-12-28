import React from "react"
import './features.css';
import chat from "../../assets/icon-chat.png"
import money from "../../assets/icon-money.png"
import security from "../../assets/icon-security.png"

const featuresDatas = [
  {
    "id": "1",
    "img": chat,
    "h3Contents": "You are our #1 priority",
    "pContents": "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
  },
  {
    "id": "2",
    "img": money,
    "h3Contents": "More savings means higher rates",
    "pContents": "The more you save with us, the higher your interest rate will be!"
  },
  {
    "id": "3",
    "img": security,
    "h3Contents": "Security you can trust",
    "pContents": "We use top of the line encryption to make sure your data and money is always safe."
  }
]

  function Features() {
    return (
        <section className="features">
        {featuresDatas.map(item => (
          <div key={item.id}>
            <h2 className="sr-only">Features</h2>
            <div className="feature-item">
              <img src={item.img} alt="Icon" className="feature-icon" />
              <h3 className="feature-item-title">{item.h3Contents}</h3>
              <p>{item.pContents}</p>
            </div>
          </div>
        ))}
      </section>
    )
  }
  export default Features;
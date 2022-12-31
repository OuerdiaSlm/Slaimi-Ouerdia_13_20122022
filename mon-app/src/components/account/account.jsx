import React from "react"
import './account.css';

const accountDatas = [
  {
    "id": "1",
    "title": "Argent Bank Checking (x8349)",
    "amount": "$2,082.79",
    "description": "Available Balance"
  },
  {
    "id": "2",
    "title": "Argent Bank Savings (x6712)",
    "amount": "$10,928.42",
    "description": "Available Balance"
  },
  {
    "id": "3",
    "title": "Argent Bank Credit Card (x8349)",
    "amount": "$184.30",
    "description": "Current Balance"
  }
]

  function Account() {
    return (
        <section className="account">
        {accountDatas.map(item => (
          <div key={item.id}>
            <div className="account-item">
              <div>
                <h3 className="account-title">{item.title}</h3>
                <p className="account-amount">{item.amount}</p>
                <p className="account-amount-description">{item.description}</p>
              </div>
              <div className="buttonDiv">
                <button className="viewTransactionsButton">View transactions</button>
            </div>
            </div>
            
          </div>
        ))}
      </section>
    )
  }
  export default Account;
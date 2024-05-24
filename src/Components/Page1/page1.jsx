import React from 'react';
import './page1.css';

const Page1 = () => {
    return (
        <div className="page_1">
            <div className="page1">
                <div className="page1_left">
                    <h3 className="page1_h3">TRADE FOR A GOOD HEALTH</h3>
                    <h1 className="page1_h1">Trade Crypto Derivatives</h1>
                    <p className="page1_p">Trade Options, Perpetuals, Futures and Spot at Deribit.</p>
                    <p className="page1_p2">Sign up and get started today.</p>
                </div>
                <div className="page1_right">
                    <form>
                        <input type="email" placeholder="Enter your email address" className="page1_input" />
                        <button className="page1_button">Get Started</button>
                    </form>
                </div>
                <div className="flex-container">
                    <div className="flex-box">
                        <h2 className="container-h2">User-Friendly Interface</h2>
                        <p className="container-p">Customers appreciate crypto trading websites that offer a user-friendly interface.</p>
                    </div>
                    <div className="flex-box">
                        <h2 className="container-h2">Variety of Cryptocurrencies</h2>
                        <p className="container-p">Most customers prefer crypto trading websites that offer a wide range of cryptocurrencies to trade.</p>
                    </div>
                    <div className="flex-box">
                        <h2 className="container-h2">Security Measures</h2>
                        <p className="container-p">Security is a top priority for customers when trading cryptocurrencies</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page1;
import React from 'react';
import './page3.css'
import Portfolio_1 from '../../assets/portfoilio_1.png'
import Portfolio_2 from '../../assets/portfoilio_2.png'
import Portfolio_3 from '../../assets/portfoilio_3.png'

const Page3 = () => {
    return (
        <div>
            <div className="page3">
                <div className="top_lead">
                    <h1 className="portfolios">Top Lead Portfolios</h1>
                </div>
                <div className="lead_portfolios">
                    <div className="lead_portfolio">
                        <img src={Portfolio_1} alt="Portfolio_1" />
                        <h2>Portfolio 1</h2>
                        <p>Return: 20%</p>
                    </div>
                    <div className="lead_portfolio">
                        <img src={Portfolio_2} alt="Portfolio_2" />
                        <h2>Portfolio 2</h2>
                        <p>Return: 15%</p>
                    </div>
                    <div className="lead_portfolio">
                        <img src={Portfolio_3} alt="Portfolio_3" />
                        <h2>Portfolio 3</h2>
                        <p>Return: 10%</p>
                    </div>
                </div>
                <div className="view_p">
                    <p>View all lead traders </p>
                </div>
            </div>
        </div>
    );
};

export default Page3;

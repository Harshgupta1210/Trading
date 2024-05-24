import React from 'react';
import './page2.css'

const Page2 = () => {
    return (
        <div className="page2">
            <div className="page_2">
                <div className="page_2_1">
                <h1 className="page2_h1">How it works</h1>
                <p>Trading websites facilitate the buying and selling of financial assests through online platforms.</p>
                <div className="page2_con">
                <p>Connecting traders worldwide in real-time transactions.</p>
                </div>
                </div>
            </div>
            <div className="flex-Container">
                    <div className="flex-Box">
                        <h2 className="Container-h2">1. Create Account</h2>
                        <p className="Container-p"> Create and verify account in minutes.</p>
                    </div>
                    <div className="flex-Box">
                        <h2 className="Container-h2">2. Fund your account</h2>
                        <p className="Container-p">use bitcoin, Ethereum or USDC to find ypour account.</p>
                    </div>
                    <div className="flex-Box">
                        <h2 className="Container-h2">3. Start Trading</h2>
                        <p className="Container-p">Use all our advance strategy tools to get the most out of your trades.</p>
                    </div>
                </div>
        </div>
    );
};

export default Page2;


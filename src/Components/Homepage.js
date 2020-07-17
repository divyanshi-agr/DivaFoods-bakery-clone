import React, { Component } from 'react';
import logo from '../images/logo.png';
import donuts from '../images/donuts.png';
import mac from '../images/mac.png';
import cupcake from '../images/cupcake.png';
import cart from '../images/cart.png';
import '../App.css';

class Homepage extends Component() {
    render() {
        return (
            <div className="divafoods">
                <div className="home-body">
                    <div className="white-section">
                        <header>
                            <img src={logo} className="logo" width={80} height={55} />

                                <div className="nav1">
                                    <ul>  
                                        <a href="index.html"><li className="home-item">Home</li></a>
                                        <a href="sweets.html"><li>Cakes & Candies</li></a>
                                    </ul>
                                </div>
                            </header>

                            <main>
                                <img src={donuts} className="tasty-pic1" width={210} height={160}/>
                                <img src={mac} className="tasty-pic2" width={210} height={160}/>
                                <img src={cupcake} className="tasty-pic3" width={210} height={160}/>
                            </main>
                        </div>
                    
                        <div className="pink-section">
                            <div className="nav2">
                                <ul>
                                    <a href=""><li className="signin-item">Sign In</li></a>
                                    <a href=""><li><img src={cart} width={62} height={22}/></li></a>
                                </ul>
                            </div>

                            <main>
                                <h1>Cakeylicious</h1>
                                <p>and it's not just cakes...!</p>
                                <button>explore</button>
                            </main>
                    </div>
                </div>
            </div>
                            
        )
    }
}

export default Homepage;
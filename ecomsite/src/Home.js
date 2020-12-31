import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="MSI Gaming GL65 Leopard , Intel 9th Gen. i7-9750H, 15.6 FHD Gaming Laptop (8GB/512GB NVMe SSD/Windows 10 Home/Nvidia GTX 1650/ Black/2.3Kg)"
            price={800}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81cBdLyWiGL._SL1500_.jpg"
          />
           <Product
            id="23445930"
            title="Samsung Galaxy Watch Active 2 (Bluetooth, 44 mm) - Black, Aluminium Dial, Silicon Straps"
            price={300}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61uej9efKYL._SL1500_.jpg"
          />
          
        </div>

        <div className="home__row">
        <Product
            id="4903850"
            title="Sony WH-1000XM4 Industry Leading Wireless Noise Cancelling Headphones"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71o8Q5XJS5L._SL1500_.jpg"
          />
        <Product
            id="49538094"
            title="OnePlus 8T 5G (Aquamarine Green, 12GB RAM, 256GB Storage)"
            price={619.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61WEXquocyL._SL1500_.jpg"
          />
         
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

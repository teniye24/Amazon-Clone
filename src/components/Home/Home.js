import React from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
//  import Carousel from '../Carousal';

// import banner from "./https://m.media-amazon.com/images/G/01/kindle/journeys/SVdxSFtFsFMWeBMB/NTI3YmI2Y2Et";
import Product from "../Product/Product";
import image2 from "./image/6a83d1a9b75648fc1491e44556401580d7a51aa830dbba6566836b4a.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={2000}
        >
          <div>
            <img
              className="home_image"
              src="https://m.media-amazon.com/images/I/71xbc-6rv7L._SX3000_.jpg"
            />
          </div>
          <div>
            <img
              className="home_image"
              src="https://m.media-amazon.com/images/I/616qTQYQWIL._SX3000_.jpg"
            />
          </div>
          <div>
            <img
              className="home_image"
              src="https://m.media-amazon.com/images/I/61h2e3RYg0L._SX3000_.jpg"
            />
          </div>
          <div>
            <img
              className="home_image"
              src="https://m.media-amazon.com/images/I/61MgrX1LbyL._SX3000_.jpg"
            />
          </div>

          <div>
            <img
              className="home_image"
              src="https://m.media-amazon.com/images/I/71RyWxoEMrL._SX3000_.jpg"
            />
          </div>
          <div>
            <img
              className="home_image"
              src="https://m.media-amazon.com/images/I/71xQNs4NeNL._SX3000_.jpg"
            />
          </div>
        </Carousel>

        <div className="home_row">
          <Product
            id="12321341"
            title="Ring Video Doorbell - 1080p HD video, improved motion detection, easy installation – Satin Nick"
            price={54.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71vtXgJBagL._SY355_.jpg"
            alt="/"
          />
          <Product
            id="12321342"
            title="Echo Show 8"
            price={258.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/sAsKYtno5J2qog0B/NTllZjc4Mjkt-w379._SY304_CB578522888_.jpg"
            alt="/"
          />

          <Product
            id="23445930"
            title="Fire TV Soundbar"
            price={198.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/sAsKYtno5J2qog0B/MDIwMmRmM2Ut-w379._SY304_CB578522559_.jpg"
            alt="/"
          />
          <Product
            id="3254354345"
            title="Echo Hub"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/sAsKYtno5J2qog0B/YmEwMjA5MmQt-w379._SY304_CB578526052_.jpg"
            alt="/"
          />
        </div>

        <div className="home_row">
          <Product
            id="3254354354"
            title="All-new Ring Indoor Cam (2nd Gen) 1080p HD"
            price={59.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/51keHnu-7YL._AC_UL320_.jpg"
          />
          <Product
            id="12321343"
            title="Keurig 5000204976 K-Duo Essentials 2-in-1 Coffee Maker"
            price={99.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/61dK-Bgo78L._AC_SX466_.jpg"
            alt="/dpoop"
          />

          <Product
            id="23445931"
            title="Razer BlackShark V2 Pro Wireless Gaming Headset 2023 Edition: Detachable Mic - Pro-Tuned FPS"
            price={159.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/713FOOoJ-4L._AC_UL450_SR450,320_.jpg"
          />
          <Product
            id="3254354378"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="12321369"
            title="Featured in Kitchen"
            price={89.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81OzoiHGV3S._AC_SX360_SY250_.jpg"
          />

          <Product
            id="23445978"
            title="Listen and imagine more"
            price={98.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/Audible/en_US/images/creative/amazon/GatewaySept23/23-0768-USNJACQ-AMZ-Gateway-BAU-Sep2023-Assets_Gateway_HUD_Card_Lifestyle1_1x_379x304_V01._SY304_CB598147133_.jpg"
          />
          <Product
            id="325435447"
            title="Oil Rubbed Bronze"
            price={35.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/515x98ub2QL._SY500__AC_SY200_.jpg"
          />
          <Product
            id="234459363"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
        </div>
        <h2 className="Fashion_title">Luxury Stores Fashion</h2>
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={2000}
        >
          <div className="home_row1">
            <Product
              id="23445478"
              title="OSCAR DE LA RENTA Geranium Faille Midi Dress"
              price={4299.99}
              rating={5}
              image="https://m.media-amazon.com/images/I/71pQoveKpVL._MCnd_AC_UL500_.jpg"
            />
            <Product
              id="3254332584"
              title="EUDON CHOI Irena Top"
              price={295.0}
              rating={4}
              image="https://m.media-amazon.com/images/I/61jcTE89ecL._AC_UL500_.jpg"
            />
            <Product
              id="32543543689"
              title="PERFECT MOMENT Thermal Pant"
              price={190.0}
              rating={4}
              image="https://m.media-amazon.com/images/I/51LBjQMdJaL._AC_UL500_.jpg"
            />
            <Product
              id="32543587987"
              title="PERFECT MOMENT Thermal Half Zip"
              price={250.0}
              rating={4}
              image="https://m.media-amazon.com/images/I/61nqYhCp93L._AC_UL500_.jpg"
              alt="/"
            />
          </div>
        </Carousel>

        <div className="home_row">
          <Product
            id="85456952"
            title="Certified Refurbished Fire HD 10 tablet"
            price={69.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/sAsKYtno5J2qog0B/YWJhNDUwZmYt-w379._SY304_CB578532832_.jpg"
          />

          <Product
            id="4582165930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/sAsKYtno5J2qog0B/ZjY1ZTNhMWIt-w379._SY304_CB578358349_.jpg"
          />
          <Product
            id="4528654345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/sAsKYtno5J2qog0B/MTdjM2VhOWMt-w379._SY304_CB578533262_.jpg"
          />
          <Product
            id="3254378954"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/sAsKYtno5J2qog0B/NzkwZWQ1ZWYt-w379._SY304_CB578306374_.jpg"
          />
        </div>
      
          <div>
            <h2 className="title_row">Innovations ready to make life easier</h2>

            <div className="home_row">
              <Product
                id="556201341"
                title="New fall dress under $50"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/sAsKYtno5J2qog0B/M2U1NDYzMWQt-w200._CB578478633_.jpg"
              />

              <Product
                id="962315430"
                title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                price={98.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/sAsKYtno5J2qog0B/ZTM4ZTA4ZDUt-w200._CB578478633_.jpg"
              />
              <Product
                id="6958745563"
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                price={598.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/sAsKYtno5J2qog0B/MjY1ODBiZWEt-w200._CB578478633_.jpg"
              />
              <Product
                id="325545662"
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                price={598.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/sAsKYtno5J2qog0B/YjJmNjcxMWMt-w200._CB578478633_.jpg"
              />
              <Product
                id="87956954345"
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                price={598.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/sAsKYtno5J2qog0B/NTRhMzc0YWQt-w200._CB578478633_.jpg"
              />
              <Product
                id="3254355117"
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                price={598.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/sAsKYtno5J2qog0B/NDFmY2Q5NDMt-w200._CB578478633_.jpg"
              />
            </div>
          </div>
        

        <div className="image_row">
          <div className="home_row">
            <div className="image_horiz">
              <h2 className="title_image">
                Best Sellers in Computers & Accessories
              </h2>
              <img
                className="image_three"
                src="https://m.media-amazon.com/images/I/61S+R5SLmrL._AC_SY200_.jpg"
                alt="/"
              ></img>
            </div>
            <div className="image_horiz">
              <img
                className="image_one"
                src="https://m.media-amazon.com/images/I/61re+ymFgcL._AC_SY200_.jpg"
                alt="/"
              ></img>
            </div>

            <div className="image_horiz">
              <img
                className="image_two"
                src="https://m.media-amazon.com/images/I/81zM2vVM+wL._AC_SY200_.jpg"
                alt="/"
              ></img>
            </div>

            <div className="image_horiz">
              <img
                className="image_five"
                src="https://m.media-amazon.com/images/I/71p+P8mZ3RL._AC_SY200_.jpg"
                alt="/"
              ></img>
            </div>
          </div>
        </div>

        {/* <div className="image_row">
          <div className="home_row">
            <div className="image_horiz">
              <h1 className="title_image2">Frequently repurchased</h1>
              <img
                className="image"
                src="https://m.media-amazon.com/images/I/61J0e7d0GEL._AC_SY200_.jpg"
                alt="/"
              ></img>
            </div>
            <div className="image_horiz">
              <img
                className="image"
                src="https://images-na.ssl-images-amazon.com/images/I/61mzlX3ucxL._AC_UL160_SR160,160_.jpg"
              ></img>
            </div>

            <div className="image_horiz">
              <a className="image_link" href="/">
                <img
                  className="image"
                  src="https://m.media-amazon.com/images/I/51lcVe0BpuL._SY500__AC_SY200_.jpg"
                  alt="/"
                ></img>
              </a>
            </div>

            <div className="image_horiz">
              <img
                className="image"
                src="https://m.media-amazon.com/images/I/81sZsv0qLIL._AC_SY200_.jpg"
                alt="/"
              ></img>
            </div>

            <div className="image_horiz">
              <img
                className="image"
                src="https://m.media-amazon.com/images/I/71lPw5gA3-L._AC_SY200_.jpg"
                alt="/"
              ></img>
            </div>

            <div className="image_horiz">
              <img
                className="image"
                src="https://m.media-amazon.com/images/I/61bz03+KeEL._AC_SY200_.jpg"
                alt="/"
              ></img>
            </div>
          </div>
        </div> */}
{/* 
        <div className="image_row">
          <div>
            <h2 className="title_image">
              Trending deals
              <a className="deal_link" href="/">
                see all deals
              </a>
            </h2>
            
              <div className="image_horiz">
                <Product
                  id="986596321"
                  title="Utopia Bedding Twin Bed Sheets Set - 3 Piece Bedding - Brushed Microfiber"
                  price={12.99}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/61sj5cCds0L._AC_SL1500_.jpg"
                  alt="/"
                />
                <button>Up to 30% off</button>
                <Product
                  id="986589759"
                  title="Bedsure Twin/Twin XL Duvet Cover Dorm Bedding - Soft Prewashed White Duvet Cover Twin, 2 Pieces, Includes 1 Duvet Cover"
                  price={19.99}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/8193nUm1iFL._AC_SL1500_.jpg"
                  alt="/"
                />
                <button>Up to 30% off</button>
                <Product
                  id="986365485"
                  title="Bedsure White Duvet Cover King Size - Washed Duvet Cover, Soft King Duvet Cover Set 3 Pieces with Zipper Closure, 1 Duvet Cover 104x90 inches and 2 Pillow Shams"
                  price={24.99}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/81QF0RHosBL._AC_SL1500_.jpg"
                  alt="/"
                />
                <button>Up to 30% off</button>
                <Product
                  id="9868975646"
                  title="AquaCare High Pressure 8-mode Handheld Shower Head - Anti-clog Nozzles, Built-in Power Wash to Clean Tub, Tile & Pets, Extra Long 6 ft."
                  price={31.99}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/81JA4G2l9kL._AC_SL1500_.jpg"
                  alt="/"
                />
                <button>Up to 30% off</button>
                <Product
                  id="98478956"
                  title="Eureka NEU202 PowerSpeed Lightweight Upright Vacuum Cleaner Carpet and Floor, Powerful Bagless Pet Hair Upright Vacuum"
                  price={129.99}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/61+Jh14MlRL._AC_SL1500_.jpg"
                  alt="/"
                />
                <button>Up to 30% off</button>
                <Product
                  id="986235648"
                  title="Introducing Amazon Fire TV 40"
                  price={189.99}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/418UoVylqyL._AC_.jpg"
                  alt="/"
                />
                <button>Up to 30% off</button>
              </div>
           
          </div>
        </div> */}
      </div>
      <div className="home_row">
        <Product
          id="986595226"
          title="Introducing Amazon Fire TV 40"
          price={189.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/418UoVylqyL._AC_.jpg"
          alt="/"
        />
        <Product
          id="7485654345"
          title="Deeky Sofa Cover, Washable Couch Covers for Dogs, Pet Couch Cover Protector, Reversible Quilted and Water Resistant Furniture Covers with Foam Sticks and Elastic Straps, Loveseat, Gray/Light Gray"
          price={23.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/71nIG1eEy1L._AC_SX522_.jpg"
          alt="/"
        />
      </div>
    </div>
  );
}

export default Home;

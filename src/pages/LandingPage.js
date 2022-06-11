import React, { useState } from "react";
import NewsCard from "../components/NewsCard";
import ArticleCard from "../components/ArticleCard.js";
import SubscribeComp from "../components/SubscribeComp.js";
import Carousel from "../components/Carousel";

import "./LandingPage.css";

const LandingPage = () => {
  const [btnChange, setbtnChange] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setbtnChange(!btnChange);
  };

  const news = [
    {
      title:
        "American Bitcoin Miner Aims to Sell USD 30M Equipment in Russia to Avoid Sanctions",
      description:
        "In a thread on Reddit which has garnered nearly 10,000 replies, people who go to the gym every day (or practice some kind of other daily skill) have been sharing the things that help them stay motivated and proactive in keeping up with their good habits.",
      img: "https://i0.wp.com/thenewschain.co/wp-content/uploads/2022/04/BTCUSDT_2022-04-24_18-05-56-7xtcEj.png?resize=350%2C250&ssl=1",
    },
    {
      title: "Bitcoin and Ethereum Keep Trending Lower, APE and GMT Outperform",
      description:
        "In a thread on Reddit which has garnered nearly 10,000 replies, people who go to the gym every day (or practice some kind of other daily skill) have been sharing the things that help them stay motivated and proactive in keeping up with their good habits.",
      img: "https://i0.wp.com/thenewschain.co/wp-content/uploads/2022/04/1-IeZmbm.jpeg?resize=350%2C250&ssl=1",
    },
    {
      title: "Bitcoin [BTC]: This may be a sign of what’s coming next",
      description:
        "In a thread on Reddit which has garnered nearly 10,000 replies, people who go to the gym every day (or practice some kind of other daily skill) have been sharing the things that help them stay motivated and proactive in keeping up with their good habits.",
      img: "https://i0.wp.com/thenewschain.co/wp-content/uploads/2022/04/BTCUSDT_2022-04-24_18-05-56-7xtcEj.png?resize=350%2C250&ssl=1",
    },
    {
      title: "Nigerian Government Minister Calls for Regulation of Crypto",
      description:
        "In a thread on Reddit which has garnered nearly 10,000 replies, people who go to the gym every day (or practice some kind of other daily skill) have been sharing the things that help them stay motivated and proactive in keeping up with their good habits.",
      img: "https://i0.wp.com/thenewschain.co/wp-content/uploads/2021/12/shutterstock_2048594132-768x432-H1HCZi-XoEdgD.png?resize=350%2C250&ssl=1",
    },
  ];

  return (
    <>
      <div className="flex flex-col pt-20 mt-2">
        <div className="banner px-3">
          <Carousel />
        </div>
        <div className="news_cards mt-10 md:px-8 px-0">
          <div className="flex flex-row">
            <h1 className="text-2xl font-semibold md:text-left ml-8 mr-5 xs:text-center">
              Trending News
            </h1>
            <hr className="flex-grow mt-4 mr-8 bg-black h-1" />
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 mx-8 md:gap-8 gap-4 mt-4">
            {news.map((article) => {
              return (
                <NewsCard
                  title={article.title}
                  description={article.description}
                  img={article.img}
                />
              );
            })}
          </div>
        </div>
        <div className="news_articles mt-10 md:px-8 px-0">
          <div className="flex md:flex-row mx-8 md:space-x-12 xs:space-x-0 flex-col">
            <div className="md:w-1/2 xs:w-full">
              <h1 className="text-2xl md:text-left font-semibold mb-2 text-center">
                Markets
              </h1>
              <hr className="bg-black h-1" />
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
            </div>
            <div className="md:w-1/2 xs:w-full md:mt-0 mt-8">
              <h1 className="text-2xl md:text-left text-center font-semibold mb-2">
                Top Articles
              </h1>
              <hr className="bg-black h-1" />
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
            </div>
          </div>
        </div>
        <div className="news_cards mt-10 md:px-8 px-0">
          <div className="flex flex-row">
            <h1 className="text-2xl font-semibold md:text-left ml-8 mr-5 xs:text-center">
              Newschain Money
            </h1>
            <hr className="flex-grow mt-4 mr-8 bg-black h-1" />
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 mx-8 md:gap-8 gap-4 mt-4">
            {news.map((article) => {
              return (
                <NewsCard
                  title={article.title}
                  description={article.description}
                  img={article.img}
                />
              );
            })}
          </div>
        </div>
        <div className="subscribe_us my-10 md:px-8 px-0">
          <SubscribeComp />
        </div>
        <div className="footer pb-8">
          <div className="footer_m flex flex-row gap-2" id="footer_m">
            <a href="/">
              <span className="text-3xl mr-1 pt-2 font-bold"> Newschain</span>
            </a>

            <div className="flex flex-row justify-around text-center w-full">
              <div className="mx-2" style={{ placeItems: "center" }}>
                <a href=" " className="button11 current">
                  Privacy Policy
                </a>
              </div>
              <div className="mx-2" style={{ placeItems: "center" }}>
                <a href=" " className="button11 current">
                  Terms and Conditions
                </a>
              </div>
              <div className="mx-2" style={{ placeItems: "center" }}>
                <a href="/contact" className="button11 current">
                  Contact Us
                </a>
              </div>
            </div>

            <div className="landing__foot__icons flex flex-row ">
              <a
                href="https://twitter.com/autifynetwork"
                target="_blank"
                rel="noreferrer"
                className="mx-1"
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGnSURBVHgBtVbdbcIwED6bDMAGDRsQfh54ajpBuwGwARuQTEI6QdsJSl9BkHSDdILmHUH6HXKkNroEp5BPMpZP+Pt857tzFBlst1u/0+ks8zzvY9mlf0IptT6dTtFoNHo+r/lnt9sFmJZ0W4TD4TBQIJ9hsaIWAE8eNFyaUkvgkGvE3KeWwPepqV10RQGELa3bhZOt8R8fl6i01j2YIozMzH+5cMm5IOCb0AUCfwriXtkYx3EXl8qZOKNfaV4VIiYJMc/L3kA4kDZ4nscefFKphkQBkMx4hkgEAY+FOCyYM2RGJu2BBy4J6S6GiMkOh8N8MpmkZInNZtOHeFy2V3kQNiE/E2ntinbJyAVCDYFQPloLcAYhdKv9fn9H9gK+tYBBNhgMvsgC3CxxKLepwMJ02VqY7KkM6aVWsYTICxdRFTlO/l5H4Ai2FOMVG1NkRoIwfUgbIbwwlVv7OIl1UIiA4M1xnISrlL1AbbgQvcd4su3CLPBNVzyRl8APTkItgTuCPh6PIbWHSI/H4zXJbflaBPxloYoVP/5waVpVkZbIwJEgCYIi+34ATGDGNz/K05IAAAAASUVORK5CYII="
                  alt="twitter"
                  id="icons"
                ></img>
              </a>
              <a
                href="https://www.linkedin.com/company/autify-network/"
                target="_blank"
                rel="noreferrer"
                className="mx-1"
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFXSURBVHgB7VXdUYQwEE4CBWgHlCC/M7xhB1rB2cnlKtAO7uxAKxCf+ZES7ECemQH89gQHudwxBm588ZuBzH6EJN/uZpezDkmSRIZhrNu2vYJ5wTTBOY+bptl5nve4t+mVZZnEsGbLYuO6ruRY/A7Glp0BUHItIGml+PYAPsIo2QyQy0lBOyQRgwL+s3s7z/O3Li46KMWYwcnHAdYOOP1rKkgLqrY49TO5CaPFZuDARUtDqEikF++fI1yJRwohLsmu65pi9qRaS+WiSVRVZYdh+N7bQRAUGG6REC9wacSmFExhuPgQULIZc1oK0jS9QQLQ5SxxYtmXBdM0C1yuH3O1FMD39+wrfS1sJHvetu3yYC7TwCh1rVNztTb4Df43+PsNqBZ9sHkV8ySo4RTsTEA6x0J1vRfETvi+H7OZrfEI9iXkuxxT84ekVdeLdUG1qUApkY7jvBLxCYWygiQ7y9ArAAAAAElFTkSuQmCC"
                  alt="linkedin"
                  id="icons"
                ></img>
              </a>
              <a
                href="https://www.facebook.com/autifynetwork"
                target="_blank"
                rel="noreferrer"
                className="mx-1"
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEESURBVHgB7ZXNEYJADIWzCwVYAiXI3x0r0RLswLUStRM8M4Ad2AIF8OOL4zpclIhw4zsACy/JvOwyUfQiy7LEcZxD13VrLFc0EqVU2rbtOYqiy3PNlzzPDW4HmpZjGIZGIfkOixPNAJxsNCxtaSa45S56ngj1FbQGQRff9yv7Eh3oPgXwfrokBOK93bgfWGmpckTyJ2IHfYqiuMORJ9GKHfSRJmfUt01icJbVt+9D8aMcWMqy9IY0fxWo69ob0gy2yNJvlTSG+cvBUmAp8C5Q0Yy4GDg3yUz45exbkDfVTdMcaT7OOo7jFA+GpsfwDOn//jtY2qJlCY2Hx+pNa22CILjyiwczlG3mydx+agAAAABJRU5ErkJggg=="
                  alt="facebook"
                  is="icons"
                ></img>
              </a>
              <a
                href="https://t.me/autifynetwork"
                target="_blank"
                rel="noreferrer"
                className="mx-1 "
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEESURBVHgB7ZXNEYJADIWzCwVYAiXI3x0r0RLswLUStRM8M4Ad2AIF8OOL4zpclIhw4zsACy/JvOwyUfQiy7LEcZxD13VrLFc0EqVU2rbtOYqiy3PNlzzPDW4HmpZjGIZGIfkOixPNAJxsNCxtaSa45S56ngj1FbQGQRff9yv7Eh3oPgXwfrokBOK93bgfWGmpckTyJ2IHfYqiuMORJ9GKHfSRJmfUt01icJbVt+9D8aMcWMqy9IY0fxWo69ob0gy2yNJvlTSG+cvBUmAp8C5Q0Yy4GDg3yUz45exbkDfVTdMcaT7OOo7jFA+GpsfwDOn//jtY2qJlCY2Hx+pNa22CILjyiwczlG3mydx+agAAAABJRU5ErkJggg=="
                  alt="facebook"
                  is="icons"
                ></img>
              </a>
            </div>
          </div>
          <div
            className="footer_copyright mx-auto text-center"
            style={{ placeItems: "center" }}
          >
            <a href="#0" className="button11 current">
              <i className="mdi mdi-copyright"></i>2022 Newschain . All Rights
              Reserved.
            </a>
          </div>
        </div>
        <div className="floating_button fixed bottom-4 right-4 tooltip ">
          <button
            className="text-white bg-orange-500 p-4 font-bold rounded-full hover:shadow-lg transition-all border-0 hover:border-2 hover:bg-white hover:text-orange-500 hover:border-orange-500"
            onClick={handleClick}
          >
            {btnChange ? (
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill-rule="evenodd"
                  d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill-rule="evenodd"
                  d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                <path
                  fill-rule="evenodd"
                  d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            )}
          </button>

          <span class="tooltiptext">
            {btnChange ? "Go To Profile" : "Connect To Wallet"}
          </span>
        </div>
      </div>
    </>
  );
};

export default LandingPage;

import React from "react";
import NewsCard from "../components/NewsCard";
import ArticleCard from "../components/ArticleCard.js";

const LandingPage = () => {
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
      <div className="flex flex-col mt-4 mb-8">
        <div className="news_cards">
          <h1 className="text-2xl font-semibold md:text-left mx-8 xs:text-center">
            Trending News
          </h1>
          <div className="grid md:grid-cols-4 grid-cols-1 mx-8 md:gap-8 xs:gap-2">
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
        <div className="news_articles">
          <div className="flex md:flex-row mx-8 md:space-x-12 xs:space-x-0 flex-col">
            <div className="md:w-1/2 xs:w-full">
              <h1 className="text-2xl md:text-left font-semibold mb-2 text-center">
                Markets
              </h1>
              <hr className="" />
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
            </div>
            <div className="md:w-1/2 xs:w-full md:mt-0 mt-8">
              <h1 className="text-2xl md:text-left text-center font-semibold mb-2">
                Top Articles
              </h1>
              <hr />
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;

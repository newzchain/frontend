import React from "react";

const ArticleCard = () => {
  return (
    <>
      <div className="flex md:flex-row justify-between mt-4">
        <div>
          <h2 className="text-left text-xl">The Holcim Dilemma</h2>
          <p className="text-left text-md">
            An Explainer on why Holcim may be exiting India.
          </p>
          <p className="text-left mt-4">Apr 28, 2022</p>
        </div>
        <div>
          <img
            alt="article-img"
            style={{ width: "150px", height: "100px" }}
            src="https://cdn.finshots.app/images/2022/04/Holcimcement_1a-1.png"
          />
        </div>
      </div>
      <hr className="mt-2" />
    </>
  );
};

export default ArticleCard;

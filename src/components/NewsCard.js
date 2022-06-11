import React from "react";

const NewsCard = (props) => {
  return (
    <>
      <div
        class="flex flex-col max-w-md bg-white py-0 rounded-xl space-y-2 my-4 hover:-translate-y-1 transition-all duration-500 pb-2"
        style={{ backgroundColor: "#ffffff" }}
      >
        <img class="w-full rounded-t-xl" src={props.img} alt="motivation" />
        <h2 class="font-semibold text-gray-900 text-xl text-left px-2 hover:underline">
          {props.title}
        </h2>
        <p class="leading-relaxed text-left text-ellipsis text-md px-2 mb-1">
          {props.description.substring(
            0,
            Math.min(150, props.description.length)
          ) + " ..."}
        </p>
      </div>
    </>
  );
};

export default NewsCard;

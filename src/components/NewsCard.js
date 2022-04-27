import React from "react";

const NewsCard = (props) => {
  return (
    <>
      <div
        class="flex flex-col max-w-md bg-white py-0 rounded-xl space-y-2 my-4 hover:-translate-y-2 hover:shadow-md transition-all pb-2"
        style={{ height: "31rem", backgroundColor: "#f7f7f7" }}
      >
        <img class="w-full rounded-t-xl" src={props.img} alt="motivation" />
        <h3 class="font-semibold text-gray-900 text-xl text-left px-2">
          {props.title}
        </h3>
        <p class="leading-relaxed text-left text-ellipsis text-sm px-2 overflow-hidden">
          {props.description}
        </p>
      </div>
    </>
  );
};

export default NewsCard;

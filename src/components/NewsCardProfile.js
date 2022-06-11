import React from "react";

const NewsCard = (props) => {
  return (
    <>
      <div
        class="flex flex-col justify-evenly max-w-md bg-white py-0 rounded-xl space-y-2 my-4 hover:-translate-y-1 transition-all duration-500 pb-2"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div>
          <img class="w-full rounded-t-xl" src={props.img} alt="motivation" />
          <h2 class="font-semibold text-gray-900 text-xl text-left px-2 hover:underline">
            {props.title}
          </h2>
          <p className="text-gray-900 text-base text-left px-2">
            22<sup>nd</sup> May 2002
          </p>
        </div>
        <div className="flex flex-row px-2 justify-between pt-4">
          <div className="flex flex-row hover:underline cursor-pointer">
            <svg
              class="w-6 h-6 text-red-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <p>72</p>
          </div>
          <div className="flex flex-row hover:underline cursor-pointer">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              ></path>
            </svg>
            <p>36</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;

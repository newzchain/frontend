import React, { useState } from "react";
import ReactQuill from "react-quill";
import "../../node_modules/react-quill/dist/quill.snow.css";

const CreatorsPage = () => {
  const [body, setbody] = useState("");
  const sendToServer = () => {
    console.log(body);
  };

  return (
    <div className="px-8 my-24 bg-white">
      <h1 className="text-2xl font-bold mb-8 text-center">Text Editor</h1>
      <ReactQuill
        onChange={(e) => {
          setbody(e);
        }}
        value={body}
        modules={CreatorsPage.modules}
      />
      <div className="text-right">
        <button className="mt-8 border-2 hover:bg-indigo-500 hover:text-white border-indigo-500 px-4 py-2 transition-all">
          Create Blog
        </button>
      </div>
    </div>
  );
};

CreatorsPage.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

CreatorsPage.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export default CreatorsPage;

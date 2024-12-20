import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { message } from "antd";

function Upload() {
  const [author, setAuthor] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [contents, setContents] = useState("");

  //adding files
  const fileOnchange = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  //api integration
  async function postnewContent(e) {
    e.preventDefault();
    const contents = {
      author,
      email,
      title,
      file,
      description,
    };
    const response = await axios.post(
      `http://localhost:5000/api/upload`,
      contents,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const data = await response.data;
    if (!data.data) {
      message.error(data.error);
    } else {
    //   setContents([...contents, data.data]);
      setAuthor("");
      setEmail("");
      setTitle("");
      document.getElementById("files").value = "";
      setDescription("");
      message.success(data.message);
    }
  }

  return (
    <>
      <h2 className="text-center text-3xl font-bold">Upload your Blog</h2>
      <div className="w-full max-w-7xl mx-auto my-5 px-5">
        <form onSubmit={postnewContent} className="w-full flex flex-col gap-4">
          {/* Top-level fields */}
          <div className="w-full">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Author:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border rounded-md py-2 px-3"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full border rounded-md py-2 px-3"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium mb-1" htmlFor="title">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full border rounded-md py-2 px-3"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="description"
            >
              Description:
            </label>
            <input
              type="text"
              id="description"
              name="description"
              className="w-full border rounded-md py-2 px-3"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium mb-1" htmlFor="files">
              Upload:
            </label>
            <input
              type="file"
              id="files"
              name="files"
              className="w-full border rounded-md py-2 px-3"
              onChange={fileOnchange}
            />
          </div>

          <button type="submit" className="bg-slate-400 py-1 rounded-md">
            Submit
          </button>
        </form>
      </div>
      <div className="text-center">
        <Link to={"/"}>
          <button className="bg-red-500 rounded-lg text-white px-4 py-1">
            Go to Home
          </button>
        </Link>
      </div>
    </>
  );
}

export default Upload;

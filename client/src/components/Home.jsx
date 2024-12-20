import React, { useEffect, useState } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import ContentCard from "./ContentCard";
import axios from "axios";
import { message } from "antd";
import { backend } from "../constant";


function Home() {
    const [contents, setContents] = useState([]);


    const fetchData = async() => {
        try {
            const res = await axios.get(`${backend}/api/all-posts`)
            if(res.data.success){
                setContents(res.data.contents)
                console.log(res.data.contents)
            }
        } catch (error) {
            console.log(error.message)
            message.error(error.message)
        }
    }


    useEffect(() => {
        fetchData()
    }, [])
  return (
    <>
      <Header />
      <HeroSection />
      <Link to={"/upload"}>
      <div className="text-center text-3xl font-bold border rounded-md my-10 w-fit mx-auto bg-red-300 px-10 py-2">
        Upload Your Posts
      </div>
      </Link>

      <ContentCard contents={contents}  />

      <Footer />
      
    </>
  );
}

export default Home;

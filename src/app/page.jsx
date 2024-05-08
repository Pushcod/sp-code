"use client";
import Image from "next/image";
import Banner from "../components/Banner/Banner";
import DataBanner from "../collections/TestData";
import Soft from "../components/Soft/Soft";
import Projects from "../components/Projects/Projects";
import { getPopularPosts } from "../hooks/useArticles";




export default function Home() {
  const { postsData } = getPopularPosts();
  return (
   <>
   <Banner getData={DataBanner}/>
   <Soft getPost={''} getCategory={''}/>
   <Projects getData={postsData} />
   </>
  );
}

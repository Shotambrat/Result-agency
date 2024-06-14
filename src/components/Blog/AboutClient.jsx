import React from "react";
import AboutClientText from "./AboutClientText";
import blog1 from "../../assets/img/Blog/blogClient1.png";
import blog2 from "../../assets/img/Blog/blogClient2.png";
import blog3 from "../../assets/img/Blog/blogClient3.png";

export default function AboutClient({ blogId }) {
  return (
    <>
      <div className="mt-16 xl:mt-[4.5rem] 2xl:mt-20">
        <AboutClientText blogId={blogId} num="1" />
        <br />
        <AboutClientText blogId={blogId} num="2" />
        {blogId === "3" && <br />}
        {blogId === "3" && <AboutClientText blogId={blogId} num="3" />}
      </div>
      <div className="mt-8 lg:mt-10 rounded-[10px] md:rounded-[16px]">
      <img
          src={blogId === "1" ? blog1 : blogId === "2" ? blog2 : blog3}
          alt="Blog client"
          className="w-full h-full"
        />
      </div>
    </>
  );
}

import React from "react";
import AboutClientText from "./AboutClientText";

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
      <div className="mt-8 lg:mt-10 h-[11rem] xs:h-[18rem] md:h-[22rem] lg:h-[28rem] xl:h-[36rem] 2xl:h-[44rem] bg-[#D9D9D9] rounded-[10px] md:rounded-[16px]">
        {/* <img src="" alt="Blog client" /> */}
      </div>
    </>
  );
}

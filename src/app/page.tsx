
import Header from "@/component/Header";
import Top from "@/component/top";
import Middle from "@/component/middle";
import Footer from "@/component/footer";
import Datasimplified from "@/component/Datasimplified";
import Last from "@/component/Last";


export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <Top />
      <Middle />
      <div className="w-full h-full mt-[75px]">
        <Datasimplified />
      </div>


        {/* <Last /> */}

      <div className="w-full h-fit flex justify-center items-center mt-[20px] ">
        <Last />
      </div>
      <div className=" w-full  ">
      <Footer/>
      </div>
    </div>
  );
}

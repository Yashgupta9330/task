
import Header from "@/component/Header";
import Top from "@/component/top";
import Middle from "@/component/middle";
import Footer from "@/component/footer";
import Datasimplified from "@/component/Datasimplified";
import Last from "@/component/Last";


export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <Top />
      <Middle />
      <div className="w-full h-full mt-[75px]">
        <Datasimplified />
      </div>
      <div className="w-full flex justify-center items-center mt-10 sm:mt-0  mb-8">
        <Last />
      </div>
      <div className=" w-full  ">
      <Footer/>
      </div>
    </div>
  );
}

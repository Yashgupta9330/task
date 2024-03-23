
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
      <div className="w-fit h-fit absolute top-[2311px] left-[137px] ">
        <Last />
      </div>
      <div className=" w-full absolute top-[2914px] ">
      <Footer/>
      </div>
    </div>
  );
}

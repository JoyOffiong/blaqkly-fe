
import Image from "next/image";
import Header from "./components/header";
import blaqklyLogo from "@/images/blaqkly2.jpeg";
import ProductListing from "./product_listing/page";


export default function Home() {
  return (
    <div  className="h-[500px]">
      <ProductListing/>


    </div>
  );
}

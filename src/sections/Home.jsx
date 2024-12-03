import { MyNav } from "../components/MyNav";
import { MyHead } from "../components/myHead";
import { Banner } from "../components/Banner"




export  function Home() {
  return (
    <>
    <MyNav/>
    {/* <Banner/> */}
    <iframe src="//www.highperformanceformat.com/41f36f890b09799367092d025b677bce/invoke.js" height={60} width={468} frameborder="0"></iframe>
    <MyHead/>
    
    </>
  )
}

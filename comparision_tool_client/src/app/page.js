import Header from "@/components/header"
import Postcontainer from "@/components/postContainer"
import Link from "next/link"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Home() {
  return (
    <main className="h-screen">
      <section className="flex justify-center gap-28  w-full items-center h-1/2 bg-gradient-to-t from-white   via-slate-100 to-[#2c6ef0]/40   bg-opacity-50">
        <h2 className="w-72 text-3xl font-medium leading-normal">
        Find out what is the most searched in 
        <strong className="text-[#2c6ef0]"> G</strong> 
        <strong className="text-[#dd1200]">o</strong> 
        <strong className="text-[#f3b600]">o</strong> 
        <strong className="text-[#2c6ef0]">g</strong> 
        <strong className="text-[#009928]">l</strong> 
        <strong className="text-[#dd1200]">e </strong> 
        among 50 different countries in the world.
        </h2>
        <div className="border border-black items-center border-opacity-30 py-2 px-4 rounded-full flex gap-20">
          <p className="text-animated ml-3 text-xl font-medium border-r-2 border-[#2c6ef0] pr-1">Top Term Colombia</p>
          <Link href={'/query_builder/1'} className="bg-[#2c6ef0] text-slate-50 py-2 px-3 rounded-full">Run my first query</Link>
        </div>
      </section>
      <div className="flex flex-col justify-center items-center  ">
        <Postcontainer title="You can check the queries of our users"/>
      </div>
      <ToastContainer
          position="bottom-left"
          autoClose={3500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
    </main>
  )
}

import Link from "next/link"
import Image from "next/image"
import avatar from "../images/avatar.png"
import Head from "next/head"

const Nav = ()=>{
  return (
    <>
  <nav className="bg-primary text-white flex items-center  p-3 flex-wrap ">
    <Link href={"/"} class="p-2 mr-4 inline-flex items-center">
        
      <h5 class="cursor-pointer pb-3">Sirius</h5>
    </Link>
    <div
        className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
        id="navigation"
      >
    <div
          className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto"
        >
          <a
            href="#"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white-400 items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            <span>About us</span>
          </a>
          <a
            href="/teams/create"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white-400 items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            <span>Start a Team</span>
          </a>
          <a
            href="#"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white-400 items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            <span>Calendar</span>
          </a>
          <a
            href="#"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white-400 items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            <span>Bulletin</span>
          </a>
          
        </div>
      </div>
      <ul className="py-4 space-x-10 flex items-center text-[22px]">
        <li className="cursor-pointer text-[30px]"><i className="fa-solid fa-bell"></i></li>
        <li className="relative">
          <button type="button" id="user-console-toggler">
          <Image src={avatar} width={60} height={50} className="shadow rounded-full max-w-full h-auto align-middle border-none" onClick={(event)=>{const userConsoleToggler = document.getElementById('user-console-toggler');
        const userConsole = document.getElementById('user-console');      
        if (userConsoleToggler.contains(event.target)) {
          userConsole.classList.toggle('hidden');
        } 
        else if (!userConsole.contains(event.target)) {
          userConsole.classList.add('hidden');
        }
      }}/>
          </button>
            <div id="user-console" className="hidden">
              <ul className="absolute flex flex-col justify-center items-center">
                <p className="text-[24px] font-semibold">First name and Last name</p> 
                <p className="text-[18px] font-thin">Email</p>
                <div className="mt-[10px] flex flex-row w-full space-x-5">
                

                  <Link href="/settings" className="hover:scale-[1.2] fa-solid fa-gear"></Link>
                  <Link href="/" id="logout-btn" className="text-primary"><button className="px-5  hover:bg-primary hover:text-white border-solid border-2 border-primary rounded-full"> Logout</button></Link>
                </div>
              </ul>
            </div>
        </li>
      </ul>
        
    
  </nav>
  </>)
}
    
export default Nav
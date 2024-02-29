import { useState } from 'react'
import react from "react"
import Plan from "./images/images/background/plan.svg"
import Mirorone from "./images/images/portfolio/1.png"
import Mirortwo from "./images/images/portfolio/2.png"
import Mirorthree from "./images/images/portfolio/3.png"
import Group2 from "./images/images/background/Group2.svg"
import Logoone from "./images/images/logos/1.svg"
import Logotwo from "./images/images/logos/2.svg"
import Logothree from "./images/images/logos/3.svg"

function Portfolio() {
    return(
        <>
        <div className="bigg-container">
        <div className="Portfolio bg-[#141413] mt-[-150px] h-[750px]">
            <img src={Plan} alt="" className='ml-[400px]'/>
            <marquee className="text-[#fff] w-[100%] text-[150px] relative top-[-300px] font-medium">Portfolio   Portfolio    Portfolio    Portfolio Portfolio    Portfolio    Portfolio   Portfolio</marquee>
        </div>
        <div className="Mirror-maze bg-[#141413] flex justify-between text-center text-[#fff]">
            <div className="Mirror-div">
                <img src={Mirorone} alt="" className='w-[470px] h-[350px] mb-[20px]'/>
                <h3>- 01 -</h3>
                <h1>Mirror Maze</h1>
                <p className='text-[#808278]'>residential complex with mirror walls</p>
            </div>
            <div className="Mirror-div">
                <img src={Mirortwo} alt="" className='w-[470px] h-[350px] mb-[20px]'/>
                <h3>- 01 -</h3>
                <h1>Mirror Maze</h1>
                <p className='text-[#808278]'>residential complex with mirror walls</p>
            </div>
            <div className="Mirror-div">
                <img src={Mirorthree} alt="" className='w-[470px] h-[350px] mb-[20px]'/>
                <h3>- 01 -</h3>
                <h1>Mirror Maze</h1>
                <p className='text-[#808278]'>residential complex with mirror walls</p>
            </div>
        </div>
        <div className="arrows  justify-center flex gap-[15px] bg-[#141413] text-[#fff] pt-[50px] pb-[100px]">
                <div className="left border w-[70px] h-[70px] text-center pt-[15px]">
                <i class='bx bx-left-arrow-alt bx-flip-vertical text-[35px]'></i>
                </div>
                <div className="right w-[70px] h-[70px] border text-center pt-[15px]">
                <i class='bx bx-right-arrow-alt text-[35px]'></i>
                </div>
            </div>
            <div className="clients text-center pt-[100px]  text-[#fff] bg-[#141413]">
                <img src={Group2} alt="" className='ml-[400px] w-[700px]'/>
                <marquee className="relative top-[-450px] text-[180px] w-[80%]">Clients Clients Clients Clients Clients Clients Clients Clients Clients Clients Clients</marquee>
            </div>
            <div className="arrowss mt-[-100px] pl-[1350px] flex gap-[15px] bg-[#141413] text-[#fff] pt-[50px] pb-[100px]">
                <div className="leftt border w-[70px] h-[70px] text-center pt-[15px]">
                <i class='bx bx-left-arrow-alt bx-flip-vertical text-[35px]'></i>
                </div>
                <div className="rightt w-[70px] h-[70px] border text-center pt-[15px]">
                <i class='bx bx-right-arrow-alt text-[35px]'></i>
                </div>
            </div>
            <div className="logos bg-[#141413] flex justify-between pb-[100px] pb-[210px]">
                <div className="logo-1 border w-[350px] h-[250px] bg-[#E4E7F1] text-center">
                    <img src={Logoone} alt="" className='ml-[20px] mt-[20px] mb-[50px] w-[300px]'/>
                    <p className='mt-[70px]'>Very long client company name</p>
                </div>
                <div className="logo-1 border w-[350px] h-[250px] bg-[#E4E7F1] text-center">
                    <img src={Logotwo} alt="" className='ml-[20px] mt-[20px] mb-[50px] w-[300px]'/>
                    <p>Very long client company name</p>
                </div>
                <div className="logo-1 border w-[350px] h-[250px] bg-[#E4E7F1] text-center">
                    <img src={Logothree} alt="" className='ml-[20px] mt-[20px] mb-[50px] w-[300px]'/>
                    <p>Very long client company name</p>
                </div>
                <div className="logo-1 border w-[350px] h-[250px] bg-[#E4E7F1] text-center">
                    <img src={Logoone} alt="" className='ml-[20px] mt-[20px] mb-[50px] w-[300px]'/>
                    <p className='mt-[70px]'>Very long client company name</p>
                </div>
            </div>
            </div>
        </>
    )
}

export default Portfolio;
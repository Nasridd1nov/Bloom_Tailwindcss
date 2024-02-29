import { useState } from 'react'
import react from "react"
import Group from "./images/images/background/Group.svg"
import Service from "./images/images/background/service.png"


function Services() {
    return(
        <>
        <div className="bigg-container">
        <div className="services bg-[#141413] h-[700px]">
            <img src={Group} alt="" className='ml-[410px]'/>
            <marquee className="text-[white] text-[130px] w-[800px] top-[-250px] ml-[300px] relative font-medium">Services Services Services Services Services Services Services</marquee>
        </div>
        <div className="design  bg-[#141413] text-[#E4E7F1] ">
            <div className="design-radius  w-[1000px] text-[45px] ml-[500px] leading-[85px] ">
            <div className="design-item flex justify-between border-b border-[#595A5E] ">
                <h1>Architectural Engineering</h1>
                <p className='text-[#595A5E]'>01</p>
            </div>
            <div className="design-item flex justify-between border-b border-[#595A5E]">
                <h1>Interior Design</h1>
                <p className='text-[#595A5E]'>02</p>
            </div>
            <div className="design-item flex justify-between border-b border-[#595A5E]">
                <h1>Urban environment design</h1>
                <p className='text-[#595A5E]'>03</p>
            </div>
            <div className="design-item flex justify-between border-b border-[#595A5E]">
                <h1>Landscape design</h1>
                <p className='text-[#595A5E]'>04</p>
            </div>
            <div className="design-item flex justify-between border-b border-[#595A5E]">
                <h1>Project documentation</h1>
                <p className='text-[#595A5E]'>05</p>
            </div>
            <div className="design-item flex justify-between border-b border-[#595A5E]">
                <h1>Author's supervision</h1>
                <p className='text-[#595A5E]'>06</p>
            </div>
            </div>
            <div className="design-img">
                <img src={Service} alt="" className='w-[300px] relative top-[-650px] left-[1100px]'/>
            </div>
        </div>
        </div>
        </>
    )
}
export default Services;
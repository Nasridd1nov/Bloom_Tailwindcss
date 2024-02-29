import { useState } from 'react'
import react from "react"
import Logo from "./images/images/Logo.png"

function Footer(){
    return(
        <>
        <div className="bigg-container">
        <div className="footer w-[100%]  h-[640px] bg-[#000000] ">
            
                <div className="footer-item text-[#797F87] pl-[500px]">
                    <img src={Logo} alt="" className='w-[25px] h-[30px] relative top-[25px]'/>
                    <ul className='mt-[50px] leading-[50px] text-[25px] font-normal '>
                        <li><a href="#"></a>About US</li>
                        <li><a href="#"></a>Services</li>
                        <li><a href="#"></a>Portfolio</li>
                        <li><a href="#"></a>Clients</li>
                        <li><a href="#"></a>Contacts</li>
                    </ul>
                </div>
                <div className="footer-images text-[#fff] flex gap-[20px] left-[700px] relative top-[-50px] ">
                    <div className="insta border w-[60px] h-[60px] text-[25px] text-center">
                <i class='bx bxl-instagram mt-[18px] opacity-55'></i>
                </div>
                <div className="telegram border w-[60px] h-[60px] text-[25px] text-center">
                <i class='bx bxl-telegram mt-[18px] opacity-55'></i>
                </div>
                <div className="facebook border w-[60px] h-[60px] text-[25px] text-center">
                <i class='bx bxl-facebook mt-[18px] opacity-55' ></i>
                </div>
                <div className="wikipedia border w-[60px] h-[60px] text-[25px] text-center">
                <i class='bx bxl-wikipedia mt-[18px] opacity-55'></i>
                </div>
                </div>
                <div className="order-project bg-[black] w-[270px] h-[250px] relative text-[white] p-[25px] border left-[1180px] top-[-450px]">
      <svg className='ml-[150px] mt-[-20px]' xmlns="http://www.w3.org/2000/svg" width="80" height="90" viewBox="0 0 90 90" fill="none">
            <path d="M66.6789 31.2201C66.8552 36.6117 69.5245 40.6488 72.0052 42.7478L73.8676 40.5467C71.9309 38.9079 69.7071 35.6054 69.5606 31.1259C69.4155 26.6871 70.7163 21.4407 77.4441 14.7129L75.4053 12.6741C68.6774 19.402 63.4312 20.7028 58.9924 20.5576C54.5129 20.4111 51.2103 18.1874 49.5715 16.2506L47.3705 18.1131C49.4695 20.5937 53.5065 23.263 58.8981 23.4393C61.0096 23.5084 63.2926 23.1944 65.7138 22.3657L12.7922 75.2873L14.831 77.3261L67.7525 24.4045C66.9238 26.8257 66.6098 29.1086 66.6789 31.2201Z" fill="#E3E7F2"/>
          </svg>
      <h3 className='text-[30px] mt-[40px] ml-[30px]'>Order <br /> Project</h3>
      </div>
            <div className="adress mt-[-150px] text-[#fff]">
                <div className="info flex  text-right w-[60%] justify-between ml-[500px] font-normal text-[20px]">
                <h1>+998 (90) 985 64 89</h1>
                <h2>st. Buyuk Ipak Yuli, 154A</h2>
                <p>info@bloom-arc@gmail.com</p>
                </div>
                <div className="line border w-[67%] mt-[50px] ml-[500px]"></div>
                <p className='relative top-[20px] left-[530px]'>© 2024. Bloom Architecture- All rights reserved</p>
            </div>
        </div>
        </div>
        </>
    )
}

export default Footer;
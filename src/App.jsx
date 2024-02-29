import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from "./images/images/Logo.png"
import Vector from "./images/images/background/Vector.svg"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bigg-container">
    <body className='bg-[#141413]'>
    <header className='flex gap-[25px]  w-[100%] h-[1200px]'>
      
      <div className="navbar  sm: hidden; 2xsl:w-[270px] flex gap-[20px] py-[30px] px-[10px]">
        <div className="logo">
        <img src={Logo} alt="" className='w-[30px] h-[35px] relative top-[5px]'/>
        </div>
        <div className="item px-[10px]">
          <ul className='text-[#797F87] text-[28px]'>
            <li><a href="#"></a>About <br /> Us</li>
            <li><a href="#"></a>Services</li>
            <li><a href="#"></a>Portfolio</li>
            <li><a href="#"></a>Clients</li>
            <li><a href="#"></a>Contacts</li>
          </ul>
          <p className='text-[#797F87] text-[19px] my-[25px] tracking-[5px]'>En    Ru    UZ</p>
        </div>
      </div>
      <div className="main-content">
      <img src={Vector} alt=""  className='w-[800px] relative left-[400px] top-[-100px]'/>
      <h1 className='text-[100px] relative bottom-[700px] text-[white] leading-[120px] pl-[650px] font-semibold '>Bloom <br /> Architechture</h1>

      <div className="order-project bg-[black] w-[270px] h-[250px] bottom-[570px] left-[300px] relative text-[white] p-[25px] border">
      <svg className='ml-[150px] mt-[-20px]' xmlns="http://www.w3.org/2000/svg" width="80" height="90" viewBox="0 0 90 90" fill="none">
            <path d="M66.6789 31.2201C66.8552 36.6117 69.5245 40.6488 72.0052 42.7478L73.8676 40.5467C71.9309 38.9079 69.7071 35.6054 69.5606 31.1259C69.4155 26.6871 70.7163 21.4407 77.4441 14.7129L75.4053 12.6741C68.6774 19.402 63.4312 20.7028 58.9924 20.5576C54.5129 20.4111 51.2103 18.1874 49.5715 16.2506L47.3705 18.1131C49.4695 20.5937 53.5065 23.263 58.8981 23.4393C61.0096 23.5084 63.2926 23.1944 65.7138 22.3657L12.7922 75.2873L14.831 77.3261L67.7525 24.4045C66.9238 26.8257 66.6098 29.1086 66.6789 31.2201Z" fill="#E3E7F2"/>
          </svg>
      <h3 className='text-[30px] mt-[40px] ml-[30px]'>Order <br /> Project</h3>
      </div>
      <p className='mt-[-450px] text-[#E4E7F1] text-[40px] text-left ml-[150px] font-medium'>Architecture that sets the tone: our agency <br /> specializes in creating innovative and <br /> sustainable buildings, <span className='text-[#454648]'>which embody <br /> modern trends and technologies.</span></p>
      </div>
    </header>
    </body>
    </div>
    </>
  )
}

export default App

import React from 'react'
import './App.css';
import DesktopIcon from './components/DesktopIcon';
function App(){
  const icons=[
    {icon:'/icons/computer.png',label:'Computer'},
    {icon:'/icons/recyclebin.png',label:'Recyclebin'},
    {icon:'/icons/pdf.png',label:'MyResume',link:'https://drive.google.com/file/d/1-OTZ0Lr25r7T1JM5RkoTDFmGVmrVNI-n/view?usp=sharing'},
    {icon:'/icons/internet.png',label:'Internet'},
    {icon:'/icons/github.png',label:'Github',link:'https://github.com/akshat4619'},
    {icon:'/icons/linkedin.png',label:'LinkedIn',link:'https://www.linkedin.com/in/akshat-jain-97538b255/'},
  ];


 
  return (
    <div className='desktop'>
      <div className='icons-area'>
        {icons.map((item,index) =>{
           return <DesktopIcon key={index} icon={item.icon} label={item.label} link={item.link} />
        })}
      </div>
      <div className='taskbar'>
        <img src="/icons/windowslogo.png" alt="Start" className='start-button' width={35} height={35} />
        <div className='taskbar-right'>
          <div className='system-icons'>
            <img src="/icons/action1.png" alt="Flag" width={30} height={30} />
            <img src="/icons/audio2.png" alt="Audio" width={30} height={30} />
            <img src="/icons/network.png" alt="Network" width={30} height={30}/>
          </div>
          <div className="time-date">
    <span className="time">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}</span>
    <span className="date">{new Date().toLocaleDateString('en-GB')}</span>
  </div>
        </div>
      </div>
     
    </div>
  )
}

export default App

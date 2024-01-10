import React, { useEffect } from 'react';
import  "./NavBar.css"
import { useLocation } from 'react-router-dom';
import { FiMenu } from "react-icons/fi"
import { IoIosClose } from "react-icons/io"

const NavBar = () => {
    const location = useLocation();
    const [scrolled,setScrolled]=React.useState(false);
    const [open, setOpen] = React.useState(false);

    

    

  useEffect(() => {
    window.addEventListener('scroll',function(){
        const offset=window?.scrollY;
        if(offset > 100 ){
        setScrolled(true);
        }
        else{
        setScrolled(false);
        }
    })
  }, [])

//   console.log(scrolled)
const section = document.querySelectorAll("section")
const navLink = document.querySelectorAll("header nav a")

  useEffect(()=>{
   
    window.addEventListener('scroll',function(){
        section.forEach(sec=>{
            let top = window.scrollY;
            let offset = sec.offsetTop -100;
            let height = sec.offsetHeight;
            let id = sec.getAttribute("id");

            if(top >= offset && top < offset + height){

                navLink.forEach(link=>{
                    link.classList.remove("active");
                    document.querySelector('header nav a[href*='+ id + ']').classList.add("active")
            })
            }
            
        })
    })
  },[section, navLink]) 
  console.log(open)
    return (
        <header className={`${scrolled && "sticky"} header`}>
            <a href="" className='logo'>Nazmul Hasan.</a>

            <label onClick={()=>setOpen(!open)}  className={`hamburger ${open && "active"}`} id='menu-icon'>
              <svg viewBox="0 0 32 32" >
                <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                <path className="line" d="M7 16 27 16"></path>
              </svg>
            </label>  
            <nav onClick={()=>setOpen(!open)} className={`navbar ${open && "active"}`}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#education">Education</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>

                <span className="active-nav"></span>
            </nav>
        </header>
    );
};

export default NavBar;
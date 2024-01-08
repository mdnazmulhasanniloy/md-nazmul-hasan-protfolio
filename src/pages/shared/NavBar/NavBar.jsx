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
  },[])
    return (
        <header className={`${scrolled && "sticky"} header`}>
            <a href="" className='logo'>Nazmul Hasan.</a>

            {open? <IoIosClose onClick={()=>setOpen(!open)} className='box-menu' id='menu-icon'/>
                    :<FiMenu onClick={()=>setOpen(!open)} className='box-menu' id='menu-icon' />
                      
            }
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
import React, { useEffect } from 'react';
import { motion } from "framer-motion" 
import { navItem } from '../../../Components/fackData';
import  "./NavBar.css" 

const NavBar = () => { 
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
 
  
  const div_variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const a_variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };
    return (
        <header className={`${scrolled && "sticky"} header`}>
            <a href="#" className='logo'>Nazmul Hasan.</a>

            <label onClick={()=>setOpen(!open)}  className={`hamburger ${open && "active"}`} id='menu-icon'>
              <svg viewBox="0 0 32 32" >
                <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                <path className="line" d="M7 16 27 16"></path>
              </svg>
            </label>  
            <motion.nav 
              onClick={()=>setOpen(!open)} 
              animate={open? "open" : "close"} 
              className={`navbar ${open && "active"}`}>
              <motion.div variants={div_variants}>
                  {
                    navItem?.map((nav, index)=><motion.a 
                        variants={a_variants} 
                        initial={false}
                        whileInView={{
                          y:0,
                          color: "#fff",
                          opacity: 1,
                          transition:{
                            duration: 1,
                          }
                        }}
                        exit={{
                          y:100,
                          color: "#fff",
                          opacity: 0,
                          transition:{
                            duration: 1
                          }
                        }}
                        href={nav?.path} 
                        key={index}>{nav?.name}</motion.a>)
                  }
              </motion.div>

                <span className="active-nav"></span>
            </motion.nav>
        </header>
    );
};

export default NavBar;
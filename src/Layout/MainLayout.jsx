 import NavBar from '../pages/shared/NavBar/NavBar';
import { Outlet } from 'react-router-dom'; 
import "./layout.css"

const MainLayout = ( ) => { 
    return (
        <div className='layout'>
            <NavBar /> 
            <Outlet />  
        </div>
    );
};

export default MainLayout;
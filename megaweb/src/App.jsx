import { useState,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from "./appwrite/auth";
import {login,logout} from "./store/authSlice"
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
function App() {
  const [loading, setLoading] = useState(true);
  const dispath=useDispatch();
  useEffect(() => {
    authService.getCurrentUser().then((userData)=>{
      if(userData){
        dispath(login({userData}));
      }else{
        dispath(logout());
      }
    }).finally(()=>{
      setLoading(false);
    })
  }, [])
  return !loading? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header></Header>
        <main>
          {/*<Outlet/ >*/ }
        </main>
        <Footer></Footer>
      </div>
    </div>
  ) : (null)
}

export default App

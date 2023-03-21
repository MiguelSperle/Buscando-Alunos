import { GlobalStyle } from "./styles/GlobalStyle/GlobalStyle" // All style
import Main from '../src/components/layout/home/index';
import { ToastContainer, toast } from 'react-toastify'; // lib de alert
import 'react-toastify/dist/ReactToastify.css'; // lib de alert

export default function App(){
  return (
    <>
    <Main/>
    <GlobalStyle/>
    <ToastContainer /> {/*  lib de alert  */}
    </>
  )
}

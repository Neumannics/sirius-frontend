import styles from "../styles/Home.module.css"
import Nav from "./Nav"
import Head from "next/head"
const Layout =({children})=>{
    return (
        <>
        <Head>
        <script src="https://kit.fontawesome.com/3b888f4203.js" crossorigin="anonymous"></script>
        </Head>
        
        
            
                {children}
            
        
        </>
        
    )
}

export default Layout
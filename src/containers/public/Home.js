import { Header } from "../../components"
import './publicCss/Home.scss'
import * as apis from '../../apis'
import { useEffect } from "react"

const Home = ()=>{

    useEffect(()=>{
        const fetchDataHome = async()=>{
            const response = await apis.getHome()
            console.log(response);
        }
        fetchDataHome()
    },[])

    return (
        <div className="home">
            <div className="header">
                <Header/>
            </div>
        </div>
    )
}
export default Home
import './home.css';
import { Header,Posts,SideBar } from '../../index';

export default function Home() {
    return (
        <>
            <Header />
            <div className="home"> 
                <Posts/>
                <SideBar/>
            </div>
        </>
    )
}

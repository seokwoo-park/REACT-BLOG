import './single.css';
import { SideBar, SinglePost } from '../../index';

export default function Single() {
    return (
        <div className="single">
            <SinglePost/>
            <SideBar/>
        </div>
    )
}

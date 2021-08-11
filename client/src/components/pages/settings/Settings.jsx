import './settings.css';
import { SideBar } from '../../index';

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://ocdn.eu/images/pulscms/NjY7MDA_/4659fe9e2b5c6485f51329d6fa7f5b8a.jpg" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display : "none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Alicja"/>
                    <label>Email</label>
                    <input type="text" placeholder="alicja@gmail.com"/>
                    <label>Password</label>
                    <input type="password"/>
                    <button className="settingsSubmit">UPDATE</button>
                </form>
            </div>
            <SideBar/>
        </div>
    )
}

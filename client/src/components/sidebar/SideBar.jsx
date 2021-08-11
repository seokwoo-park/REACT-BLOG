import './sidebar.css'
export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.daumcdn.net%2Fthumb%2FR720x0.q80%2F%3Fscode%3Dmtistory%26fname%3Dhttp%3A%252F%252Fcfile3.uf.tistory.com%252Fimage%252F245D863856C4765D1F3F5E&f=1&nofb=1"
                alt=""
                />
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar tempor lobortis. 
                Phasellus eget elit eleifend turpis aliquet semper sed non mi. 
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Film</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                </div>
            </div>
        </div>
    )
}

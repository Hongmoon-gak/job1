import NavItems from "./NavItems";
import NavUser from "./NavUser";
import { Link } from "react-router-dom";

import "./NavBar.css";

function NavBar(){
    return(
        <div className="nav-container">
            <div className="nav-logo">
                    <Link to={'/'}><img src="/Images/Job1 Logo.png" alt="Job-일" /> </Link>
            </div>

            <div className="navitems-container">
                <div className="navmenus">
                    <Link className="navmenus-list" to={'/law'}>법률</Link>
                    <Link className="navmenus-list" to={'/board'}>게시판</Link>
                    <Link className="navmenus-list" to={'/news'}>새 소식</Link>
                </div>
            </div>

            <div className="navuser-container">
                <Link className="navuser-list" id="nav-login" to={'/login'} >로그인</Link>
                <div className="navuser-list" id="nav-mypage">
                    <Link to={'/mypage'}>마이페이지</Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
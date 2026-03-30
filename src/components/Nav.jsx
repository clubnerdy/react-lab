import "./Nav.css";
import { navIcon } from "@/assets";

const Nav = () => {
  return (
    <div className="Nav">
      <div className="container">
        <figure className="nav_icon">
          <img src={navIcon} alt="네비게이션" />
        </figure>
        <ul>
          <li className="active">역량</li>
          <li>기술</li>
          <li>경력</li>
          <li>프로젝트</li>
          <li>블로그</li>
          <li>Design Book</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;

import logo from "../images/schLogo.png";
import {
  FaChevronRight,
  FaComment,
  FaThLarge,
  FaUserCircle,
} from "react-icons/fa";
import {
  SideBarMenu,
  Header,
  Profile,
  SideBarNav,
} from "./styles/sideBar.styled";
import { FaUserGroup } from "react-icons/fa6";
import { useState } from "react";

function SideBar() {
  const [notification, setNotification] = useState(false);

  const navContents = [
    {
      logo: <FaThLarge />,
      name: "DashBoard",
      notification: 3,
    },
    {
      logo: <FaUserGroup />,
      name: "Students",
      notification: 2,
    },
    {
      logo: <FaThLarge />,
      name: "Academics",
      notification: 3,
    },
    {
      logo: <FaThLarge />,
      name: "Calendar",
      notification: 0,
    },
    {
      logo: <FaComment />,
      name: "SMS",
      notification: 2,
    },
    {
      logo: <FaThLarge />,
      name: "Human Resource",
      notification: 4,
    },
    {
      logo: <FaThLarge />,
      name: "Finance",
      notification: 5,
    },
  ];

  return (
    <SideBarMenu>
      <Header>
        <img src={logo} alt="school logo" />
        <span>Edmate</span>
      </Header>
      <SideBarNav>
        {navContents.map((navContent, index) => (
          <li key={index}>
            <div className="dashboard">
              <span>{navContent.logo}</span>
              <p>{navContent.name}</p>
            </div>
            <div className="dashboard">
              {notification && (
                <span className="notify">{navContent.notification}</span>
              )}
              <FaChevronRight />
            </div>
          </li>
        ))}
      </SideBarNav>
      <Profile>
        <span></span>
        <p>Joe Biden</p>
        <div>
          <FaUserCircle />
          SignUp Now
        </div>
      </Profile>
    </SideBarMenu>
  );
}

export default SideBar;

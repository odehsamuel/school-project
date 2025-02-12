import {
  FaCalendarAlt,
  FaChevronRight,
  FaComment,
  FaCreditCard,
  FaGraduationCap,
  FaThLarge,
  FaUserCircle,
  FaUserMd,
} from "react-icons/fa";
import {
  SideBarMenu,
  Header,
  Profile,
  SideBarNav,
} from "./styles/sideBar.styled";
import { useState } from "react";
import { FaUserGroup } from "react-icons/fa6";

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
      logo: <FaGraduationCap />,
      name: "Academics",
      notification: 3,
    },
    {
      logo: <FaCalendarAlt />,
      name: "Calendar",
      notification: 2,
    },
    {
      logo: <FaComment />,
      name: "SMS",
      notification: 19,
    },
    {
      logo: <FaUserMd />,
      name: "Human Resource",
      notification: 4,
    },
    {
      logo: <FaCreditCard />,
      name: "Finance",
      notification: 5,
    },
  ];

  return (
    <SideBarMenu>
      <Header>
        <img src="/schLogo.png" alt="school logo" />
        <span >Edmate</span>
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

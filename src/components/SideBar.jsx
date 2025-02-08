import logo from "../images/schLogo.png";
import { FaChevronRight, FaThLarge, FaUserCircle } from "react-icons/fa";
import {
  SideBarMenu,
  Header,
  Profile,
  SideBarNav,
} from "./styles/sideBar.styled";

function SideBar() {
  const navContents = [
    {
      logo: <FaThLarge />,
      name: "DashBoard",
      notification: 3,
    },
    {
      logo: <FaThLarge />,
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
      logo: <FaThLarge />,
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
      {/* <Dashboard>
      </Dashboard> */}
      <SideBarNav>
        {navContents.map((navContent, index) => (
          <li key={index}>
            <div className="dashboard">
              {navContent.logo}
              <p>{navContent.name}</p>
            </div>
            <div className="dashboard">
              <span>{navContent.notification}</span>
              <FaChevronRight />
            </div>
          </li>
        ))}

        {/* <li>Students</li>
        <li>Academics</li>
        <li>Calendar</li>
        <li>SMS</li>
        <li>HR</li>
        <li>Finance</li> */}
      </SideBarNav>
      <Profile>
        <span></span>
        <p>Joe Biden</p>
        <div>
          <FaUserCircle />
          SignUp Now
        </div>
        {/* <Link>
          </Link> */}
      </Profile>
    </SideBarMenu>
  );
}

export default SideBar;

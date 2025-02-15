import {
  FaArrowLeft,
  FaArrowRight,
  FaChevronDown,
  FaEdit,
  FaPlus,
  FaRegBell,
  FaSearch,
  FaSlidersH,
  FaSlideshare,
  FaTrash,
} from "react-icons/fa";
import {
  HeaderContainer,
  HomeNav,
  InputStyle,
  StatusIndicator,
  StudentsData,
  StudentsFooter,
  StudentsHeader,
  StudentsTable,
  StudentsTableHead,
  UserPix,
} from "./components/styles/home.styled";
import { useState } from "react";

function Students() {
  const [isActive, setisActive] = useState(false);

  return (
    <>
      <HomeNav>
        <StudentsHeader>
          <h1>Student List👋</h1>
          <p>Let's Learn something today.</p>
        </StudentsHeader>
        <div className="searchArea">
          <InputStyle>
            <input type="text" placeholder="Search (Ctrl+/)"/>
            <FaSearch className="searchIcon" />
          </InputStyle>
          <div className="notification-container">
            <FaRegBell className="notification-bell" />
            <span></span>
          </div>
          <UserPix>
            <div className="image-container">
              <img src="/user.jpg" alt="user image" />
              <StatusIndicator isActive={isActive} />
            </div>
            <div className="userDetails">
              <h1>User name</h1>
              <p>Student</p>
            </div>
            <FaChevronDown className="dropdown" />
          </UserPix>
        </div>
      </HomeNav>
      <HeaderContainer>
        <h1>All Students</h1>
        <div className="header-content">
          <div className="searchUser">
            <input type="text" placeholder="Search..." />
            <FaSearch className="searchIcon" />
          </div>
          <FaSlidersH className="header-content-icon" />
          <FaSlideshare className="header-content-icon" />
          <FaPlus className="header-content-icon" />
        </div>
      </HeaderContainer>
      <StudentsTable>
        <StudentsTableHead>
          <tr>
            <th>Info</th>
            <th>StudentId</th>
            <th>Address</th>
            <th>Grade</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </StudentsTableHead>
        <StudentsData>
          <tr>
            <td className="userDetails">
              <img src="/user.jpg" alt="user image" />
              <div>
                <h1>Mike Tysoon</h1>
                <p>SS2B</p>
              </div>
            </td>
            <td>0987654321</td>
            <td>123 Main St, Anytown, USA</td>
            <td>A</td>
            <td>Male</td>
            <td>+2348003328123</td>
            <td>mikeTysoon@gmail.com</td>
            <td className="actions">
              <FaEdit className="icon" bg="red" />
              <FaTrash className="icon" bg="green" />
            </td>
          </tr>
          <tr>
            <td className="userDetails">
              <img src="/user.jpg" alt="user image" />
              <div>
                <h1>Sonya Adams</h1>
                <p>SS3A</p>
              </div>
            </td>
            <td>1230999321</td>
            <td>405 Same St, Hertown, USA</td>
            <td>C</td>
            <td>Female</td>
            <td>+2348134343423</td>
            <td>sonyaadams@gmail.com</td>
            <td className="actions">
              <FaEdit className="icon" bg="red" />
              <FaTrash className="icon" bg="green" />
            </td>
          </tr>
          <tr>
            <td className="userDetails">
              <img src="/user.jpg" alt="user image" />
              <div>
                <h1>Sonya Adams</h1>
                <p>SS3A</p>
              </div>
            </td>
            <td>1230999321</td>
            <td>405 Same St, Hertown, USA</td>
            <td>C</td>
            <td>Female</td>
            <td>+2348134343423</td>
            <td>sonyaadams@gmail.com</td>
            <td className="actions">
              <FaEdit className="icon" bg="red" />
              <FaTrash className="icon" bg="green" />
            </td>
          </tr>
          <tr>
            <td className="userDetails">
              <img src="/user.jpg" alt="user image" />
              <div>
                <h1>Sonya Adams</h1>
                <p>SS3A</p>
              </div>
            </td>
            <td>1230999321</td>
            <td>405 Same St, Hertown, USA</td>
            <td>C</td>
            <td>Female</td>
            <td>+2348134343423</td>
            <td>sonyaadams@gmail.com</td>
            <td className="actions">
              <FaEdit className="icon" bg="red" />
              <FaTrash className="icon" bg="green" />
            </td>
          </tr>
          <tr>
            <td className="userDetails">
              <img src="/user.jpg" alt="user image" />
              <div>
                <h1>Sonya Adams</h1>
                <p>SS3A</p>
              </div>
            </td>
            <td>1230999321</td>
            <td>405 Same St, Hertown, USA</td>
            <td>C</td>
            <td>Female</td>
            <td>+2348134343423</td>
            <td>sonyaadams@gmail.com</td>
            <td className="actions">
              <FaEdit className="icon" bg="red" />
              <FaTrash className="icon" bg="green" />
            </td>
          </tr>
          <tr>
            <td className="userDetails">
              <img src="/user.jpg" alt="user image" />
              <div>
                <h1>Sonya Adams</h1>
                <p>SS3A</p>
              </div>
            </td>
            <td>1230999321</td>
            <td>405 Same St, Hertown, USA</td>
            <td>C</td>
            <td>Female</td>
            <td>+2348134343423</td>
            <td>sonyaadams@gmail.com</td>
            <td className="actions">
              <FaEdit className="icon" bg="red" />
              <FaTrash className="icon" bg="green" />
            </td>
          </tr>
          <tr>
            <td className="userDetails">
              <img src="/user.jpg" alt="user image" />
              <div>
                <h1>Sonya Adams</h1>
                <p>SS3A</p>
              </div>
            </td>
            <td>1230999321</td>
            <td>405 Same St, Hertown, USA</td>
            <td>C</td>
            <td>Female</td>
            <td>+2348134343423</td>
            <td>sonyaadams@gmail.com</td>
            <td className="actions">
              <FaEdit className="icon" bg="red" />
              <FaTrash className="icon" bg="green" />
            </td>
          </tr>
          <tr>
            <td className="userDetails">
              <img src="/user.jpg" alt="user image" />
              <div>
                <h1>Sonya Adams</h1>
                <p>SS3A</p>
              </div>
            </td>
            <td>1230999321</td>
            <td>405 Same St, Hertown, USA</td>
            <td>C</td>
            <td>Female</td>
            <td>+2348134343423</td>
            <td>sonyaadams@gmail.com</td>
            <td className="actions">
              <FaEdit className="icon" bg="red" />
              <FaTrash className="icon" bg="green" />
            </td>
          </tr>
          <tr>
            <td className="userDetails">
              <img src="/user.jpg" alt="user image" />
              <div>
                <h1>Sonya Adams</h1>
                <p>SS3A</p>
              </div>
            </td>
            <td>1230999321</td>
            <td>405 Same St, Hertown, USA</td>
            <td>C</td>
            <td>Female</td>
            <td>+2348134343423</td>
            <td>sonyaadams@gmail.com</td>
            <td className="actions">
              <FaEdit className="icon" bg="red" />
              <FaTrash className="icon" bg="green" />
            </td>
          </tr>
          <tr>
            <td className="userDetails">
              <img src="/user.jpg" alt="user image" />
              <div>
                <h1>Sonya Adams</h1>
                <p>SS3A</p>
              </div>
            </td>
            <td>1230999321</td>
            <td>405 Same St, Hertown, USA</td>
            <td>C</td>
            <td>Female</td>
            <td>+2348134343423</td>
            <td>sonyaadams@gmail.com</td>
            <td className="actions">
              <FaEdit className="icon" bg="red" />
              <FaTrash className="icon" bg="green" />
            </td>
          </tr>
        </StudentsData>
      </StudentsTable>
      <StudentsFooter>
        <div className="prev-table">
          <FaArrowLeft />
          <p>Previous</p>
        </div>
        <div className="num-table">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>...</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
        </div>
        <div className="next-table">
          <p>Next</p>
          <FaArrowRight />
        </div>
      </StudentsFooter>
    </>
  );
}

export default Students;

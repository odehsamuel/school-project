import React from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import {
  HomeNav,
  InputStyle,
  StudentsHeader,
  UserPix,
} from "./components/styles/home.styled";

function Students() {
  return (
    <HomeNav>
      <StudentsHeader>
        <h1>Student List 👋</h1>
        <p>Let's Learn something today.</p>
      </StudentsHeader>
      <div className="searchArea">
        <InputStyle>
          <input type="text" />
          <FaSearch className="searchIcon" />
        </InputStyle>
        <UserPix>
          <img src="/user.jpg" alt="user image" />
          <div className="userDetails">
            <h1>User name</h1>
            <p>Student</p>
          </div>
          <FaChevronDown className="dropdown"/>
        </UserPix>
      </div>
    </HomeNav>
  );
}

export default Students;

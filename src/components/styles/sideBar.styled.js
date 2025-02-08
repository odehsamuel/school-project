import styled from "styled-components";

export const SideBarMenu = styled.div`
  position: relative;
  height: 100vh;
  padding: 4px auto;
  width: 100%;
  padding-bottom: 0;
  background: #ffffff;
`;

export const Header = styled.header`
  position: relative;
  margin: 0;
  height: 2rem;
  display: flex;
  justify-content: center;

  /* width: 50%;
  /* top: 50%; */
  left: 50%;
  transform: translate(-50%, -50%); */

  span {
    color: #303131;
    align-self: center;
    padding: auto 0;
    font-weight: 600;
  }
`;

// export const Dashboard = styled.div`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;

//   & .dashboard {
//     display: flex;
//     /* align-self: center;
//     justify-self: center; */
//   }

//   span {
//     border-radius: 100%;
//     padding: 2px 8px;
//     background-color: #31c7c0;
//     color: #b3e2e0;
//   }
// `;

export const SideBarNav = styled.ul`
  padding: 0;
  margin: 0 auto;
  li {
    display: flex;
    list-style: none;
    padding: 1rem 1rem;
    margin: 0 1.5rem;
    border-radius: 8px;
    color: #9e9e9e;

    &:hover {
      background-color: #eaf7f7;
      color: #72cbc6;
    }
  }
`;

export const Profile = styled.div`
  position: fixed;
  bottom: 0;
  margin: 0 12px;
  padding: 1rem 2rem;
  background-color: #eaf7f7;
  border-radius: 10px 10px 0 0;
  border: 1px solid transparent;
`;

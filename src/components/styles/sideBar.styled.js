import styled from "styled-components";

export const SideBarMenu = styled.div`
  height: 100vh;
  padding: 4px auto;
  width: 100%;
  padding-bottom: 0;
  background: #ffffff;
`;

export const Header = styled.header`
  position: fixed;
  margin: 0;
  height: 2rem;
  display: flex;
  justify-content: center;
  top: 1rem;
  left: 8%;

  span {
    color: #303131;
    align-self: center;
    padding: auto 0;
    font-weight: 600;
  }
`;

export const SideBarNav = styled.ul`
  padding: 0;
  margin: 4rem auto;
  li {
    display: flex;
    list-style: none;
    padding: 0.25rem 0.75rem;
    /* margin: 0 1.25rem; */
    border-radius: 10px;
    color: #9e9e9e;
    justify-content: space-between;

    & .dashboard {
      display: flex;
      align-items: center;

      & .notify {
        background-color: #72cbc6;
        width: 8px;
        height: 8px;
        font-size: smaller;
        padding: 0.4rem;
        border-radius: 100%;
      }
    }

    &:hover {
      background-color: #eaf7f7;
      color: #72cbc6;
    }
  }
`;

export const Profile = styled.div`
  width: 10rem;
  position: fixed;
  bottom: 0;
  margin: 0 12px;
  padding: 1rem 2rem;
  background-color: #eaf7f7;
  border-radius: 10px 10px 0 0;
`;

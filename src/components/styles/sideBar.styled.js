import styled from "styled-components";

export const SideBarMenu = styled.div`
  height: 100vh;
  padding: 4px auto;
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
  margin: 4rem 1.25rem;
  li {
    display: flex;
    list-style: none;
    padding: 0.25rem 0.75rem;
    border-radius: 10px;
    color: #9e9e9e;

    justify-content: space-between;

    & .dashboard {
      display: flex;
      align-items: center;

      & .notify {
        background-color: #9e9e9e;
        color: #eaf7f7;
        width: 1.25rem;
        height: 1.25rem;
        font-size: 0.75rem;
        padding: 2px;
        border-radius: 100%;
        text-align: center;
      }
    }

    &:hover {
      background-color: #eaf7f7;
      color: #72cbc6;

      & .notify {
        background-color: #2eb2ab;
        color: #b3e2e0;
      }
    }
  }
`;

export const Profile = styled.div`
  width: 14rem;
  position: fixed;
  bottom: 0;
  left: 1rem;
  padding: 0.65rem 1rem;
  background-color: #eaf7f7;
  border-radius: 10px 10px 0 0;
  text-align: center;
  color: #303d3c;
`;

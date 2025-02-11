import styled from "styled-components";

export const HomeStyled = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 251px 1fr;
  column-gap: 1rem;

  font-family: "Quicksand", serif;
  font-optical-sizing: auto;
  font-style: normal;
`;

export const MainHome = styled.div`
  background-color: #ebf7f7;
  border-radius: 8px 0 0 8px;
  padding: 1rem 2rem;
`;

export const HomeNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .searchArea {
    display: flex;
    align-items: center;

    & .notification-container {
      position: relative;
      & .notification-bell {
        padding: 0.45rem;
        border: 1px solid #c3e7e5;
        border-radius: 100%;
        color: #72cbc6;
        margin: 0 1rem;
      }
      span {
        position: absolute;
        width: 6px;
        height: 6px;
        background-color: red;
        border-radius: 100%;
        top: 0.45rem;
        left: 2.05rem;
      }
    }
  }
`;

export const StudentsHeader = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: #303d3c;
    font-size: 1.65rem;
    margin: 0;
  }
  p {
    color: #949898;
    margin: 0;
    font-size: 1rem;
  }
`;

export const UserPix = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #c9eae9;
  padding: 0.35rem 0.25rem;
  border-radius: 10rem;
  img {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 1rem;
    border-radius: 100%;
    object-fit: cover;
  }

  & .userDetails {
    display: flex;
    flex-direction: column;
    text-align: center;
    h1 {
      font-size: small;
      font-weight: bold;
      margin: 0;
    }
    p {
      color: #949898;
      font-size: smaller;
      margin: 0;
    }
  }
  & .dropdown {
    margin-left: 0.5rem;
    color: #303d3c;
    padding: 0.45rem;

    &:hover {
      border-radius: 100%;
      background-color: #c3e7e5;
    }
  }
`;

export const InputStyle = styled.div`
  position: relative;
  input {
    border-radius: 18px;
    padding: 0.35rem 1rem;
    color: #303d3c;
    font-size: 1rem;
  }
  & .searchIcon {
    color: #949898;
    position: absolute;
    right: 1.5rem;
    bottom: 20%;
  }
`;

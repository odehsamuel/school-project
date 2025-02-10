import styled from "styled-components";

export const HomeStyled = styled.div`
  /* padding: 0;
  margin: 0; */
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 251px 1fr;
  column-gap: 1rem;

  font-family: "Quicksand", serif;
  font-optical-sizing: auto;
  /* font-weight: 600; */
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
  border: 1px solid #949898;
  padding: 0.35rem 1rem;
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
    margin-left: 0.25rem;
    color: #303d3c;
  }
`;

export const InputStyle = styled.div`
  position: relative;
  input {
    border-radius: 18px;
    padding: 0.35rem 1rem;
    margin-right: 1rem;
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

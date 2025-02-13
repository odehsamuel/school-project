import styled from "styled-components";

export const HomeStyled = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 16rem 1fr;

  font-family: "Quicksand", serif;
  font-optical-sizing: auto;
  font-style: normal;
`;

export const MainHome = styled.div`
  background-color: ${({ theme }) => theme.colors.body};
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
        padding: 4px;
        width: 2rem;
        height: 2rem;
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
  padding: 0.2rem 0.25rem;
  border-radius: 10rem;

  & .image-container {
    position: relative;
    height: 2.5rem;

    img {
      width: 2.5rem;
      height: 2.5rem;
      margin-right: 1rem;
      border-radius: 100%;
      object-fit: cover;
    }
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
    margin-left: 0.35rem;
    color: #303d3c;
    padding: 6px;
    width: 1.65rem;
    height: 1.65rem;

    &:hover {
      border-radius: 100%;
      background-color: #c3e7e5;
    }
  }
`;

export const StatusIndicator = styled.span`
  position: absolute;
  width: 11px;
  height: 11px;
  background-color: ${({ isActive }) => (isActive ? "#00ed24" : "#949898")};
  border-radius: 100%;
  border: 2px solid #c9eae9;
  bottom: -2px;
  left: 1.5rem;
`;

export const InputStyle = styled.div`
  position: relative;
  input {
    border-radius: 18px;
    border: 2px solid #c9eae9;
    outline: none;
    padding: 0.35rem 1rem;
    color: #303d3c;
    font-size: 1rem;
    padding-left: 2rem;
    background-color: inherit;

    &::placeholder {
      font-size: small;
    }
  }
  & .searchIcon {
    color: #72cbc6;
    position: absolute;
    left: 0.5rem;
    bottom: 23%;
  }
`;

export const HeaderContainer = styled.div`
  margin: 2rem auto 1rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: #303d3c;
    margin: 0;
    font-size: 1rem;
  }

  & .searchUser {
    position: relative;
    input {
      border-radius: 12px;
      border: 2px solid #d1d5d9;
      outline: none;
      padding: 0.4rem 2rem;
      color: #303d3c;
      font-size: 0.85rem;
    }
    & .searchIcon {
      position: absolute;
      top: 23%;
      left: 0.75rem;
      color: #949898;
      font-size: smaller;

      &::placeholder {
        color: #d1d5d9;
      }
    }
  }

  & .header-content {
    display: flex;
    align-items: center;
    & .header-content-icon {
      margin: auto 0.5rem;
      background-color: #e0cd22;
      color: #303d3c;
      padding: 8px;
      width: 2rem;
      height: 2rem;
      border-radius: 100%;

      &:hover {
        background-color:#fcea44;
      }
    }
  }
`;

export const StudentsTable = styled.table`
  border-spacing: 0;
  height: 50rem;
`;

export const StudentsTableHead = styled.thead`
  margin-bottom: 1rem;
  tr {
    background-color: ${({ theme }) => theme.colors.sidebar};
    color: #303d3c;
    border-radius: 4px;
    color: #9fa6ae;

    th {
      padding: 0;
      border-spacing: 4rem;
    }
  }
`;

export const StudentsData = styled.tbody`
  border-radius: 12px;
  tr {
    background-color: ${({ theme }) => theme.colors.sidebar};
    color: #535757;
    text-align: center;
    border-radius: 8px;

    td {
      padding: 8px;
    }

    & .userDetails {
      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        width: 2.5rem;
        height: 2.5rem;
        margin-right: 0.25rem;
        border-radius: 100%;
        object-fit: cover;
      }
      div {
        h1 {
          font-size: 12px;
          font-weight: bold;
          margin-bottom: 4px;
        }
        p {
          font-size: 8px;
          font-weight: bolder;
          margin: 0;
        }
      }
    }
    & .actions {
      & .icon {
        background-color: ${({ bg }) => bg};
        border-radius: 100%;
        padding: 4px;
        width: 1.45rem;
        height: 1.45rem;
        opacity: 50%;

        &:hover {
          background-color: red;
        }
      }
    }
  }
`;

export const StudentsFooter = styled.div`
  display: flex;
  padding: 1rem 1.5rem;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10rem;
  background-color: ${({ theme }) => theme.colors.sidebar};

  & .prev-table {
    display: flex;
    align-items: center;
    border: 1px solid #9e9e9e;
    padding: 0.5rem 0.85rem;
    border-radius: 6px;
    color: #424a49;

    &:hover {
      background-color: rgb(239, 239, 239);
    }

    p {
      margin: 0;
      margin-left: 0.5rem;
      font-weight: bold;
    }
  }

  & .num-table {
    display: flex;
    color: #424a49;
    align-items: center;

    p {
      margin: auto 10px;
      padding: 2px 6px;
      border: 1px solid transparent;

      &:hover {
        background-color: #eaf7f7;
        color: #2eb2ab;
        border: 1px solid #2eb2ab;
        border-radius: 6px;
      }
    }
  }

  & .next-table {
    display: flex;
    align-items: center;
    border: 1px solid #9e9e9e;
    padding: 0.45rem 0.75rem;
    color: #424a49;
    border-radius: 6px;

    &:hover {
      background-color: rgb(239, 239, 239);
    }

    p {
      margin: 0;
      margin-right: 0.5rem;
    }
  }
`;

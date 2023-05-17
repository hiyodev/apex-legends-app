import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const NavBarStyle = styled.div`
  position: fixed;
  top: 10px;
`;

const LogoStyle = styled.div``;

const SearchBarStyle = styled.input`
  border: none;
`;

const ButtonRowStyle = styled.div``;

function NavBar(props) {
  const { setSearchString, setSortByAmmo, sortByAmmo } = props;
  return (
    <NavBarStyle>
      <LogoStyle>LOGO</LogoStyle>
      <SearchBarStyle
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchString(e.target.value.toLowerCase())}
      ></SearchBarStyle>
      <ButtonRowStyle>
        <button
          onClick={() =>
            setSortByAmmo((currAmmo) => ({
              ...currAmmo,
              light: !currAmmo.light,
            }))
          }
        >
          Light{!sortByAmmo.light && "*"}
        </button>

        <button
          onClick={() =>
            setSortByAmmo((currAmmo) => ({
              ...currAmmo,
              heavy: !currAmmo.heavy,
            }))
          }
        >
          Heavy{!sortByAmmo.heavy && "*"}
        </button>

        <button
          onClick={() =>
            setSortByAmmo((currAmmo) => ({
              ...currAmmo,
              energy: !currAmmo.energy,
            }))
          }
        >
          Energy{!sortByAmmo.energy && "*"}
        </button>

        <button
          onClick={() =>
            setSortByAmmo((currAmmo) => ({
              ...currAmmo,
              sniper: !currAmmo.sniper,
            }))
          }
        >
          Sniper{!sortByAmmo.sniper && "*"}
        </button>
      </ButtonRowStyle>
    </NavBarStyle>
  );
}

export default NavBar;

import React from "react";
import styled from "styled-components";
import ApexLogo from "../images/apex_logo.png";

const NavBarStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 10px;
`;

const LogoStyle = styled.img`
  max-height: 5rem;
  object-fit: contain;
`;

const SearchBarStyle = styled.input``;

const ButtonRowStyle = styled.div``;

function NavBar(props) {
  const { setSearchString, setSortByAmmo, sortByAmmo } = props;
  return (
    <NavBarStyle>
      <LogoStyle src={ApexLogo}></LogoStyle>
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

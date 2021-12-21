import React from "react";
import styled from "styled-components";
import { Menu, MenuList, MenuButton, MenuItem } from "@reach/menu-button";
import "@reach/menu-button/styles.css";

const DropdownBtn = styled.button`
  width: 250px;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 24px;
  padding-right: 18px;
  background: #ffffff;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
  display: inline-block;
  margin: 0;
  font-size: 14px;
  line-height: 20px;

  span {
    padding-left: 16px;
  }
`;

export default function Dropdown({ filterRegion, setFilterRegion }) {
  console.log(filterRegion);
  return (
    <Menu>
      <MenuButton as={DropdownBtn}>
        Filter by Region <span aria-hidden>▾</span>
      </MenuButton>
      <MenuList className="slide-down">
        <MenuItem onSelect={() => setFilterRegion("africa")}>Africa</MenuItem>
        <MenuItem onSelect={() => setFilterRegion("americas")}>
          Americas
        </MenuItem>
        <MenuItem onSelect={() => setFilterRegion("asia")}>Asia </MenuItem>
        <MenuItem onSelect={() => setFilterRegion("europe")}>Europe </MenuItem>
        <MenuItem onSelect={() => setFilterRegion("oceania")}>
          Oceania{" "}
        </MenuItem>
        <MenuItem onSelect={() => setFilterRegion("all")}>All </MenuItem>
      </MenuList>
    </Menu>
  );
}

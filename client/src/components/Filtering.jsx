import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { Menu, MenuList, MenuButton, MenuItem } from "@reach/menu-button";
import "@reach/menu-button/styles.css";

const FilteringContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
`;

const SearchContainer = styled.div`
  width: 100%;
  position: relative;
`;

const SearchBar = styled.input`
  border: none;
  padding: 18px;
  padding-left: 74px;
  width: 480px;
  background: #ffffff;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
`;

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

function Dropdown() {
  return (
    <Menu>
      <MenuButton as={DropdownBtn}>
        Filter by Region <span aria-hidden>▾</span>
      </MenuButton>
      <MenuList className="slide-down">
        <MenuItem>Africa</MenuItem>
        <MenuItem>America</MenuItem>
        <MenuItem>Asia </MenuItem>
        <MenuItem>Europe </MenuItem>
        <MenuItem>Oceania </MenuItem>
      </MenuList>
    </Menu>
  );
}

const Filtering = () => {
  return (
    <FilteringContainer>
      <SearchContainer>
        <AiOutlineSearch
          style={{
            position: "absolute",
            left: "32px",
            top: "19px",
            fontSize: "24px",
            color: "#848484",
          }}
        />
        <SearchBar />
      </SearchContainer>
      <Dropdown />
    </FilteringContainer>
  );
};

export default Filtering;

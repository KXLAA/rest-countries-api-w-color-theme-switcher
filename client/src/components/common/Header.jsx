import styled from "styled-components";
import { BsMoon } from "react-icons/bs";

const Headerbar = styled.header`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
  padding: 24px;
  margin-bottom: 48px;
  background: #ffffff;

  h1 {
    font-weight: 800;
    font-size: 24px;
    line-height: 33px;
  }
`;
const HeaderContent = styled.div`
  margin: 0 auto;
  width: 1200px;
  padding: 0px 40px 0px 40px;
  display: flex;
  justify-content: space-between;
`;

const ModeSwitchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  p {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
  }
`;

const Header = () => {
  return (
    <Headerbar>
      <HeaderContent>
        <h1>Where in the world?</h1>
        <ModeSwitchContainer>
          <p>Dark Mode</p>
          <BsMoon />
        </ModeSwitchContainer>
      </HeaderContent>
    </Headerbar>
  );
};

export default Header;

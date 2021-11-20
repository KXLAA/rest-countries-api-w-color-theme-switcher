import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
  border-radius: 5px;
`;

const Image = styled.img`
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const Text = styled.div`
  width: 100%;
  background-color: #ffffff;
  background: #ffffff;
  padding: 24px;
  padding-bottom: 32px;
  padding-top: 16px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  h2 {
    font-weight: 800;
    font-size: 18px;
    line-height: 26px;
    padding-bottom: 16px;
  }

  p {
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    padding-bottom: 8px;

    span {
      font-weight: 600;
    }
  }
`;

const CountryCard = () => {
  return (
    <CardContainer>
      <Image src="/1280px-Flag_of_Germany.svg" />
      <Text>
        <h2>Germany</h2>
        <p>
          <span>Population:</span> 81,770,900
        </p>
        <p>
          <span>Region:</span>Europe
        </p>

        <p>
          <span>Capital:</span> Berlin
        </p>
      </Text>
    </CardContainer>
  );
};

export default CountryCard;

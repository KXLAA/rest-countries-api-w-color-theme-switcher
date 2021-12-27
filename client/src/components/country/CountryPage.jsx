import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../common/Layout";
import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import Borders from "./Borders";

const Back = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.293139);
  border-radius: 6px;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: #111517;
  width: 136px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 80px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  gap: 120px;
  align-items: center;
`;

const Flag = styled.img`
  width: 50%;
  border-radius: 5px;
`;

const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 24px;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Detail = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 4px;
  }

  span {
    font-weight: 600;
  }
`;
const BorderContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  span {
    font-weight: 600;
  }
`;
const CountryPage = ({ country }) => {
  let navigate = useNavigate();
  const {
    name,
    population,
    nativeName,
    region,
    subregion,
    capital,
    flags,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = country;

  return (
    <Layout>
      <Back onClick={() => navigate("/")}>
        <>
          <BiArrowBack />
          Back
        </>
      </Back>
      <Container>
        <Flag src={flags.svg} alt={`${name} flag`} />
        <Content>
          <h1>{name}</h1>
          <Details>
            <Detail>
              <li>
                <span>Native Name:</span> {nativeName}
              </li>
              <li>
                <span>Population:</span> {population?.toLocaleString()}
              </li>
              <li>
                <span>Region:</span> {region}
              </li>
              <li>
                <span>Sub Region:</span> {subregion}
              </li>

              <li>
                <span>Capital:</span> {capital}
              </li>
            </Detail>

            <Detail>
              <Detail>
                <li>
                  <span>Top Level Domain: </span> {topLevelDomain}
                </li>
                <li>
                  <span>Currencies:</span>{" "}
                  {currencies?.map(({ name }) => name).join(",")}
                </li>

                <li>
                  <span>Languages:</span>{" "}
                  {languages?.map(({ name }) => name).join(", ")}
                </li>
              </Detail>
            </Detail>
          </Details>

          <BorderContainer>
            <span>Border Countries:</span>
            {borders &&
              borders
                ?.slice(0, 3)
                .map((border) => <Borders key={border} border={border} />)}

            {!borders && <p>No Border Countries</p>}
          </BorderContainer>
        </Content>
      </Container>
    </Layout>
  );
};

export default CountryPage;

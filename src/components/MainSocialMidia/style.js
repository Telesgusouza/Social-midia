import styled, { css } from "styled-components";
import themeData from "../../Data/theme.json";

export const Container = styled.main`
  position: relative;

  margin-top: 35px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;

  @media (max-width: 685px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;

export const infoSocial = styled.div`
  background-color: ${(props) => props.bg};

  padding: 20px 25px 16px 25px;
  text-align: center;
  border-end-start-radius: 5px;
  border-end-end-radius: 5px;

  transition: all 0.2s ease-in-out;
  position: relative;
  cursor: pointer;

  span {
    width: fit-content;
    margin: 0 auto;
    margin-bottom: 15px;

    color: hsl(230, 22%, 74%);
    font-size: 0.7em;
    font-weight: 700;

    display: flex;
    align-items: center;
  }

  img {
    margin-right: 7px;
  }

  p {
    color: hsl(230, 22%, 74%);
    font-size: .67em;
  }

  h2 {
    color: ${props=>props.color};
    font-size: 2.0em;
  }

  &:hover {
    background-color: ${props=>props.bgHover};
  }
`;

export const VerticalLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;

  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  background-image: linear-gradient(to right, ${(props) => props.bg});
`;

export const TodayFollowers = styled.div`
  height: 20px;
  width: fit-content;
  margin: 0 auto;
  margin-top: 15px;

  display: flex;
  align-items: center;

  span {
    margin-bottom: 0px;
    color: ${props=>props.colorSpan?'hsl(163, 72%, 41%)':'hsl(356, 69%, 56%)'} ;
  }

  img {
    height: fit-content;
  }
`;

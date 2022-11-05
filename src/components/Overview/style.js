import styled from "styled-components";

export const Container = styled.section`
  position: relative;

  padding-bottom: 20px;

  margin-top: 40px;
`;

export const H1 = styled.h1`
  color: ${(props) => props.color};
  margin-bottom: 18px;
`;

export const ContainerOverview = styled.table`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;

  @media (max-width: 685px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 425px) {
    grid-template-columns: 1fr ;
  }
`;

export const OptionView = styled.tr`
  padding: 15px;
  background-color: ${(props) => props.bg};

  display: grid;
  grid-gap: 15px;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${props=>props.bgHover};
  }

  div {
    margin: 0;
    padding: 0;
    position: initial;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  span {
    color: ${(props) => props.color};
    font-size: 0.72em;
    font-weight: 700;
  }

  img {
    width: 17px;
    height: fit-content;
  }

  h3 {
    color: ${(props) => props.colorCount};
    font-size: 1.75em;
  }

 
`;

export const porcentView = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 10px;
    height: fit-content;
  }

  span {
    color: ${(props) =>
      props.colorSpan ? "hsl(163, 72%, 41%)" : "hsl(356, 69%, 56%)"};
    font-size: 0.8em;
  }
`;

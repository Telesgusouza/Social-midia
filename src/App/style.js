import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  position: relative;
`;

export const ContainerContent = styled.div`
  z-index: 20;
  color: white;
  position: relative;
`;

export const bgUp = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 30%;
  background-color: ${(props) => props.bg};

  transition: all 0.2s ease-in-out;
`;

export const bgDown = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 71%;
  background-color: ${(props) => props.bg};

  transition: all 0.2s ease-in-out;
`;

// HEADER

export const CotainerHeader = styled.header`
  color: ${(props) => props.theme};

  padding-top: 25px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 460px) {
    flex-direction: column;
  }
`;

export const titleHeader = styled.div`
h1 {
    font-size: 1.5em;
  }

  span {
    font-size: 0.8em;
    font-weight: 700;

    color: ${(props) => props.colorSpan};
  }

  @media (max-width: 460px) {
    padding: 12px 0 15px 0;
  }
`;

export const ContainerInput = styled.div`
  div {
    display: flex;
    align-items: center;
    font-size: 0.8em;

    color: hsl(230, 22%, 74%);

    font-weight: 700;
  }
  @media (max-width: 460px) {
    padding: 16px 0;
    border-top: 1px solid hsl(230, 22%, 74%);
    div {
      justify-content: space-between;
    }
  }
`;

export const InputTheme = styled.div`
  background-image: linear-gradient(to right, ${(props) => props.toggle});

  margin-left: 7px;

  width: 40px;
  padding: 5px;
  border-radius: 10px;

  transition: all 0.2s ease-in-out;

  position: relative;

  cursor: pointer;

  div {
    background-color: ${(props) => props.color};

    width: 10px;
    height: 10px;
    border-radius: 50%;

    transition: all 0.2s ease-in-out;

    position: relative;
    left: ${(props) => props.onOff}%;
  }
`;

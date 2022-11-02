import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  position: relative;
`;

export const bgUp = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 30%;
  background-color: ${props=>props.bg};
`;

export const bgDown = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 71%;
  background-color: ${props=>props.bg};
`;

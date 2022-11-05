import { useState } from "react";

import * as Styled from "./style";
import theme from "../Data/theme.json";
import MainSocialMidia from "../components/MainSocialMidia";
import Overview from "../components/Overview";

function App() {
  const [themePage, setThemePage] = useState(false);

  function handleInputTheme() {
    setThemePage((p) => !p);
  }


  return (
    <Styled.Container>
      <Styled.bgUp
        bg={themePage ? theme.light.backgroundUp : theme.dark.backgroundUp}
      />
      <Styled.bgDown
        bg={themePage ? theme.light.backgroundDown : theme.dark.backgroundDown}
      />

      <Styled.ContainerContent className="center">
        <Styled.CotainerHeader
          theme={themePage ? theme.light.text2 : theme.dark.text2}
        >
          <Styled.titleHeader
            colorSpan={themePage ? theme.light.text1 : theme.dark.text1}
          >
            <h1>Painel de Rede Social</h1>
            <span>total de seguidores: 23,004</span>
          </Styled.titleHeader>
          <Styled.ContainerInput>
            <div>
              {themePage ? "Light" : "Dark"} Mode
              <Styled.InputTheme
                onClick={handleInputTheme}
                color={themePage ? "white" : "black"}
                toggle={themePage ? theme.light.toggle : theme.dark.toggle}
                onOff={themePage ? 0 : 70}
              >
                <div></div>
              </Styled.InputTheme>
            </div>
          </Styled.ContainerInput>
        </Styled.CotainerHeader>
      </Styled.ContainerContent>
      
      <MainSocialMidia theme={themePage} />
      <Overview theme={themePage} />
    </Styled.Container>
  );
}

export default App;

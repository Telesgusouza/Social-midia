import { useState } from "react";

import * as Styled from "./style";
import theme from "../Data/theme.json";
import Header from "../components/Header";

function App() {
  const [themePage, setThemePage] = useState(false);

  console.log(theme.light.backgroundDown);

  return (
    <Styled.Container>
      <Styled.bgUp
        bg={themePage ? theme.light.backgroundUp : theme.dark.backgroundUp}
      />
      <Styled.bgDown
        bg={themePage ? theme.light.backgroundDown : theme.dark.backgroundDown}
      />

      <Header />
    </Styled.Container>
  );
}

export default App;

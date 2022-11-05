import * as Styled from "./style";

import themeData from "../../Data/theme.json";

import facebook from "../../assets/images/icon-facebook.svg";
import instagram from "../../assets/images/icon-instagram.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import youtube from "../../assets/images/icon-youtube.svg";

import down from "../../assets/images/icon-down.svg";
import up from "../../assets/images/icon-up.svg";

export default function Overview({ theme }) {
  console.log(theme);
  console.log(themeData);

  return (
    <Styled.Container className="center">
      <Styled.H1 color={theme ? themeData.light.text2 : themeData.dark.text2}>
        visão geral - hoje
      </Styled.H1>

      <Styled.ContainerOverview>
        <Styled.OptionView
          bg={
            theme
              ? themeData.light.backgroundCard
              : themeData.dark.backgroundCard
          }
          color={theme ? themeData.light.text1 : themeData.dark.text1}
          colorCount={theme ? themeData.light.text2 : themeData.dark.text2}
          bgHover={theme ? "hsl(227, 47%, 91%)" : "hsl(228, 28%, 25%)"}
        >
          <div>
            <span>Page Views</span>
            <img src={facebook} alt="logo do facebook" />
          </div>
          <div>
            <h3>87</h3>
            <Styled.porcentView colorSpan>
              <img src={up} alt="seta para cima" />
              <span>3%</span>
            </Styled.porcentView>
          </div>
        </Styled.OptionView>

        <Styled.OptionView
          bg={
            theme
              ? themeData.light.backgroundCard
              : themeData.dark.backgroundCard
          }
          color={theme ? themeData.light.text1 : themeData.dark.text1}
          colorCount={theme ? themeData.light.text2 : themeData.dark.text2}
          bgHover={theme ? "hsl(227, 47%, 91%)" : "hsl(228, 28%, 25%)"}
        >
          <div>
            <span>Likes</span>
            <img src={facebook} alt="logo do facebook" />
          </div>
          <div>
            <h3>52</h3>
            <Styled.porcentView>
              <img src={down} alt="seta para cima" />
              <span>2%</span>
            </Styled.porcentView>
          </div>
        </Styled.OptionView>

        <Styled.OptionView
          bg={
            theme
              ? themeData.light.backgroundCard
              : themeData.dark.backgroundCard
          }
          color={theme ? themeData.light.text1 : themeData.dark.text1}
          colorCount={theme ? themeData.light.text2 : themeData.dark.text2}
          bgHover={theme ? "hsl(227, 47%, 91%)" : "hsl(228, 28%, 25%)"}
        >
          <div>
            <span>Likes</span>
            <img src={instagram} alt="logo do instagram" />
          </div>
          <div>
            <h3>5462</h3>
            <Styled.porcentView colorSpan>
              <img src={up} alt="seta para cima" />
              <span>2257%</span>
            </Styled.porcentView>
          </div>
        </Styled.OptionView>

        <Styled.OptionView
          bg={
            theme
              ? themeData.light.backgroundCard
              : themeData.dark.backgroundCard
          }
          color={theme ? themeData.light.text1 : themeData.dark.text1}
          colorCount={theme ? themeData.light.text2 : themeData.dark.text2}
          bgHover={theme ? "hsl(227, 47%, 91%)" : "hsl(228, 28%, 25%)"}
        >
          <div>
            <span>Profile Views</span>
            <img src={instagram} alt="logo do instagram" />
          </div>
          <div>
            <h3>52k</h3>
            <Styled.porcentView colorSpan>
              <img src={up} alt="seta para cima" />
              <span>1375%</span>
            </Styled.porcentView>
          </div>
        </Styled.OptionView>

        <Styled.OptionView
          bg={
            theme
              ? themeData.light.backgroundCard
              : themeData.dark.backgroundCard
          }
          color={theme ? themeData.light.text1 : themeData.dark.text1}
          colorCount={theme ? themeData.light.text2 : themeData.dark.text2}
          bgHover={theme ? "hsl(227, 47%, 91%)" : "hsl(228, 28%, 25%)"}
        >
          <div>
            <span>Retweets</span>
            <img src={twitter} alt="logo do twitter" />
          </div>
          <div>
            <h3>117</h3>
            <Styled.porcentView colorSpan>
              <img src={up} alt="seta para cima" />
              <span>303%</span>
            </Styled.porcentView>
          </div>
        </Styled.OptionView>

        <Styled.OptionView
          bg={
            theme
              ? themeData.light.backgroundCard
              : themeData.dark.backgroundCard
          }
          color={theme ? themeData.light.text1 : themeData.dark.text1}
          colorCount={theme ? themeData.light.text2 : themeData.dark.text2}
          bgHover={theme ? "hsl(227, 47%, 91%)" : "hsl(228, 28%, 25%)"}
        >
          <div>
            <span>Likes</span>
            <img src={twitter} alt="logo do twitter" />
          </div>
          <div>
            <h3>507</h3>
            <Styled.porcentView colorSpan>
              <img src={up} alt="seta para cima" />
              <span>553%</span>
            </Styled.porcentView>
          </div>
        </Styled.OptionView>

        <Styled.OptionView
          bg={
            theme
              ? themeData.light.backgroundCard
              : themeData.dark.backgroundCard
          }
          color={theme ? themeData.light.text1 : themeData.dark.text1}
          colorCount={theme ? themeData.light.text2 : themeData.dark.text2}
          bgHover={theme ? "hsl(227, 47%, 91%)" : "hsl(228, 28%, 25%)"}
        >
          <div>
            <span>Likes</span>
            <img src={youtube} alt="logo do youtube" />
          </div>
          <div>
            <h3>107</h3>
            <Styled.porcentView>
              <img src={down} alt="seta para baixo" />
              <span>19%</span>
            </Styled.porcentView>
          </div>
        </Styled.OptionView>

        <Styled.OptionView
          bg={
            theme
              ? themeData.light.backgroundCard
              : themeData.dark.backgroundCard
          }
          color={theme ? themeData.light.text1 : themeData.dark.text1}
          colorCount={theme ? themeData.light.text2 : themeData.dark.text2}
          bgHover={theme ? "hsl(227, 47%, 91%)" : "hsl(228, 28%, 25%)"}
        >
          <div>
            <span>Total Views</span>
            <img src={youtube} alt="logo do youtube" />
          </div>
          <div>
            <h3>1407</h3>
            <Styled.porcentView>
              <img src={down} alt="seta para baixo" />
              <span>12%</span>
            </Styled.porcentView>
          </div>
        </Styled.OptionView>
      </Styled.ContainerOverview>
    </Styled.Container>
  );
}

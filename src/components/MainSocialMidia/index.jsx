import * as Styled from "./style";

import themeData from '../../Data/theme.json';

import facebook from "../../assets/images/icon-facebook.svg";
import instagram from "../../assets/images/icon-instagram.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import youtube from "../../assets/images/icon-youtube.svg";

import down from '../../assets/images/icon-down.svg';
import up from '../../assets/images/icon-up.svg';

export default function MainSocialMidia({ theme }) {
  console.log(theme)

  return (
    <Styled.Container className="center" theme={theme} >

      <Styled.infoSocial color={theme?'hsl(230, 17%, 14%)':'hsl(0, 0%, 100%)'} bg={theme ? themeData.light.backgroundCard :themeData.dark.backgroundCard} >
        <Styled.VerticalLine bg={'hsl(208, 92%, 53%), hsl(208, 92%, 53%)'} />

        <span> <img src={facebook} alt="imagem do facebook" /> @nathanf </span>
        <h2>1987</h2>
        <p>F O L L O W E R S</p>
        <Styled.TodayFollowers colorSpan>
            <img src={up} alt="seta para cima" />
            <span>12 Today</span>
        </Styled.TodayFollowers>
      </Styled.infoSocial>

      <Styled.infoSocial color={theme?'hsl(230, 17%, 14%)':'hsl(0, 0%, 100%)'} bg={theme ? themeData.light.backgroundCard :themeData.dark.backgroundCard} >
        <Styled.VerticalLine bg={'hsl(203, 89%, 53%), hsl(203, 89%, 53%)'} />

        <span> <img src={twitter} alt="imagem do twitter" /> @nathanf </span>
        <h2>1044</h2>
        <p>F O L L O W E R S</p>
        <Styled.TodayFollowers colorSpan>
            <img src={up} alt="seta para cima" />
            <span>99 Today</span>
        </Styled.TodayFollowers>
      </Styled.infoSocial>

      <Styled.infoSocial color={theme?'hsl(230, 17%, 14%)':'hsl(0, 0%, 100%)'} bg={theme ? themeData.light.backgroundCard :themeData.dark.backgroundCard} >
        <Styled.VerticalLine bg={'hsl(37, 97%, 70%), hsl(329, 70%, 58%)'} />

        <span> <img src={instagram} alt="imagem do instagram" /> @realnathanf </span>
        <h2>10k</h2>
        <p>F O L L O W E R S</p>
        <Styled.TodayFollowers colorSpan>
            <img src={up} alt="seta para cima" />
            <span>1099 Today</span>
        </Styled.TodayFollowers>
      </Styled.infoSocial>

      <Styled.infoSocial color={theme?'hsl(230, 17%, 14%)':'hsl(0, 0%, 100%)'} bg={theme ? themeData.light.backgroundCard :themeData.dark.backgroundCard} >
        <Styled.VerticalLine bg={'hsl(37, 97%, 70%), hsl(329, 70%, 58%)'} />

        <span> <img src={youtube} alt="imagem do instagram" /> @realnathanf </span>
        <h2>8239</h2>
        <p>S U B S C R I B E R S</p>
        <Styled.TodayFollowers>
            <img src={down} alt="seta para baixo" />
            <span>1099 Today</span>
        </Styled.TodayFollowers>
      </Styled.infoSocial>
    
    </Styled.Container>
  );
}

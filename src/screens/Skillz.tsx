import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Tree from "../assets/flaticons/tree-1.svg";
import Chainsaw from "../assets/flaticons/chainsaw.svg";
import Magnifier from "../assets/flaticons/search.svg";
import Tulip from "../assets/flaticons/tulip.svg";
import StyledSection from "../components/StyledSection";

const Skillz: FunctionComponent = () => {
  return (
    <StyledSection>
      <h2>Leistungen</h2>
      <Card>
        <h3>
          <BeforeTree>
            <TreeImg src={Tree} alt="Baum" />
          </BeforeTree>
          Baumpflege
        </h3>
        <ul>
          <li>
            JUNGBAUM-PFLEGE Durch die frühe Pflege kann ein Baum sich gesund
            entwickeln und die kleinen Schnittstellen gut überwallen.
          </li>
          <li>
            TOTHOLZ-ENTFERNUNG Um die Verkehrssicherheit herzustellen werden
            Tote und abgerissene Äste entfernt.
          </li>
          <li>
            KRONENPFLEGEFehlentwicklungen in der Krone werden entnommen, tote
            und reibende Äste entfernt sowie an Straßen und Wegen das
            Lichtraumprofil wieder hergestellt.
          </li>
          <li>
            KRONENKÜRZUNGDie Baumkrone wird aus statischen oder gestalterischen
            Gründen in Ihrer Höhe oder Breite verringert, es kann auch nur an
            Teilen der Krone vorgenommen werden (Kronenteileinkürzung).
          </li>
          <li>
            OBSTBAUM-SCHNITTGesunderhaltung der Krone, Vorbeugung von
            Austausbrüchen durch Obstbehang.
          </li>
        </ul>
      </Card>
      <CardWrapper>
        <Card>
          <h3>
            <MagnifierGlass src={Magnifier} alt="Klettern" />
            Baumkontrolle
          </h3>
          <ul>
            <li>
              Als Eigentümer eines Grundstücks ist man auch für die
              Verkehrssicherheit der dort stehenden Bäume verantwortlich. Um
              diese Bäume richtig einzuschätzen helfe ich ihnen gerne mit
              entsprechenden Kontrollverfahren.
            </li>
          </ul>
        </Card>
        <Card>
          <h3>
            <Flowers src={Tulip} alt="Tulpe" />
            Pflanzungsberatung
          </h3>
          <ul>
            <li>
              Bäume werden in der Stadt leider oft in zu kleine Lebensräume
              gepflanzt, dadurch entstehen viele Folgekosten an dem Baum (extra
              Pflege, Düngung, Bewässerung…). Durch die Richtige Auswahl des
              Standorts, die entsprechende Vorbereitung und die passende
              Baumsorten Wahl hat man mehr Freude an dem Baum.
            </li>
          </ul>
        </Card>
        <Card>
          <h3>
            <ChainsawImg src={Chainsaw} alt="Kettensäge" />
            Fällarbeiten
          </h3>
          <ul>
            <li>
              Bäume an ungeeigneten Standorten oder geschädigte Bäume, die
              gefällt werden müssen, stehen in der Stadt oft nahe an Gebäuden.
              Mit der Seilklettertechnik oder durch Einsatz eines Hubsteigers
              kann der Baum schonend und sicher für das Umfeld abgetragen
              werden.
            </li>
          </ul>
        </Card>
      </CardWrapper>
    </StyledSection>
  );
};
const CardWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  img {
    transition: var(--transition);
  }
`;
const BeforeTree = styled.div`
  transition: var(--transition);
  position: relative;
  :hover {
    &::before {
      content: url(${Tree});
      height: 35px;
      width: 35px;
      position: absolute;
    }
    &::after {
      content: url(${Tree});
      height: 30px;
      width: 30px;
      position: absolute;
      right: 0;
      z-index: 4;
    }
  }
`;
const TreeImg = styled.img`
  position: relative;
  z-index: 5;
`;
const ChainsawImg = styled.img`
  :hover {
    transform: rotate(45deg);
  }
`;

const MagnifierGlass = styled.img`
  :hover {
    transform: scale(1.2);
  }
`;
const Flowers = styled.img`
  :hover {
    transform: scaleX(-1);
  }
`;
export default Skillz;

import React, { FunctionComponent } from "react";
import styled from "styled-components/macro";
import Card from "../components/Card";
import Tree from "../assets/flaticons/tree-1.svg";
import Chainsaw from "../assets/flaticons/chainsaw.svg";
import Magnifier from "../assets/flaticons/search.svg";
import TreeLove from "../assets/flaticons/love.svg";
import Certificate from "../assets/flaticons/certificate.svg";
import StyledSection from "../components/StyledSection";

const Skillz: FunctionComponent = () => {
  return (
    <StyledSection>
      <h1>Leistungen</h1>
      <Card>
        <h3>
          <div></div>
          <BeforeTree>
            <TreeImg src={Tree} alt="Baum" />
          </BeforeTree>
          Baumpflege
        </h3>
        <ul>
          <li>
            <h4> JUNGBAUM-PFLEGE</h4>
            Durch die frühe Pflege kann ein Baum sich gesund entwickeln und die
            kleinen Schnittstellen gut überwallen.
          </li>
          <li>
            <h4>TOTHOLZ-ENTFERNUNG </h4>
            Um die Verkehrssicherheit herzustellen werden Tote und abgerissene
            Äste entfernt.
          </li>
          <li>
            <h4>KRONENPFLEGE</h4>
            Fehlentwicklungen in der Krone werden entnommen, tote und reibende
            Äste entfernt sowie an Straßen und Wegen das Lichtraumprofil wieder
            hergestellt.
          </li>
          <li>
            <h4>KRONENKÜRZUNG</h4> Die Baumkrone wird aus statischen oder
            gestalterischen Gründen in Ihrer Höhe oder Breite verringert, es
            kann auch nur an Teilen der Krone vorgenommen werden
            (Kronenteileinkürzung).
          </li>
          <li>
            <h4>OBSTBAUM-SCHNITT</h4> Gesunderhaltung der Krone, Vorbeugung von
            Austausbrüchen durch Obstbehang.
          </li>
        </ul>
      </Card>
      <CardWrapper>
        <Card>
          <h3>
            <div></div>
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
            <div></div>
            <BeforeGrow>
              <img src={TreeLove} alt="Tulpe" />
            </BeforeGrow>
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
            <div></div>
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
        <Card>
          <h3>
            <div></div>
            <CertificateImg src={Certificate} alt="Kettensäge" />
            Gutachten
          </h3>
          <ul>
            <li>
              Für Beratung beim <b>Baumschutz auf Baustellen</b> oder der
              Bauaufsicht bei Erdarbeiten im Wurzelbereich, gerne unterstütze
              ich Sie dabei. Der Baum ist ein Lebensraum für viele Tiere, die
              Kontrolle und Erfassung der Baumbewohner kann in einem{" "}
              <b> Artenschutz</b> Gutachten erfasst werden. Auch Beringungen von
              Vögeln oder ähnliche Projekte werden durch das Baumklettern gerne
              unterstützt
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
  margin-top: 2rem;
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
const CertificateImg = styled.img`
  :hover {
    transform: rotate(1turn);
  }
`;

const MagnifierGlass = styled.img`
  :hover {
    transform: scale(1.2);
  }
`;
const BeforeGrow = styled.div`
  transition: var(--transition);
  position: relative;
  &::before {
    opacity: 0;
  }
  :hover {
    &::before {
      opacity: 1;
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
    img {
      opacity: 0;
    }
  }
`;
export default Skillz;

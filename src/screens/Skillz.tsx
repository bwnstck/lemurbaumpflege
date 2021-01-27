import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Card from "../components/Card";

const Skillz: FunctionComponent = () => {
  return (
    <SkillzContainer>
      <Card>
        <h2>Baumpflege</h2>
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
          <h2>Baumkontrolle</h2>
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
          <h2>Pflanzungsberatung</h2>
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
          <h2>Fällarbeiten</h2>
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
    </SkillzContainer>
  );
};
const SkillzContainer = styled.div`
  height: 100vh;
`;
const CardWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`;
export default Skillz;

import React, { FC } from "react";
import Section from "../components/Section";
import styled from "styled-components/macro";
import { Doughnut } from "react-chartjs-2";
import PageWrapper from "../components/PageWrapper";

const Transparency: FC = () => {
  return (
    <TransparencySection>
      <h1>Transparenz</h1>
      <Section>
        <h2>Nachhaltigkeit</h2>
        <p>
          Arbeiten im Grünenbereich heißt für mich auch Nachhaltig zu arbeiten.
          Möglichst viele Wege mit Fahrrad, der richtige Sprit, nachhaltige
          Entsorgung zusammen arbeiten um Ressourcen zu schonen.
        </p>
      </Section>
      <Section>
        <h2>Umweltbewusstsein </h2>
        <h3>Entsorgung</h3>
        <p>
          Schnittgut kann vor Ort gehäckselt werden und auf Wegen und als
          Mulchschicht wieder in den Garte eingebracht werden. Die Biomasse
          bleibt dem Garten erhalten, es gibt keine unnötigen Wege der
          Entsorgung. Kraftstoffe: Die meisten Maschinen laufen über Akku und
          werden im Optimalfall vom eigenen Solarstrom geladen. Wenn es Benzin
          sein muss dann von <a href="https://clean-life.de/">Cleanlife</a>,
          einer der transparentesten und sauberen Erzeuger von Kraftstoffen.
          Ortstermine in Heilbronn mit dem Rad, Baustellen ohne Entsorgung mit
          dem Lastenrad. Reduzierung des Fuhrparks.
        </p>
        <h3>Sharing Economy</h3>
        <p>
          Jeder Maschine verbraucht Ressorcen und Energie in der Produktion. Der
          Kauf von Maschinen kann für einen Betrieb wirtschaftlich sein, ist
          aber dann noch lange nicht nachhaltig für die Umwelt. Mit Kollegen
          teilen wir uns Maschinen oder mieten Sie um nachhaltig für die Natur
          zu arbeiten.
        </p>
      </Section>
      <Section>
        <h2>Aufschlüsselung nach Auftragsart</h2>
        <p>
          privat Kundschaft (Dort besteht der größte Freiraum für fachgerechte
          Baumpflege und eine Langfristige Begleitung für einen Baumerhalt.)
          Städte und Kommunen (Die Herrausforderung Behörden für Nachhaltige
          Baumpflege zu begeistern) Soziale Träger (gemeinsammes Erarbeiten von
          Pflege Konzepten) Subunternehmer ( Austausch von Wissenschaft und
          Technik und gemeinsames Erarbeiten von Großprojekten, Schlossanlagen
          und Parkflächen)
        </p>
        <div>
          <Doughnut
            height={250}
            data={doughnutData}
            options={doughnutOptions}
          />
        </div>
      </Section>
    </TransparencySection>
  );
};

const TransparencySection = styled(PageWrapper)`
  section > div {
    max-width: 600px;
    margin: 2rem auto 0;
  }
`;

const doughnutOptions = {
  cutoutPercentage: 45,
  rotation: Math.PI,
  circumference: 1 * Math.PI,
  legend: {
    labels: {
      fontSize: 20,
    },
  },
};

const doughnutData = {
  labels: ["Privat", "Stadt", "Subunternehmer", "Soziale Träger"],
  datasets: [
    {
      label: "Auftragsart",
      data: [70, 5, 19, 6],
      backgroundColor: [
        "hsla(210, 53%, 15%, 1)",
        "hsla(112, 28%, 74%, 1)",
        "hsla(48, 67%, 79%, 1)",
        "hsla(349, 78%, 62%, 1)",
      ],
      borderColor: [
        "hsla(210, 53%, 15%, 1)",
        "hsla(112, 28%, 74%, 1)",
        "hsla(48, 67%, 79%, 1)",
        "hsla(349, 78%, 62%, 1)",
      ],
      borderWidth: 2,
    },
  ],
};
export default Transparency;

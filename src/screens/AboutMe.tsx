import React, { FunctionComponent, useState } from "react";
import styled from "styled-components/macro";
import Christoph from "../assets/chrisOnTree.jpg";
import ChristophSmall from "../assets/chrisOnTree_small.jpg";
import Section from "../components/Section";
import PageWrapper from "../components/PageWrapper";
import useProgressiveImg from "../lib/useProgressiveImg";

const AboutMe: FunctionComponent = () => {
  const [textLength, setTextLength] = useState("s");
  const [src, { blur }] = useProgressiveImg(ChristophSmall, Christoph);

  return (
    <AboutMeWrapper>
      <h1>Über mich</h1>
      <img
        src={src}
        width='320px'
        height='320px'
        alt='Christoph as a Gangmember'
        style={{
          filter: blur ? "blur(10px)" : "none",
          transition: blur ? "none" : "filter 0.3s ease-out",
        }}
      />
      <Section>
        <BioLength>
          <h2>Textlänge</h2>
          <div>
            <span>kurz</span>
            <RadioButton
              checked={textLength === "s"}
              onClick={() => setTextLength("s")}
            />
            <hr />
            <RadioButton
              checked={textLength === "m"}
              onClick={() => setTextLength("m")}
            />
            <hr />
            <RadioButton
              checked={textLength === "l"}
              onClick={() => setTextLength("l")}
            />
            <span>lang</span>
          </div>
        </BioLength>
        {textLength === "s" ? (
          <>
            <p>
              Nach dem <b>Arboristik Studium</b> in Göttingen und der Ausbildung
              zum Fachagrarwirt für Baumpflege und Baumsanierung gründete ich
              2016 meine Baumpflegefirma Lemur, um den Wuchs der Bäume zu
              fördern und den besten Ausgleich zwischen Natur und Stadt, Baum
              und Mensch zu erreichen!
            </p>
            <p>
              Der Baum übernimmt viele Aufgaben in der Stadt. Er verbessert das
              Stadtklima, filtert Feinstaub, dient als Sichtschutz oder
              Schattenspender. Er bringt die Natur in die Stadt. Parkanlagen mit
              Bäumen schaffen Räume für Freude und Erholung. Für viele Tiere ist
              der Baum ein wichtiger oder der einzige Lebensraum, den sie als
              Nahrungsgrundlage, Schlaf-, Ruhe- oder Nistplatz brauchen. Diesen{" "}
              <b>Lebensraum Baum</b> will ich durch meine Arbeit{" "}
              <b>schützen und erhalten</b>.
            </p>
          </>
        ) : textLength === "m" ? (
          <>
            <p>
              In der <b>Region Heilbronn</b> aufgewachsen war ich schon als Kind
              in der Natur unterwegs. Durch ein ”Freiwilliges ökologisches Jahr“
              auf dem Waldheim Gaffenberg entdeckte ich mein Interesse an
              Bäumen. Nicht nur die Größe, auch ihre Eigenart und die
              vielfältigen Standorte sind immer wieder bewundernswert. So fasste
              ich den Entschluss, an der HAWK in Göttingen Arboristik zu
              studieren.
            </p>
            <p>
              Durch meinen <b>drei Studienjahren</b> wurden die biologischen
              Grundkenntnisse vertieft. Zum Studienprogramm gehörten
              Diskussionen über das Thema Bäume in der Stadt: Welche Aufgaben
              übernehmen sie? Welche Ansprüche haben sie? Die Fachgespräche
              brachten mir einen weiten Blick für das urbane Grün.
            </p>
            <p>
              Im ersten Sommer machte ich den <b>Kletterschein</b>. Das ist die
              Voraussetzung, beruflich mit Seilklettertechnik und Handsäge im
              Baum zu arbeiten. In den weiteren Ferien arbeitete ich zusammen
              mit Studienkollegen in der Baumpflege und machte Praktika bei
              unterschiedlichen Baumpflegefirmen in ganz Deutschland.
            </p>
            <p>
              Nach dem Studienabschluss festigte ich mein Wissen und sammelte
              zusätzlich praktische Erfahrungen bei der{" "}
              <b>Ausbildung zum Fachagrarwirt</b> für Baumpflege und
              Baumsanierung an der Landesversuchsanstalt für Gartenbau in
              Heidelberg.
            </p>
            <p>
              Der Baum übernimmt viele Aufgaben in der Stadt. Er verbessert das
              Stadtklima, filtert Feinstaub, dient als Sichtschutz oder
              Schattenspender. Er bringt die Natur in die Stadt. Parkanlagen mit
              Bäumen schaffen Räume für Freude und Erholung. Für viele Tiere ist
              der Baum ein wichtiger oder der einzige Lebensraum, den sie als
              Nahrungsgrundlage, Schlaf-, Ruhe- oder Nistplatz brauchen.
            </p>
            <p>
              <b>2016 gründete ich meine Baumpflegefirma Lemur</b>, um den Wuchs
              der Bäume zu fördern und den besten Ausgleich zwischen Natur und
              Stadt, Baum und Mensch zu erreichen!
            </p>
          </>
        ) : (
          <>
            <p>
              In der <b>Region Heilbronn</b> aufgewachsen war ich schon als Kind
              in der Natur unterwegs. Der Pfühlpark, der Neckar oder der
              Heilbronner Wald waren in Laufrunden oder bei Kinderfreizeiten
              immer wieder meine Ziele. Mein Interesse an Umwelt und Natur
              entwickelte sich und wurde durch Projekte mit Umweltorganisationen
              gestärkt. Durch ein ”Freiwilliges ökologisches Jahr“ auf dem
              Waldheim Gaffenberg entdeckte ich mein Interesse an Bäumen. Nicht
              nur die Größe, auch ihre Eigenart und die vielfältigen Standorte
              sind immer wieder bewundernswert. So fasste ich den Entschluss, an
              der HAWK in Göttingen Arboristik zu studieren.
            </p>
            <p>
              Durch meinen <b>drei Studienjahren</b> wurden die biologischen
              Grundkenntnisse vertieft. Zum Studienprogramm gehörten
              Diskussionen über das Thema Bäume in der Stadt: Welche Aufgaben
              übernehmen sie? Welche Ansprüche haben sie? Die Fachgespräche
              brachten mir einen weiten Blick für das urbane Grün.
            </p>
            <p>
              Während den Semesterferien bildete ich mich ständig praktisch
              fort. Im ersten Sommer machte ich den <b>Kletterschein</b>. Das
              ist die Voraussetzung, beruflich mit Seilklettertechnik und
              Handsäge im Baum zu arbeiten. In den weiteren Ferien arbeitete ich
              zusammen mit Studienkollegen in der Baumpflege und machte Praktika
              bei unterschiedlichen Baumpflegefirmen in ganz Deutschland. Die
              Umsetzung der Theorie in die Praxis war am Anfang nicht so
              einfach, doch langsam entwickelte sich ein anderer Blick. Ich
              konnte an den ersten Bäumen, die ich gepflegt habe, die Reaktionen
              auf meine Schnittmaßnahmen beobachten und auswerten.
            </p>
            <p>
              Nach dem Studienabschluss festigte ich mein Wissen und sammelte
              zusätzlich praktische Erfahrungen bei der{" "}
              <b>Ausbildung zum Fachagrarwirt</b> für Baumpflege und
              Baumsanierung an der Landesversuchsanstalt für Gartenbau in
              Heidelberg.
            </p>
            <p>
              Nach Abschluss meiner Ausbildungen bleibt mir der Kontakt mit
              vielen anderen Baumpflegern wichtig. Er vermittelt neue
              Erfahrungen und fördert die Beschäftigung mit Forschung und
              Wissenschaft im Fachbereich Arboristik.
            </p>
            <p>
              Der Baum übernimmt viele Aufgaben in der Stadt. Er verbessert das
              Stadtklima, filtert Feinstaub, dient als Sichtschutz oder
              Schattenspender. Er bringt die Natur in die Stadt. Parkanlagen mit
              Bäumen schaffen Räume für Freude und Erholung. Für viele Tiere ist
              der Baum ein wichtiger oder der einzige Lebensraum, den sie als
              Nahrungsgrundlage, Schlaf-, Ruhe- oder Nistplatz brauchen.
            </p>
            <p>
              <b>2016 gründete ich meine Baumpflegefirma Lemur</b>, um den Wuchs
              der Bäume zu fördern und den besten Ausgleich zwischen Natur und
              Stadt, Baum und Mensch zu erreichen!
            </p>
          </>
        )}

        <p>
          Sie haben noch Fragen? Setzen Sie sich doch gerne mit mir{" "}
          <a href='mailto:info@lemurbaumpflege.de'>
            <b>in Verbindung.</b>
          </a>
        </p>
        <p>Ihr Christoph Mössinger</p>
      </Section>
    </AboutMeWrapper>
  );
};
const AboutMeWrapper = styled(PageWrapper)`
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 4px solid var(--paradise-pink);
    margin: 1rem auto;
    max-width: 320px;
    display: block;
    text-align: center;
  }
  p {
    margin-bottom: 2rem;
    text-align: left;
  }
`;
const BioLength = styled.div`
  max-width: 350px;
  margin: auto;
  background-color: var(--text-primary);
  padding: 0.75em 1.5em;
  border-radius: 5px 5px 0 0;
  text-align: center;
  h2 {
    margin: 0.5rem auto;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      margin: auto 0.5rem;
    }
  }

  hr {
    width: 3rem;
    color: var(--paradise-pink);
    height: 2px;
  }
`;
interface IRadio {
  checked: boolean;
  onClick: VoidFunction;
}
const RadioButton = styled.div<IRadio>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid var(--paradise-pink);
  padding: 1rem;
  cursor: pointer;
  background: rgb(143, 3, 89);
  transition: background 1s ease;
  background: ${(props) =>
    props.checked
      ? "radial-gradient(circle, var(--paradise-pink) 0%,var(--paradise-pink) 50%, white 80%)"
      : "transparent"};
  &&:hover,
  :focus {
    background: radial-gradient(
      circle,
      var(--paradise-pink) 0%,
      var(--paradise-pink) 50%,
      white 80%
    );
  }
`;

export default AboutMe;

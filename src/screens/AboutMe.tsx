import React, { FunctionComponent } from "react";
import styled from "styled-components";
import ChristophClimbing from "../assets/christoph_climbing.jpg";
import Christoph from "../assets/profilePic.jpg";
import StyledSection from "../components/Section";

const AboutMe: FunctionComponent = () => {
  return (
    <AboutMeWrapper bright>
      <h2>Wer ich bin!</h2>
      <img src={Christoph} alt="Christoph auf einem Baum" />
      <p>
        In der <b>Region Heilbronn</b> aufgewachsen war ich schon als Kind in
        der Natur unterwegs. Der Pfühlpark, der Neckar oder der Heilbronner Wald
        waren in Laufrunden oder bei Kinderfreizeiten immer wieder meine Ziele.
        Mein Interesse an Umwelt und Natur entwickelte sich und wurde durch
        Projekte mit Umweltorganisationen gestärkt. Durch ein ”Freiwilliges
        ökologisches Jahr“ auf dem Waldheim Gaffenberg entdeckte ich mein
        Interesse an Bäumen. Nicht nur die Größe, auch ihre Eigenart und die
        vielfältigen Standorte sind immer wieder bewundernswert. So fasste ich
        den Entschluss, an der HAWK in Göttingen Arboristik zu studieren.
      </p>
      <p>
        Durch meinen drei Studienjahren wurden die biologischen Grundkenntnisse
        vertieft. Zum Studienprogramm gehörten Diskussionen über das Thema Bäume
        in der Stadt: Welche Aufgaben übernehmen sie? Welche Ansprüche haben
        sie? Die Fachgespräche brachten mir einen weiten Blick für das urbane
        Grün.
      </p>
      <p>
        Während den Semesterferien bildete ich mich ständig praktisch fort. Im
        ersten Sommer machte ich den Kletterschein. Das ist die Voraussetzung,
        beruflich mit Seilklettertechnik und Handsäge im Baum zu arbeiten. In
        den weiteren Ferien arbeitete ich zusammen mit Studienkollegen in der
        Baumpflege und machte Praktika bei unterschiedlichen Baumpflegefirmen in
        ganz Deutschland. Die Umsetzung der Theorie in die Praxis war am Anfang
        nicht so einfach, doch langsam entwickelte sich ein anderer Blick. Ich
        konnte an den ersten Bäumen, die ich gepflegt habe, die Reaktionen auf
        meine Schnittmaßnahmen beobachten und auswerten.
      </p>
      <p>
        Nach dem Studienabschluss festigte ich mein Wissen und sammelte
        zusätzlich praktische Erfahrungen bei der Ausbildung zum Fachagrarwirt
        für Baumpflege und Baumsanierung an der Landesversuchsanstalt für
        Gartenbau in Heidelberg.
      </p>
      <p>
        Nach Abschluss meiner Ausbildungen bleibt mir der Kontakt mit vielen
        anderen Baumpflegern wichtig. Er vermittelt neue Erfahrungen und fördert
        die Beschäftigung mit Forschung und Wissenschaft im Fachbereich
        Arboristik.
      </p>
      <p>
        Der Baum übernimmt viele Aufgaben in der Stadt. Er verbessert das
        Stadtklima, filtert Feinstaub, dient als Sichtschutz oder
        Schattenspender. Er bringt die Natur in die Stadt. Parkanlagen mit
        Bäumen schaffen Räume für Freude und Erholung. Für viele Tiere ist der
        Baum ein wichtiger oder der einzige Lebensraum, den sie als
        Nahrungsgrundlage, Schlaf-, Ruhe- oder Nistplatz brauchen.
      </p>
      <p>
        2016 gründete ich meine Baumpflegefirma Lemur, um den Wuchs der Bäume zu
        fördern und den besten Ausgleich zwischen Natur und Stadt, Baum und
        Mensch zu erreichen!
      </p>

      <p>
        Sie haben noch Fragen?
        <br />
        Setzen Sie sich doch gerne mit mir{" "}
        <a href="mailto:info@lemurbaumpflege.de">in Verbindung.</a>
      </p>
      <span>Ihr Christoph Mössinger</span>
    </AboutMeWrapper>
  );
};

const AboutMeWrapper = styled(StyledSection)`
text-align: center;
  img {
    width: 50%;
    border-radius: 50%;
    margin: 1rem auto;
    border: 10px solid var(--primary);
    max-width: 350px;
  }
  p {
    margin-bottom: 2rem;
    text-align: left;
  }
`;
export default AboutMe;

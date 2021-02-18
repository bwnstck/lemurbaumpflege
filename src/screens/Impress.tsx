import React, { FC } from "react";
import styled from "styled-components";
import Section from "../components/Section";

const Impress: FC = () => {
  return (
    <ImpressWrapper>
      <h1>Impressum</h1>
      <h5>Domaininhaber und verantwortlich für den Inhalt: </h5>
      <p>Lemur Baumpflege Christoph Mössinger</p>
      <p>Hansjakobstraße. 4 74074 Heilbronn</p>
      <p>
        Mail:{" "}
        <a href="mailto:kontakt@lemurbaumpflege.de">
          kontakt[at]lemurbaumpflege.de
        </a>
      </p>
      <h5>Steuernummer: </h5>
      <p>65287/68019</p>
      <p>Webdesign und Grafik</p>
      <p>Moritz Ernst </p>
      <p>
        <a href="mailto:info@legalcolours.de">info[at]legalcolours.de</a>
      </p>
      <h5>Urheberrecht</h5>
      <p>
        Sämtliche Bestandteile dieser Website unterliegen dem Urheberrecht. Das
        Unternehmen und die vom Unternehmen beauftragten Fotografen, Autoren,
        Programmierer und Grafikdesigner verweisen auf die entsprechenden
        Gesetze zum Schutz des geistigen Eigentums. Die Kopie, Speicherung,
        Weitergabe, Vervielfältigung, Veränderung, gewerbliche Nutzung oder
        sonstige Verwendung von Inhalten dieser Website durch Dritte bedarf der
        Genehmigung. Ausdrücklich zum Herunterladen angebotene Materialien
        (insbesondere Anfahrtskizzen, Produktinformationen usw.) stehen dem
        Nutzer für die persönliche Verwendung zur Verfügung. Soweit im Rahmen
        dieser Website geschützte Markenzeichen verwendet werden, ist dies
        jeweils gekennzeichnet. Die Inhaber der verwendeten Markenzeichen haben
        jeweils der Verwendung im Rahmen dieser Website zugestimmt. Die Kopie,
        Speicherung, Weitergabe, Vervielfältigung, Veränderung, gewerbliche
        Nutzung oder sonstige Verwendung der Markenzeichen durch Dritte ist
        nicht gestattet.
      </p>
      <h5>Haftungsausschluss</h5>
      <p>
        {" "}
        Dieser Internetauftritt wird laufend erweitert und aktualisiert und mit
        größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
        und Aktualität der Angaben übernehmen wir keine Haftung. Wir behalten
        uns ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne
        gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die
        Veröffentlichung zeitweise oder endgültig einzustellen. Das Auftreten
        von Fehlern ist nicht völlig auszuschließen. Für eventuelle Schäden
        materieller oder ideeller Art Dritter, die durch die Nutzung dieses
        Webangebotes verursacht wurden, übernehmen wir keine Haftung. Trotz
        sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die
        Inhalte externer Seiten. Für den Inhalt der verlinkten Seiten sind
        ausschließlich deren Betreiber verantwortlich. Deshalb distanzieren wir
        uns hiermit ausdrücklich von allen Inhalten aller Seiten, die von
        unseren Seiten verlinkt sind. Die Inhalte dieser Seiten machen wir uns
        nicht zu Eigen. Diese Erklärung gilt für alle auf unseren Seiten
        angebrachten Links und für die Inhalte aller Seiten, zu denen die
        angebrachten Links führen.
      </p>
      <h5>Datenschutz</h5>
      <p>
        Der Betreiber dieser Internetseiten versichert, die
        datenschutzrechtlichen Bestimmungen des Bundesdatenschutzgesetzes sowie
        die spezifischen Bestimmungen zum Datenschutz in Teledienstegesetz,
        Teledienstedatenschutzgesetz, Mediendienste-Staatsvertrag und Gesetz zum
        Elektronischen Geschäftsverkehr zu beachten. Es werden keine
        Einzelnutzerprofile erstellt. Persönliche Daten werden nur dann
        gespeichert, wenn Nutzer uns diese absichtlich zukommen lassen, z.B. im
        Rahmen einer Anfrage per E-Mail. Unsere Mitarbeiter und Geschäftspartner
        sind zu Vertraulichkeit und zur Wahrung des Datengeheimnisses
        verpflichtet. Eine Übermittlung Ihrer Daten an Dritte findet nicht
        statt. Ihre Daten werden soweit technisch möglich vor Verlust,
        Zerstörung, Manipulation und unberechtigtem Zugriff geschützt. Links Mit
        Urteil vom 12. Mai 1998 – 312 O 85/98 – „Haftung für Links“ hat das
        Landgericht Hamburg entschieden, dass man durch die Anbringung eines
        Links die Inhalte der gelinkten Seite ggf. mit zu verantworten hat.Dies
        kann nur dadurch verhindert werden, dass man sich ausdrücklich von
        diesen Inhalten distanziert. Hiermit distanzieren wir uns ausdrücklich
        von allen Inhalten und vom Design aller gelinkten Seiten auf unserer
        Internetpräsenz und machen uns diese Inhalte nicht zu eignen. Diese
        Erklärung gilt für alle auf unserer Internetpräsenz publizierten Links
        und für alle Inhalte der Seiten, zu denen die bei uns veröffentlichten
        Banner und Links führen.
      </p>
    </ImpressWrapper>
  );
};
const ImpressWrapper = styled(Section)`
  h5 {
    text-align: center;
  }
`;
export default Impress;

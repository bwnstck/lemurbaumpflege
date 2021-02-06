import { TimelineItemModel } from "react-chrono/dist/models/TimelineItemModel";
import Cyprus from "../assets/timeline/zypern.jpg";

const timelineData: TimelineItemModel[] = [
  {
    title: "Januar 2020",
    cardTitle: "Mitgliedschaft",
    cardSubtitle: "Mitglied Deutschen Dendrologischen Gesellschaft ev",
  },
  {
    title: "Januar 2019",
    cardTitle: "BUGA",
    cardSubtitle: "Mitgestaltung des Bunten Klassenzimmer BUGA Heilbronn",
  },
  {
    title: "Oktober 2017",
    cardTitle: "Zertifizierung",
    cardSubtitle: "SKT B Schein",
  },
  {
    title: "Januar 2017",
    cardTitle: "ETT",
    cardSubtitle: `European tree technician`,
    cardDetailedText: `eine in Europa anerkannte Ausbildung zum arbeiten am und im Baum mit Rücksicht auf den Umwelt-, Natur- und Unfallschutz`,
  },
  {
    title: "Januar 2017",
    cardTitle: "FAW",
    cardSubtitle: `Fachagrarwirt für Baumpflege und Baumsanierung`,
    cardDetailedText: `ist eine Ausbildung
    um Arbeiten im und am Baum auszuführen, zu planen und auch zu
    beurteilen. Die Schwerpunkte im Bereich Baumpflege sind
    Umweltschutz, Arbeitssicherheit und Rechtsvorschriften`,
  },
  {
    title: "September 2016",
    cardTitle: "Gründung",
    cardSubtitle: "Lemur Baumpflege in Heilbronn",
  },
  {
    title: "August 2016",
    cardTitle: "Zertifizierung",
    cardSubtitle: "Pflanzenschutzausweis",
  },
  {
    title: "Oktober 2015",
    cardTitle: "Schulung",
    cardSubtitle: "Schein für Hubarbeitsbühnen",
    cardDetailedText: `Bedienerschulung Hubarbeitsbühnen`,
  },
  {
    title: "August 2015",
    cardTitle: "Weiterbildung",
    cardSubtitle: (
      <>
        <p>Forestfire Protection Management in Cyprus </p>
        <img width="100%" height="100%" src={Cyprus} alt="Zypern" />
      </>
    ),
  },
  {
    title: "Dezember 2014",
    cardTitle: "Schulung",
    cardSubtitle: "Sachkundiger für PSA",
    cardDetailedText: `Sachkundiger für PSA gegen Absturz nach BGG 906`,
  },
  {
    title: "Juli 2014",
    cardTitle: "Zertifizierung",
    cardSubtitle: `SKT A`,
    cardDetailedText: ` Seilklettertechnik für Baumpflege erlaubt den Zustieg mit dem Seil
            in den Baum und das Arbeiten mit der Handsäge/Kettensäge`,
  },
  {
    title: "Februar 2014",
    cardTitle: "AS-Baum",
    cardSubtitle: `Arbeitssicherheit-Baum`,
    cardDetailedText: `erlaubt das Arbeiten mit der Motorsäge bei
            stehendem und liegendem Holz auch unter Spannung.`,
  },
  {
    title: "2013 - 2016",
    cardTitle: "Studium",
    cardSubtitle: `Arborsitik`,
    cardDetailedText: `Ba. Studium Arborsitik Göttingen`,
  },

  {
    title: "2016",
    cardTitle: "Zertifizierung",
    cardSubtitle: `FLL zertifizierter Baumkontrolleur`,
    cardDetailedText: `Er ist eine Zertifizierung in der Baumkontrolle um Bäume fachlich
            Richtig zu beurteilen und die entsprechenden Maßnahmen festzulegen`,
  },
  {
    title: "??????",
    cardTitle: "Nachweis",
    cardSubtitle: `PSA`,
    cardDetailedText: `Sachkundenachweis für Pflanzenschutzmittel wird benötigt um
            Pflanzenschutzmittel ausbringen zu dürfen`,
  },
  {
    title: "??????",
    cardTitle: "Weiterbildung",
    cardSubtitle: `Sicherung von Arbeitsstellen an Straßen`,
    // cardDetailedText: ``,
  },
  // {
  //   title: "25 October 1942",
  //   cardTitle: "Weitere Lehrgänge",
  //   cardSubtitle: `PSA`,
  //   cardDetailedText: `, Weitere Lehrgänge Sicherung von Arbeitsstellen an Straßen,`,
  // },
];

export default timelineData;

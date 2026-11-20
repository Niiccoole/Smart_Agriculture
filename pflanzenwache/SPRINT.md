# Sprint 1 · Pflanzenwache

## Sprint 1: Pflanzenwache-Demo

**Rollen** · Product Manager, Stakeholder, Auftraggeber:in, Product Owner, Scrum Master

Sprintziel: Eine Person kann bei drei Beispielpflanzen korrekt entscheiden, welche sie gießen und bei welcher sie den Sensor prüfen soll.

Stakeholder-Hypothese: Klare Handlungsanweisungen werden schneller verstanden als reine Prozentwerte. Demo-Abnahme: Alle drei Entscheidungen sind in höchstens 30 Sekunden verständlich. Formale Abnahme bleibt bei der Auftraggeberin.

Umfang: simulierte Daten, drei Pflanzen, lokale Browser-Demo. Sprint Review: Startzustand, Ausfall und Erholung vorführen. Retrospektive: Verständlichkeit der Meldungen prüfen und eine Verbesserung festhalten.

## P1 · Messdaten und Zustandslogik

**Rollen** · Entwicklungsteam, Product Owner, Agile Tester

Drei reproduzierbare Messreihen modellieren. Grenzwert 30 %, veraltet ab 15 Minuten. Fehlende, ungültige und zukünftige Messungen als Sensorprüfung behandeln. Akzeptanz: aktueller Messwert unter 30 % ergibt Gießen, ab 30 % OK. Alte trockene Messwerte lösen keine Gießempfehlung aus.

## P2 · Dashboard und Demo-Szenarien

**Rollen** · Entwicklungsteam, Stakeholder

Zeige drei Karten mit Status, Messwert, Messalter und nächster Aktion. Ermögliche die Szenarien Standard, Sensorausfall und Erholung sowie einen Reset. Akzeptanz: Zustände per Text erkennbar, auch mobil und mit Tastatur bedienbar.

## P3 · Testnachweise und Sicherheitsreview

**Rollen** · Agile Tester, Tester, Product Security

Automatisiere Grenzfälle und Szenariowechsel. Halte manuelle Demo-Schritte und Ergebnisse fest. Prüfe defensiv die Datenvalidierung, fehlende Zugangsdaten und externe Datenflüsse. Akzeptanz: Tests grün, Sicherheitsgrenzen und offene Prüfungen dokumentiert.

## P4 · Sprint Review und fachliche Abnahme

**Rollen** · Auftraggeber:in, Scrum Master, Product Manager

Prüfe die Demo mit den drei Startentscheidungen sowie Ausfall und Erholung. Halte Abnahmeentscheidung und Nutzerfeedback im Issue fest. Wähle nach der Retrospektive eine Verbesserung für den nächsten Sprint.

## Sicherheitsreview

Die Demo verarbeitet fest definierte Szenarien im Browser. Die Logik prüft Messwert und Zeitstempel vor einer Handlungsempfehlung. Texte werden als Textknoten eingesetzt. Die Seite lädt ihre Module und Styles lokal, sperrt externe Verbindungen per Content Security Policy und nutzt weder Zugangsdaten noch Speicherung. Eine künftige Sensoranbindung benötigt eine eigene Prüfung von Authentifizierung, Eingabevalidierung, Wiederholungen und Verfügbarkeit.

## Definition of Done

Die Demo startet mit der dokumentierten Anleitung. Die automatisierten Tests sind grün. Das Team hat Startzustand, Ausfall, Erholung sowie Bedienung und Darstellung geprüft. Die Ergebnisse stehen im Pull Request. Die fachliche Abnahme wird im Sprint Review festgehalten.

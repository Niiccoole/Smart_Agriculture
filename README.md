# Smart Agriculture Monitoring System

## Projektbeschreibung

Dieses Projekt beschäftigt sich mit der Entwicklung eines Smart-Agriculture-Systems zur Überwachung eines Gewächshauses. Ziel ist die Erfassung, Analyse und Bereitstellung von Sensordaten, um den Zustand der Pflanzen und des Gewächshauses zu überwachen.

Das System verwendet simulierte Sensordaten und stellt diese über eine REST-API bereit. Zusätzlich werden statistische Auswertungen durchgeführt sowie Cybersecurity-Risiken bewertet.

---

## Projektziele

* Erfassung und Speicherung von Sensordaten
* Analyse des pH-Werts mittels statistischer Kennzahlen
* Bereitstellung der Daten über eine REST-API
* Erkennung von Warnungen und kritischen Zuständen
* Erstellung eines Dashboard-Konzepts für eine Flutter-Windows-Anwendung
* Durchführung eines Cybersecurity Reviews

---

## Nicht-Ziele des Projekts

* Keine Anbindung an echte Sensorhardware
* Keine automatische Steuerung einer Bewässerungsanlage
* Keine Cloud-Anbindung
* Keine mobile App für Android oder iOS
* Keine Datenbankintegration
* Keine KI-basierte Vorhersage von Pflanzenwachstum
* Keine Produktivsetzung in einem realen Gewächshaus

---

## Verwendete Technologien

* Python
* Pandas
* NumPy
* Matplotlib
* FastAPI
* Jupyter Notebook
* Flutter (Konzept)

---

## Datensatz

Der Datensatz enthält 120 simulierte Sensormessungen mit folgenden Attributen:

* timestamp
* soil_moisture_percent
* soil_temperature_c
* air_temperature_c
* air_humidity_percent
* ph_value
* irrigation_active
* system_status

---

## REST-API

Implementierte Endpunkte:

### GET /health

Überprüfung des Systemstatus.

### GET /sensors

Liefert die aktuellen Sensordaten.

### GET /statistics

Liefert statistische Kennzahlen zum pH-Wert.

### GET /alerts

Liefert aktuelle Warnungen.

### POST /login

Beispielhafter Login-Endpunkt.

---

## Datenanalyse

Für den pH-Wert wurden folgende Kennzahlen berechnet:

* Mittelwert
* Median
* Varianz
* Standardabweichung
* Cp
* Cpk

Zusätzlich wurden folgende Diagramme erstellt:

* Histogramm
* Control Chart (Regelkarte)

---

## Cybersecurity Review

Identifizierte Risiken:

* Fehlende Authentifizierung
* Hardcodierte Passwörter
* Fehlende Eingabevalidierung
* Fehlende Rate Limits
* Fehlende Autorisierung

---

## Systemarchitektur

Sensoren
↓
CSV-Datei
↓
Python Analyse
↓
REST API (FastAPI)
↓
Flutter Dashboard
↓
Benutzer

---

## Fazit

Das Projekt zeigt die grundlegende Umsetzung eines Smart-Agriculture-Monitoring-Systems. Die Sensordaten werden simuliert, analysiert und über eine REST-API bereitgestellt. Zusätzlich wurden Sicherheitsaspekte betrachtet und ein Konzept für eine spätere Benutzeroberfläche entwickelt.

### Nächste Entwicklungsschritte

* Anbindung echter Sensoren
* Automatische Bewässerungssteuerung
* Datenbankintegration
* Echtzeit-Datenübertragung
* Erweiterung des Flutter-Dashboards
* Implementierung eines sicheren Benutzer- und Rollensystems


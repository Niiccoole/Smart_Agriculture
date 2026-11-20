# Pflanzenwache

Die Browser-Demo ergänzt das Smart-Agriculture-Projekt um ein Dashboard, das drei Pflanzen anhand simulierter Bodenfeuchte beurteilt. Die Schwellenwerte gelten für die Demo.

## Starten

Im Repository-Hauptordner mit Python 3:

```sh
python -m http.server 8000 --bind 127.0.0.1 --directory pflanzenwache
```

Öffne [die lokale Demo](http://127.0.0.1:8000/). Die Demo braucht keine Installation von Paketen und keinen Zugriff auf die bestehende API.

## Prüfen

```sh
node --test pflanzenwache/model.test.mjs
```

| Szenario | Basilikum | Minze | Rosmarin |
|---|---|---|---|
| Standard | In Ordnung | Gießen | Sensor prüfen, Messung veraltet |
| Sensorausfall | In Ordnung | Sensor prüfen, Messung fehlt | Sensor prüfen, Messung veraltet |
| Erholung | In Ordnung | Gießen | In Ordnung |

„Zurücksetzen“ zeigt den Standardzustand. Prüfe im Sprint Review die Reihenfolge der Bedienung per Tab-Taste und bei schmalem Fenster.

## Sprint

Das [Sprint-Backlog](SPRINT.md) enthält die Arbeitspakete, Rollenbeiträge und Abnahmekriterien.

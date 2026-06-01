from fastapi import FastAPI
import pandas as pd

app = FastAPI()

CSV_FILE = "smart_agriculture_sensor_data.csv"


@app.get("/health")
def health():
    return {"status": "OK"}


@app.get("/sensors")
def sensors():
    data = pd.read_csv(CSV_FILE)
    latest = data.tail(1).to_dict(orient="records")[0]
    return latest


@app.get("/statistics")
def statistics():
    data = pd.read_csv(CSV_FILE)

    ph = data["ph_value"]
    mean = ph.mean()
    std = ph.std()

    LSL = 5.8
    USL = 7.2

    cp = (USL - LSL) / (6 * std)
    cpk = min(
        (USL - mean) / (3 * std),
        (mean - LSL) / (3 * std)
    )

    return {
        "mean": round(mean, 3),
        "median": round(ph.median(), 3),
        "variance": round(ph.var(), 3),
        "std_dev": round(std, 3),
        "cp": round(cp, 3),
        "cpk": round(cpk, 3)
    }


@app.get("/alerts")
def alerts():
    data = pd.read_csv(CSV_FILE)

    alerts = []

    critical_ph = data[(data["ph_value"] < 5.8) | (data["ph_value"] > 7.2)]
    low_moisture = data[data["soil_moisture_percent"] < 35]

    if len(critical_ph) > 0:
        alerts.append("pH-Wert außerhalb der Spezifikation")

    if len(low_moisture) > 0:
        alerts.append("Bodenfeuchtigkeit zu niedrig")

    if not alerts:
        alerts.append("Keine Warnungen")

    return {"alerts": alerts}


@app.post("/login")
def login(username: str, password: str):
    if username == "admin" and password == "admin123":
        return {"token": "demo-token-123"}

    return {"error": "Ungültige Login-Daten"}
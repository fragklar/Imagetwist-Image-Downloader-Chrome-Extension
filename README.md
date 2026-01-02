# Imagetwist Image Downloader

Ein spezialisiertes Browser-Tool auf Basis von Manifest V3, das automatisch Download-Buttons zu Vorschaubildern auf definierten Webseiten hinzufügt. Die Erweiterung ermöglicht es, Bilder mit einem Klick direkt über die Browser-Downloads-API zu speichern.

---

## 🚀 Features

* **Automatische Button-Injektion**: Identifiziert Bilder mit der Klasse `ipsImage_thumbnailed` und fügt ein Download-Symbol hinzu
* **Hintergrund-Downloads**: Nutzt einen Service-Worker für effiziente Downloads ohne Unterbrechung der Nutzeroberfläche
* **Direktzugriff**: Extrahiert Bildquellen aus `data-src` oder `src` Attributen
* **Moderne Architektur**: Vollständig kompatibel mit Manifest Version 3.

## 🛠️ Installation (Entwicklermodus)

1. Lade das Repository herunter und entpacke die Dateien.
2. **Konfiguration**: Trage die Ziel-Webseiten in der `manifest.json` unter `host_permissions` und `matches` ein.
3. Öffne `chrome://extensions/` in deinem Browser.
4. Aktiviere den **Entwicklermodus**.
5. Klicke auf **Entpackte Erweiterung laden** und wähle den Plugin-Ordner aus.

## 📖 Technische Funktionsweise

1. **Erkennung**: Das Skript `content.js` wird bei `document_idle` ausgeführt
2. **Injektion**: Ein Wrapper-Element und ein "⬇️"-Button werden um jedes gefundene Bild erstellt
3. **Kommunikation**: Ein Klick sendet eine Nachricht mit der Bild-URL an die `background.js`
4. **Ausführung**: Der Hintergrund-Prozess löst den eigentlichen Download-Befehl aus

## 📄 Details

* **Version**: 1.1
* **Berechtigungen**: `downloads`
**Autor**: [fragklar.de](https://fragklar.de)

## ⚖️ Lizenz

Dieses Projekt ist unter der **MIT-Lizenz** lizenziert

Copyright (c) 2026 [Fragklar.de](https://fragklar.de)
>
> [cite_start]Die Software wird "wie besehen" zur Verfügung gestellt, ohne jegliche Gewährleistung[cite: 5]. [cite_start]Die Autoren haften nicht für Ansprüche oder Schäden[cite: 6].

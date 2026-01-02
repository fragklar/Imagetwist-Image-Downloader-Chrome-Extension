# Imagetwist Image Downloader

[cite_start]Ein spezialisiertes Browser-Tool (Manifest V3), das automatisch Download-Buttons zu Vorschaubildern auf definierten Webseiten hinzufügt[cite: 4]. [cite_start]Die Erweiterung ermöglicht es, Bilder mit einem Klick direkt über die Browser-Downloads-API zu speichern[cite: 4].

## 🚀 Features

* [cite_start]**Automatische Button-Injektion:** Sucht nach Bildern mit der Klasse `ipsImage_thumbnailed` und fügt ein Download-Icon hinzu[cite: 6].
* [cite_start]**Hintergrund-Downloads:** Nutzt einen Service-Worker, um Downloads effizient und ohne Blockierung der Benutzeroberfläche abzuwickeln[cite: 4].
* [cite_start]**Direktzugriff:** Extrahiert die Bildquelle entweder aus dem `data-src` Attribut oder direkt aus der `src` URL[cite: 6].
* [cite_start]**Sichere Architektur:** Basiert auf Manifest Version 3 für verbesserte Sicherheit und Performance[cite: 4].



## 🛠️ Installation (Entwicklermodus)

1.  Lade das Repository herunter und entpacke die Dateien.
2.  [cite_start]**Konfiguration:** Öffne die `manifest.json` und trage deine Ziel-Webseiten unter `host_permissions` und `content_scripts -> matches` ein[cite: 4].
3.  Öffne Chrome (oder einen kompatiblen Browser) und navigiere zu `chrome://extensions/`.
4.  Aktiviere oben rechts den **Entwicklermodus**.
5.  Klicke auf **Entpackte Erweiterung laden** und wähle den Ordner aus, der die `manifest.json` enthält.

## 📖 Technische Funktionsweise

1.  [cite_start]**Erkennung:** Das Content-Script (`content.js`) wird geladen, sobald die Seite im Status `document_idle` ist[cite: 4].
2.  [cite_start]**Injektion:** Es erstellt ein Wrapper-Element um jedes erkannte Vorschaubild und platziert darin einen Button mit dem Icon "⬇️"[cite: 6].
3.  [cite_start]**Aktion:** Beim Klicken auf den Button wird eine Nachricht an `background.js` gesendet[cite: 6].
4.  [cite_start]**Ausführung:** Der Hintergrund-Prozess löst den eigentlichen Download-Befehl aus[cite: 4].

## 📄 Details

* [cite_start]**Version:** 1.1 [cite: 4]
* [cite_start]**Berechtigungen:** `downloads` [cite: 4]
* [cite_start]**Autor:** [fragklar.de](https://fragklar.de) [cite: 4]

## ⚖️ Lizenz

[cite_start]Dieses Projekt ist unter der **MIT-Lizenz** lizenziert[cite: 4].

> [cite_start]Copyright (c) 2026 [Fragklar.de](https://fragklar.de) [cite: 4]
>
> Die Software wird "wie besehen" zur Verfügung gestellt, ohne jegliche Gewährleistung. [cite_start]Die Autoren haften nicht für Ansprüche oder Schäden[cite: 5, 6].

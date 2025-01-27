
> Diese Seite bei [https://ines-hpmm.github.io/ines-led-matrix/](https://ines-hpmm.github.io/ines-led-matrix/) öffnen

## Als Erweiterung verwenden

Dieses Repository kann als **Erweiterung** in MakeCode hinzugefügt werden.

* öffne [https://makecode.microbit.org/](https://makecode.microbit.org/)
* klicke auf **Neues Projekt**
* klicke auf **Erweiterungen** unter dem Zahnrad-Menü
* nach **https://github.com/ines-hpmm/ines-led-matrix** suchen und importieren

## Matrix initialisieren
In jedem Programm muss zu beginn die Matrix initialisiert werden. Dazu gibt es einen Block:
```blocks
Lumatrix.initializeMatrix(DigitalPin.P0, 135)
```

## Beispiel
Die vorhandenen Blöcke können Bilder und Text darstellen, sowie einzelne Pixel ansteuern.
```blocks
Lumatrix.initializeMatrix(DigitalPin.P0, 135)
Lumatrix.scrollText("LUMATRIX", 0xff00FF, 90)
Lumatrix.showImage(Lumatrix.matrix8x8(`
    . . . . . . . .
    . # # . . # # .
    . # # . . # # .
    . . . . . . . .
    # . . . . . . #
    . # . . . . # .
    . . # # # # . .
    . . . . . . . .
    `), 0xffff00)
```

## Dieses Projekt bearbeiten

Um dieses Repository in MakeCode zu bearbeiten.

* öffne [https://makecode.microbit.org/](https://makecode.microbit.org/)
* klicke auf **Importieren** und dann auf **Importiere URL**
* füge **https://github.com/ines-hpmm/ines-led-matrix** ein und klicke auf Importieren

## Übersetzung aktualisieren
Übersetzung der Blöcke ist im Ordner `_locales/de` gespeichert. Um die Übersetzung zu aktualisieren können die entrsprechenden Dateien in MakeCode geändert werden. Bei grösseren Änderungen bzw. neu hinzugefügten Blöcken kann die [Anleitung](https://makecode.com/extensions/localization) von MakeCode verwendet werden.

```shell
# NodeJS und npm müssen installiert sein
npm install -g pxt
pxt target microbit
pxt gendocs --locs
```

## Supported targets

* for PXT/microbit

## Lizenz

MIT

#### Metadaten (verwendet für Suche, Rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>

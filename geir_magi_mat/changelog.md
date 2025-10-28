## 20.10.2025

Changelog:

- Flytta js filer om til en ny struktur i `/src`.
- Flytta CSS filer og bilder til `/assets`.
- Laget dev mappe der vi har forskjellig info og skjermbilder for å bruke som referanse.
- Refaktorert views til å være mer komponentbaserte,
- Refaktorert modellen til å ha ett inngangspunkt i `src/models/index.js`.
- Refaktorert prosjektet til å bruke ES6-moduler (`import`/`export`).
- Oppdatert `index./*html*/ til å bruke en enkelt `<script type="module">`-tag.
- Refaktorert alle modell, view og controller filer til å exporte / importe dependencies.
- Laget en `main.js`-fil som fungerer som en single entry point for applikasjonen.

Info:

- `updateView()` i `view.js` er den eneste funksjonen som skal endre på HTML-en (`innerHTML`), alle andre views skal kun returnere HTML, som passeres inn i pageSwitcher.
- `view.js` bygger den generelle layouten (navbar/footer) og bruker `pageManager()` til å sette inn riktig side-view.
- Prosjektet bruker nå ES6 moduler (`import`/`export`). All JavaScript lastes via én linje i `index./*html*/: `<script type="module" src="./src/main.js"></script>`.
- **MVC-Struktur:**
    - `src/models`: All app-data. `models/index.js` samler alt i ett globalt `model`-objekt.
    - `src/views`: All kode som genererer HTML. `RecipeCard.js` er et eksempel på en gjenbrukbar komponent.
    - `src/views/components`: Gjenbrukbare views, f.eks recipe-card, som skal brukes om igjen mye, men er bare deler av en side/view.
    - `src/controllers`: All logikk som endrer på data i modellen (f.eks. `switchPage`, `nextPage`).
- **Utils-mappen:** Funksjoner i `src/utils` (som `filter.js`) skal være "dumme". De må ikke importere `model`-objektet, men heller få dataen de trenger som argumenter til funksjonen. Dette forhindrer feilmeldinger om sirkulære avhengigheter.

Relevante docs:

For window.X brukt i `main.js` -> **https://developer.mozilla.org/en-US/docs/Web/API/Window/window**

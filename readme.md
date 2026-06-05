# Kokoonpanoavustaja

Selainpohjainen työkalu jalkapallojoukkueen kokoonpanon suunnitteluun. Toimii suoraan selaimessa ilman asennuksia — avaa `index.html`.

## Tiedostot

| Tiedosto | Kuvaus |
|---|---|
| `index.html` | Sovellus — ei tarvitse muokata |
| `players.js` | Pelaajadata ja joukkueasetukset — muokkaa tätä |

## Käyttö

1. Valitse joukkue ylhäältä (Vihreä / Keltainen / Kaikki — määritelty `players.js`:ssä)
2. **Pelaajat**-listassa merkitse ketkä ovat paikalla — "Poista kokoonpanosta" / "Lisää kokoonpanoon"
   - Sarakeotsikoita klikkaamalla voi lajitella numeron, nimen, paikan tai joukkueen mukaan (↑↓)
3. **Kokoonpano**-listassa vaihda pelipaikkoja tarvittaessa tai merkitse pelaaja vaihtoon
   - Yhteenveto näyttää montako kentällä ja pelipaikkajakauman
   - "Kopioi pelaajalista" kopioi WhatsApp-yhteensopivan listan leikepöydälle
4. **Kenttäkuva** päivittyy automaattisesti — vedä pelaajia halutuille paikoille
   - "Kopioi kuva" tallentaa kentän leikepöydälle (vaatii nettiyhteyden)
   - "Näytä sukunimi / koko nimi" vaihtaa nimen esitysmuotoa tokenissa

**Tila tallentuu automaattisesti** selaimen muistiin — voit sulkea ja avata sivun uudelleen ilman että valinnat häviävät. "Uusi kokoonpano" -nappi tyhjentää tilan ja aloittaa alusta.

## Pelaajadatan muokkaus (`players.js`)

```js
const CONFIG = {
  teams: ['vihreä', 'keltainen'],  // joukkueet — lisää ja muokkaa vapaasti

  // Värit samassa järjestyksessä kuin teams. Voi jättää pois → oletuspaletti.
  colors: [
    { circle: '#2d7a2d', activeBg: '#2d7a2d', bg: '#d4edda', color: '#155724' },
    { circle: '#c49a06', activeBg: '#c49a06', bg: '#fff3cd', color: '#7a5800' },
  ],

  positions: { mv: 'MV', p: 'P', kk: 'KK', h: 'H' },
};

const PLAYERS = [
  { number: 10, name: 'Etunimi Sukunimi', position: 'mv', team: 'vihreä' },
  // ...
];
```

Pelipaikkakoodit: `mv` = maalivahti, `p` = puolustaja, `kk` = keskikenttä, `h` = hyökkääjä

Värikenttien selitykset:
- `circle` — pelaajatokenin väri kentällä
- `activeBg` — joukkuenappi aktiivisena
- `bg` / `color` — nimibadjin taustaväri ja tekstiväri

## Julkaisu ja players.js-hallinta

```bash
# Ensimmäinen julkaisu
git add index.html players.js readme.md
git commit -m "Initial commit"
git remote add origin https://github.com/AnaHill/kokoonpano_avustaja.git
git push -u origin master

# Jätä paikalliset muutokset players.js:ssä committaamatta (oikeat nimet pysyvät omalla koneella)
git update-index --skip-worktree players.js

# Palauta seuranta tarvittaessa
git update-index --no-skip-worktree players.js
```

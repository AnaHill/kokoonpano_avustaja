# Kokoonpanoavustaja

Selainpohjainen työkalu jalkapallojoukkueen kokoonpanon suunnitteluun. Toimii suoraan selaimessa ilman asennuksia — avaa `index.html`.

**Demo:** https://anahill.github.io/kokoonpano_avustaja/

## Tiedostot

| Tiedosto | Kuvaus |
|---|---|
| `index.html` | Sovellus — ei tarvitse muokata |
| `players.js` | Pelaajadata ja joukkueasetukset — muokkaa tätä |

## Käyttö

1. Valitse joukkue ylhäältä (määritelty `players.js`:ssä)
2. **Pelaajat**-listassa merkitse ketkä ovat paikalla — "Poista kokoonpanosta" / "Lisää kokoonpanoon"
   - Sarakeotsikoita klikkaamalla voi lajitella numeron, nimen, paikan tai joukkueen mukaan (↑↓)
   - "Lisää lainapelaaja" lisää yksittäisiä pelaajia toisesta joukkueesta (näkyy **Laina**-merkinnällä)
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
  teams: ['Joukkue 1', 'Joukkue 2'],  // joukkueet — lisää ja muokkaa vapaasti

  // Värit samassa järjestyksessä kuin teams. Voi jättää pois → oletuspaletti.
  colors: [
    {
      circle: '#ffffff',      // pelaajatokenin täyttöväri kentällä
      stroke: '#1565c0',      // tokenin reunaväri (valinnainen)
      tokenColor: '#1565c0',  // teksti tokenin sisällä (valinnainen, oletus: valkoinen)
      activeBg: '#1565c0',    // joukkuenappi aktiivisena
      bg: '#e8f0fe',          // nimibadjin taustaväri
      color: '#0d47a1',       // nimibadjin tekstiväri
    },
    { circle: '#003087', stroke: '#ffffff', tokenColor: '#ffffff',
      activeBg: '#003087', bg: '#cce0ff', color: '#001a66' },
  ],

  positions: { mv: 'MV', p: 'P', kk: 'KK', h: 'H' },
};

const PLAYERS = [
  { number: 10, name: 'Etunimi Sukunimi', position: 'mv', team: 'Joukkue 1' },
  // ...
];
```

Pelipaikkakoodit: `mv` = maalivahti, `p` = puolustaja, `kk` = keskikenttä, `h` = hyökkääjä

### Värikenttien selitykset

| Kenttä | Kuvaus | Pakollinen |
|---|---|---|
| `circle` | Pelaajatokenin täyttöväri kentällä | kyllä |
| `stroke` | Tokenin reunaväri | ei (oletus: läpinäkyvä) |
| `tokenColor` | Teksti tokenin sisällä | ei (oletus: valkoinen) |
| `activeBg` | Joukkuenappi aktiivisena | kyllä |
| `bg` | Nimibadjin taustaväri | kyllä |
| `color` | Nimibadjin tekstiväri | kyllä |

## Ideoita jatkokehitykseen

- **Kompaktimpi pelaajatokeni kenttäkuvassa** — nykyinen ympyrä + nimi vie paljon tilaa. Matala suorakaide (esim. 48×18px) jossa pelipaikka ja sukunimi samalla rivillä (`P Mäkinen`) mahtuisi ahtaammillekin kentille siistimmin. Muoto ei itsessään ratkaise tilanahtautta — se vaatisi myös pienempää fonttia ja tokenia.

## Julkaisu ja players.js-hallinta

```bash
# Ensimmäinen julkaisu
git add index.html players.js readme.md
git commit -m "Initial commit"
git remote add origin https://github.com/KAYTTAJATUNNUS/kokoonpano_avustaja.git
git push -u origin master

# GitHub Pages: Settings → Pages → Branch: master / (root) → Save
# Sivu julkaistaan osoitteeseen https://KAYTTAJATUNNUS.github.io/kokoonpano_avustaja/

# Jätä paikalliset muutokset players.js:ssä committaamatta (oikeat nimet pysyvät omalla koneella)
git update-index --skip-worktree players.js

# Palauta seuranta tarvittaessa (esim. ennen julkaisua)
git update-index --no-skip-worktree players.js
```

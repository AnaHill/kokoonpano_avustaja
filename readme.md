# Kokoonpanoavustaja

Selainpohjainen työkalu jalkapallojoukkueen kokoonpanon suunnitteluun. Toimii suoraan selaimessa ilman asennuksia — avaa `index.html`.

## Tiedostot

| Tiedosto | Kuvaus |
|---|---|
| `index.html` | Sovellus — ei tarvitse muokata |
| `players.js` | Pelaajadata ja joukkueasetukset — muokkaa tätä |

## Käyttö

1. Valitse joukkue ylhäältä (esimerkkissä Vihreä / Keltainen / Kaikki, määritä `players.js` tiedostossa)
2. **Pelaajat**-listassa merkitse ketkä ovat paikalla — "Poista kokoonpanosta" / "Lisää kokoonpanoon"
3. **Kokoonpano**-listassa vaihda pelipaikkoja tarvittaessa, tai merkitse pelaaja vaihtoon
4. **Kenttäkuva** päivittyy automaattisesti — vedä pelaajia halutuille paikoille
5. "Kopioi kuva" tallentaa kenttäkuvan leikepöydälle jaettavaksi (vaatii nettiyhteyden)

## Pelaajadatan muokkaus (`players.js`)

```js
const CONFIG = {
  teams: ['vihreä', 'keltainen'],  // joukkueet — lisää ja muokkaa vapaasti
  positions: { mv: 'MV', p: 'P', kk: 'KK', h: 'H' },
};

const PLAYERS = [
  { number: 10, name: 'Etunimi Sukunimi', position: 'mv', team: 'vihreä' },
  // ...
];
```

Pelipaikkakoodit: `mv` = maalivahti, `p` = puolustaja, `kk` = keskikenttä, `h` = hyökkääjä

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

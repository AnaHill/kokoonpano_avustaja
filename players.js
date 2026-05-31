// ================================================================
// KOKOONPANOAVUSTAJA — Pelaajadata
//
// Muokkaa tätä tiedostoa omaan joukkueeseesi sopivaksi.
// Kopioi tiedosto muille joukkueille, he voivat muokata omansa.
//
// Pelipaikkakoodit: mv = maalivahti, p = puolustaja,
//                   kk = keskikenttä,  h = hyökkääjä
// ================================================================

const CONFIG = {
  // Joukkuevaihtoehdot — lisää tai muuta vapaasti
  teams: ['keltainen', 'vihreä'],

  // Pelipaikkakoodien lyhenteet
  positions: {
    mv: 'MV',
    p:  'P',
    kk: 'KK',
    h:  'H',
  },
};

const PLAYERS = [
  // numero  nimi                    paikka   joukkue
  { number:  1, name: 'Mikko Korhonen',  position: 'mv', team: 'keltainen' },
  { number:  2, name: 'Jouko Virta',     position: 'p',  team: 'keltainen' },
  { number:  3, name: 'Pekka Leinonen',  position: 'p',  team: 'keltainen' },
  { number:  5, name: 'Timo Salonen',    position: 'p',  team: 'keltainen' },
  { number:  7, name: 'Ari Heikkinen',   position: 'kk', team: 'keltainen' },
  { number:  9, name: 'Vesa Hämäläinen', position: 'kk', team: 'keltainen' },
  { number: 11, name: 'Juha Nieminen',   position: 'h',  team: 'keltainen' },
  { number: 13, name: 'Risto Mäkinen',   position: 'h',  team: 'keltainen' },

  { number:  1, name: 'Sami Virtanen',   position: 'mv', team: 'vihreä' },
  { number:  4, name: 'Janne Mäkelä',   position: 'p',  team: 'vihreä' },
  { number:  6, name: 'Kari Järvinen',  position: 'p',  team: 'vihreä' },
  { number:  8, name: 'Marko Lehtinen', position: 'kk', team: 'vihreä' },
  { number: 10, name: 'Petri Lähde',    position: 'kk', team: 'vihreä' },
  { number: 12, name: 'Harri Tuominen', position: 'kk', team: 'vihreä' },
  { number: 14, name: 'Antti Koskinen', position: 'h',  team: 'vihreä' },
  { number: 16, name: 'Teemu Paananen', position: 'h',  team: 'vihreä' },
];

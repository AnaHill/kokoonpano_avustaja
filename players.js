// ================================================================
// KOKOONPANOAVUSTAJA — Pelaajadata
//
// Suomi-huuhkajien legendat — esimerkkirosteri
//
// Pelipaikkakoodit: mv = maalivahti, p = puolustaja,
//                   kk = keskikenttä,  h = hyökkääjä
// ================================================================

const CONFIG = {
  // Joukkuevaihtoehdot — lisää tai muuta vapaasti
  teams: ['Kultainen sukupolvi', 'Sukupolvien unelma'],

  // Joukkueiden värit samassa järjestyksessä kuin teams-lista.
  //   circle  = pelaajatokenin väri kentällä
  //   activeBg = joukkuenappi aktiivisena
  //   bg/color = nimibadjin taustaväri ja tekstiväri
  colors: [
    { circle: '#ffffff', stroke: '#1565c0', tokenColor: '#1565c0', activeBg: '#1565c0', bg: '#e8f0fe', color: '#0d47a1' }, // Kultainen sukupolvi — valkoinen sisä, sininen reuna
    { circle: '#003087', stroke: '#ffffff', tokenColor: '#ffffff', activeBg: '#003087', bg: '#cce0ff', color: '#001a66' }, // Sukupolvien unelma — sininen sisä, valkoinen reuna
  ],

  // Pelipaikkakoodien lyhenteet
  positions: {
    mv: 'MV',
    p:  'P',
    kk: 'KK',
    h:  'H',
  },
};

const PLAYERS = [
  // lähteenä esimerkiksi: https://www.national-football-teams.com/country/66/2001/Finland.html
  // ── Joukkue 1: Kultainen sukupolvi — 2000-luvun alun legendat ──
  // Niemi oli #1 ja Jääskeläinen #12 early-2000s; roolit vaihtuivat 2005
  // numero  nimi                        paikka  joukkue
  { number:  1, name: 'Antti Niemi',          position: 'mv', team: 'Kultainen sukupolvi' }, // Southampton, Chelsea — ykkösvahti ~2005 asti
  { number:  2, name: 'Petri Pasanen',        position: 'p',  team: 'Kultainen sukupolvi' }, // Werder Bremen, Bundesliiga
  { number: 13, name: 'Juha Reini',           position: 'p',  team: 'Kultainen sukupolvi' }, // oikea laitapuolustaja, 23 maajoukkupeliä 1997–2004
  { number:  4, name: 'Sami Hyypiä',          position: 'p',  team: 'Kultainen sukupolvi' }, // Liverpool kapteeni, Mestarien liiga
  { number:  5, name: 'Hannu Tihinen',        position: 'p',  team: 'Kultainen sukupolvi' }, // AC Milan -maali, West Ham
  { number:  6, name: 'Aki Riihilahti',       position: 'kk', team: 'Kultainen sukupolvi' }, // Crystal Palace
  { number:  8, name: 'Teemu Tainio',         position: 'kk', team: 'Kultainen sukupolvi' }, // Auxerre, Tottenham
  { number: 10, name: 'Jari Litmanen',        position: 'kk', team: 'Kultainen sukupolvi' }, // Ajax, Barcelona, Liverpool — suomalaisjalkapallon kuningas
  { number: 16, name: 'Mika Väyrynen',        position: 'kk', team: 'Kultainen sukupolvi' }, // PSV, Leeds
  { number: 11, name: 'Jonatan Johansson',    position: 'h',  team: 'Kultainen sukupolvi' }, // Rangers, Charlton
  { number: 14, name: 'Joonas Kolkka',        position: 'h',  team: 'Kultainen sukupolvi' }, // PSV, Bolton
  { number:  9, name: 'Mikael Forssell',      position: 'h',  team: 'Kultainen sukupolvi' }, // Chelsea, Birmingham
  { number: 17, name: 'Shefki Kuqi',          position: 'h',  team: 'Kultainen sukupolvi' }, // Ipswich, Blackburn, Crystal Palace

  // ── Joukkue 2: Sukupolvien unelma — EM2021 ja viimeisen 10–15 vuoden legendat
  // Numerot EM2020-kisajoukkueen viralliset pelinumerot (UEFA)
  // Moisander lopetti maajoukkueen 2017 (ei EM2020-joukkueessa) — numero 3 vapaa
  { number:  1, name: 'Lukáš Hrádecký',       position: 'mv', team: 'Sukupolvien unelma' }, // Bayer Leverkusen, maajoukkuekapteeni
  { number:  3, name: 'Niklas Moisander',      position: 'p',  team: 'Sukupolvien unelma' }, // Ajax, Werder Bremen — kapteeni ennen EM-kisoja
  { number:  2, name: 'Paulus Arajuuri',       position: 'p',  team: 'Sukupolvien unelma' }, // Bochum, Celta Vigo
  { number:  4, name: 'Joona Toivio',          position: 'p',  team: 'Sukupolvien unelma' }, // Malmö FF, Bolton
  { number: 18, name: 'Jere Uronen',           position: 'p',  team: 'Sukupolvien unelma' }, // Celtic, Stade Brest
  { number:  6, name: 'Glen Kamara',           position: 'kk', team: 'Sukupolvien unelma' }, // Rangers, Rennes — kansainvälinen tähti
  { number: 11, name: 'Rasmus Schüller',       position: 'kk', team: 'Sukupolvien unelma' }, // SJK, HJK, Westerlo
  { number: 14, name: 'Tim Sparv',             position: 'kk', team: 'Sukupolvien unelma' }, // EM-kisojen kapteeni, Midtjylland
  { number:  8, name: 'Robin Lod',             position: 'kk', team: 'Sukupolvien unelma' }, // Portland Timbers, MLS-tähti
  { number: 20, name: 'Joel Pohjanpalo',       position: 'h',  team: 'Sukupolvien unelma' }, // Venezia — Serie A -maalitykki
  { number: 10, name: 'Teemu Pukki',           position: 'h',  team: 'Sukupolvien unelma' }, // Norwich, Seattle — maajoukkueen kaikkien aikojen maalitykki
  { number: 28, name: 'A-J Mäki',          position: 'kk',  team: 'Sukupolvien unelma' }, // Sepsi-78, Sisu, NePa, Hong Kong PolyU edustus
];
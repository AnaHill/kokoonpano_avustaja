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
  teams: ['valkoinen', 'sininen'],

  // Joukkueiden värit samassa järjestyksessä kuin teams-lista.
  //   circle  = pelaajatokenin väri kentällä
  //   activeBg = joukkuenappi aktiivisena
  //   bg/color = nimibadjin taustaväri ja tekstiväri
  colors: [
    { circle: '#1565c0', activeBg: '#1565c0', bg: '#e8f0fe', color: '#0d47a1' }, // valkoinen — Suomi kotipaita (sinivalkoinen)
    { circle: '#003087', activeBg: '#003087', bg: '#cce0ff', color: '#001a66' }, // sininen — Suomi vieraspaita (tummansininen)
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
  // ── Joukkue 1: Valkoinen — 2000-luvun alun legendat ────────────
  // Niemi oli #1 ja Jääskeläinen #12 early-2000s; roolit vaihtuivat 2005
  // numero  nimi                        paikka  joukkue
  { number:  1, name: 'Antti Niemi',          position: 'mv', team: 'valkoinen' }, // Southampton, Chelsea — ykkösvahti ~2005 asti
  { number: 12, name: 'Jussi Jääskeläinen',  position: 'mv', team: 'valkoinen' }, // Bolton Wanderers, Aston Villa
  { number:  2, name: 'Petri Pasanen',        position: 'p',  team: 'valkoinen' }, // Werder Bremen, Bundesliiga
  { number:  4, name: 'Sami Hyypiä',          position: 'p',  team: 'valkoinen' }, // Liverpool kapteeni, Mestarien liiga
  { number:  5, name: 'Hannu Tihinen',        position: 'p',  team: 'valkoinen' }, // AC Milan -maali, West Ham
  { number: 19, name: 'Toni Kuivasto',        position: 'p',  team: 'valkoinen' }, // HJK, pitkäaikainen maajoukkuelainen
  { number:  6, name: 'Aki Riihilahti',       position: 'kk', team: 'valkoinen' }, // Crystal Palace
  { number:  8, name: 'Teemu Tainio',         position: 'kk', team: 'valkoinen' }, // Auxerre, Tottenham
  { number: 10, name: 'Jari Litmanen',        position: 'kk', team: 'valkoinen' }, // Ajax, Barcelona, Liverpool — suomalaisjalkapallon kuningas
  { number: 15, name: 'Markus Heikkinen',     position: 'kk', team: 'valkoinen' }, // Aberdeen, Rapid Wien
  { number: 16, name: 'Mika Väyrynen',        position: 'kk', team: 'valkoinen' }, // PSV, Leeds
  { number: 11, name: 'Jonatan Johansson',    position: 'h',  team: 'valkoinen' }, // Rangers, Charlton
  { number: 14, name: 'Joonas Kolkka',        position: 'h',  team: 'valkoinen' }, // PSV, Bolton
  { number: 18, name: 'Mixu Paatelainen',     position: 'h',  team: 'valkoinen' }, // Aberdeen, Wolves — myöhemmin päävalmentaja
  { number:  9, name: 'Mikael Forssell',      position: 'h',  team: 'valkoinen' }, // Chelsea, Birmingham
  { number: 17, name: 'Shefki Kuqi',          position: 'h',  team: 'valkoinen' }, // Ipswich, Blackburn, Crystal Palace

  // ── Joukkue 2: Sininen — EM2021 ja viimeisen 10–15 vuoden legendat
  // Numerot EM2020-kisajoukkueen viralliset pelinumerot (UEFA)
  // Moisander lopetti maajoukkueen 2017 (ei EM2020-joukkueessa) — numero 3 vapaa
  { number:  1, name: 'Lukáš Hrádecký',       position: 'mv', team: 'sininen' }, // Bayer Leverkusen, maajoukkuekapteeni
  { number: 12, name: 'Jesse Joronen',         position: 'mv', team: 'sininen' }, // Venezia, MLS
  { number:  3, name: 'Niklas Moisander',      position: 'p',  team: 'sininen' }, // Ajax, Werder Bremen — kapteeni ennen EM-kisoja
  { number:  2, name: 'Paulus Arajuuri',       position: 'p',  team: 'sininen' }, // Bochum, Celta Vigo
  { number:  4, name: 'Joona Toivio',          position: 'p',  team: 'sininen' }, // Malmö FF, Bolton
  { number:  5, name: 'Leo Väisänen',          position: 'p',  team: 'sininen' }, // Stade Brest, Kairat
  { number: 18, name: 'Jere Uronen',           position: 'p',  team: 'sininen' }, // Celtic, Stade Brest
  { number:  6, name: 'Glen Kamara',           position: 'kk', team: 'sininen' }, // Rangers, Rennes — kansainvälinen tähti
  { number:  9, name: 'Fredrik Jensen',        position: 'kk', team: 'sininen' }, // Augsburg, Union Berlin
  { number: 11, name: 'Rasmus Schüller',       position: 'kk', team: 'sininen' }, // SJK, HJK, Westerlo
  { number: 14, name: 'Tim Sparv',             position: 'kk', team: 'sininen' }, // EM-kisojen kapteeni, Midtjylland
  { number:  8, name: 'Robin Lod',             position: 'kk', team: 'sininen' }, // Portland Timbers, MLS-tähti
  { number: 20, name: 'Joel Pohjanpalo',       position: 'h',  team: 'sininen' }, // Venezia — Serie A -maalitykki
  { number: 10, name: 'Teemu Pukki',           position: 'h',  team: 'sininen' }, // Norwich, Seattle — maajoukkueen kaikkien aikojen maalitykki
  { number: 26, name: 'Marcus Forss',          position: 'h',  team: 'sininen' }, // Brentford, Middlesbrough
  { number: 28, name: 'A-J Mäki',          position: 'kk',  team: 'sininen' }, // Sepsi-78, Sisu, NePa, Hong Kong Polytechnic edustus
];
# Backlog
- kokoonpano ja kenttäkuva olisivat vierekkäin; kokoonpano vasemmalla puolella. 
- näytä koko nimi olisi oletus, sukunimi sitten valintana
- voi ottaa kuvan / lähettää eteenpäin kokoonpanosta

# Kokoonpanoavustaja
Ohje agentille:
> lue readme.md, analysoi ja ehdota toteutus. Parempi palastella pieniä toteutuksia alkuun, mutta huomioida laajennettavuus esim vältä syväkoodattuja arvoja vaan mahdollista joustava päivittäminen



Yksinkertainen html(tai muu?) pohjainen avustaja, jonka avulla voi suunnitella kokoonpanon otteluun

Tarve toimia lähinnä omalla koneella, helpoiten niin että kukin lataa omalla. 
Mutta ei pitäisi joutua asentelemaan softia tms

Toteutus pitäisi olla yksinkertainen ja joustava
- pelaajaluettelo yksinkertaisessa helposti editoitavassa muodossa kuten markdown tiedosto tms
  - muutama sarake joka esitelty `## Pelaajaluettelo esimerkki` kohdassa

Kohta1: Drop-down tai muu jolla voi valita joukkueen (alussa 2 vaihtoehtoa Keltainen ja Vihreä tai "kaikki", mutta myöhemmin voi tulla lisääkin)

Kohta2: Tämä tulostaisi interaktiivisen koko joukkueen pelaajaluettelon
  - voit klikata poissa kohtaa -> pelaaja yliviivataan ja laitetaan listauksen loppuun
  - mukana kohta -> pelaaja siirtyy tuonne Kohta3:n
  - mukana kohta sisältäisi myös "valitse kaikki" jolloin saan kaikki aktiiviseksi, voin sitten poistella yksittäisiä pelureita

Kohta3: peliin pääsevät pelurit, toisin sanoen kokoonpano
- Edellisen vieressä oleva listaus pelureista jotka pelissä mukana
- jokaisella on oletusvalintana pelipaikka joka asettu tuolla pelaajaluettelossa (katso `## Pelaajaluettelo esimerkki` )
- drop-downilla voi valita pelaajan paikan
- vaihtoehdot ovat: mv, p, kk, h (maalivahti, puolustaja, keskikenttä, hyökkääjä)
- lisäksi erillinen vaihtoehto "aloittaa vaihdossa"

Kohta 4: Kohta3:n valintojen perusteella olisi yksikertainen pelipaikka esitys, missä voi vielä hiirellä raahaamalla siirtäää esim vasen pakki oikealla, tai keskikentälle tms. Ja samalla päivittää Kohta3:n valinnat


 




## Tarve



## Pelaajaluettelo esimerkki
Pelaajalista voisi olla tyyliin

pelinumero nimi pelipaikka joukkue

2 Jouko Virta p keltainen
4 Janne Mäkelä kk vihreä

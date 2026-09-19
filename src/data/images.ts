/**
 * Central image map. Swap these URLs for the contractor's own photography
 * (or point them at /public) without touching any component.
 */
const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const img = {
  heroSite: u('1541888946425-d81bb19240f5', 1800),
  villaExterior: u('1600596542815-ffad4c1539a9'),
  villaInterior: u('1600585154340-be6161a56a0c'),
  villaLiving: u('1600607687939-ce8a6c25118c'),
  houseModern: u('1512917774080-9991f1c4c750'),
  houseContemporary: u('1580587771525-78b9dba3b914'),
  residenceLux: u('1613490493576-7fde63acd811'),
  officeTower: u('1486406146926-c627a92ad1ab'),
  officeInterior: u('1497366811353-6870744d04b2'),
  officeMeeting: u('1497366216548-37526070297c'),
  retailPlaza: u('1555636222-cae831e670b3'),
  commercialPlaza: u('1577495508048-b635879837f1'),
  siteWork: u('1503387762-592deb58ef4e'),
  siteCrane: u('1590725140246-20acdee442be'),
  workers: u('1504307651254-35680f356dfd'),
  engineer: u('1581094794329-c8112a89af12'),
  blueprint: u('1503387762-592deb58ef4e'),
  interiorWork: u('1600566753086-00f18fb6b3ea'),
  renovationBefore: u('1582268611958-ebfd161ef9cf'),
  renovationAfter: u('1600210492486-724fe5c67fb0'),
  kitchenBefore: u('1556909212-d5b604d0c90d'),
  kitchenAfter: u('1556911220-bff31c812dba'),
  teamMeeting: u('1600880292203-757bb62b4baf'),
  bungalow: u('1568605114967-8130f3a36994')
} as const;

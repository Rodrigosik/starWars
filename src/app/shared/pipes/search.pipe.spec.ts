import { starWarsApiModel } from 'src/app/utils/models';
import { SearchPipe } from './search.pipe';

describe('SearchPipe', () => {
  let data = [
    {
      id: 1,
      name: 'Luke Skywalker',
      height: 1.72,
      mass: 73,
      gender: 'male',
      homeworld: 'tatooine',
      wiki: 'http://starwars.wikia.com/wiki/Luke_Skywalker',
      image:
        'https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg',
      born: -19,
      bornLocation: 'polis massa',
      died: 34,
      diedLocation: 'ahch-to',
      species: 'human',
      hairColor: 'blond',
      eyeColor: 'blue',
      skinColor: 'light',
      cybernetics: 'Prosthetic right hand',
      affiliations: [
        'Alliance to Restore the Republic',
        'Red Squadron',
        'Rogue Squadron',
        'Massassi Group',
        "Leia Organa's team",
        'Endor strike team',
        'Jedi Order',
        'Bright Tree tribe',
        'New Republic',
        'Resistance',
      ],
      masters: ['Obi-Wan Kenobi', 'Yoda'],
      apprentices: [
        'Leia Organa',
        'Ben Solo (along with a dozen apprentices)',
        'Rey',
      ],
      formerAffiliations: [],
    },
    {
      id: 2,
      name: 'C-3PO',
      height: 1.71,
      mass: 75,
      gender: 'male',
      homeworld: 'tatooine',
      species: 'droid',
      wiki: 'http://starwars.wikia.com/wiki/C-3PO',
      image:
        'https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png',
      dateCreated: -32,
      dateDestroyed: 3,
      destroyedLocation: 'bespin, rebuilt shortly after',
      creator: 'Anakin Skywalker',
      manufacturer: 'Cybot Galactica',
      model: '3PO unit',
      class: 'Protocol droid',
      sensorColor: 'yellow',
      platingColor: 'gray, later primarily golden',
      equipment: 'TranLang III communication module',
      affiliations: [
        'Skywalker family',
        'Confederacy of Independent Systems',
        'Royal House of Naboo',
        'Galactic Republic',
        'House of Organa',
        'Galactic Empire',
        'Alliance to Restore the Republic',
        'Massassi Group',
        "Leia Organa's team",
        'Pathfinders',
        'Endor strike team',
        'Bright Tree tribe',
        'New Republic',
        'Resistance',
        'Resistance spy droid network',
      ],
      skinColor: 'gold',
      eyeColor: 'yellow',
      born: -112,
      formerAffiliations: [],
    },
    {
      id: 3,
      name: 'R2-D2',
      height: 1.09,
      mass: 32,
      gender: 'male',
      homeworld: 'naboo',
      species: 'droid',
      wiki: 'http://starwars.wikia.com/wiki/R2-D2',
      image:
        'https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png',
      manufacturer: 'Industrial Automaton',
      productLine: 'R-series',
      model: 'R2 series astromech droid',
      class: 'Astromech droid',
      sensorColor: 'red',
      platingColor: 'bluesilver',
      equipment: [
        'Buzz saw',
        'Electric pike',
        "Drinks tray (Only on Jabba's Sail Barge)",
        'Fusion welder',
        'Data probe',
        'Power recharge coupler',
        'Rocket booster',
        'Holoprojector',
        'Motorized, all-terrain treads',
        'Retractable third leg',
      ],
      affiliations: [
        'Royal House of Naboo',
        'Galactic Republic',
        '501st Legion',
        "R2-D2's battle droid squadron",
        'D-Squad',
        'House of Organa',
        'Galactic Empire',
        'Alliance to Restore the Republic',
        'Massassi Group',
        'Red Squadron',
        "Leia Organa's team",
        'Endor strike team',
        'Bright Tree tribe',
        'Resistance',
      ],
      skinColor: 'white, blue',
      eyeColor: 'red',
      born: -33,
      formerAffiliations: [],
    },
  ];

  it('create an instance', () => {
    const data = new starWarsApiModel();
    const pipe = new SearchPipe();
    expect(pipe).toBeTruthy();
  });

  it('Buscando usuario Luke Skywalker', () => {
    const pipe = new SearchPipe();
    const search = pipe.transform(data, 'Skywalker');
    expect(search[0].name).toEqual('Luke Skywalker');
  });

  it('Buscando usuario C-3PO', () => {
    const pipe = new SearchPipe();
    const search = pipe.transform(data, 'C-3PO');
    expect(search[0].name).toEqual('C-3PO');
  });

  it('Buscando usuario R2-D2', () => {
    const pipe = new SearchPipe();
    const search = pipe.transform(data, 'R2-D2');
    expect(search[0].name).toEqual('R2-D2');
  });
});

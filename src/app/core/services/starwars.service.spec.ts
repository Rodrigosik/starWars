import { of } from 'rxjs';
import { starWarsApiModel } from 'src/app/utils/models';
import { StarwarsService } from './starwars.service';

describe('StarwarsService', () => {
  let service: StarwarsService;
  let httpClientSpy: { get: jasmine.Spy };
  let data: starWarsApiModel[] = [
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
  ];

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new StarwarsService(httpClientSpy as any);
  });

  it('Debe de crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('Devuelve la informacion correcta', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(data));
    service.getDataStarWars().subscribe((resultado) => {
      expect(resultado).toEqual(data);
      done();
    });
  });
});

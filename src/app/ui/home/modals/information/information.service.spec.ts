import { TestBed } from '@angular/core/testing';

import { MatDialogModule } from '@angular/material/dialog';
import { of } from 'rxjs';
import { starWarsApiModel } from 'src/app/utils/models';
import { InformationService } from './information.service';

describe('InformationService', () => {
  let modalService: InformationService;
  let dialogRefSpyObj = jasmine.createSpyObj({
    afterClosed: of({}),
    close: null,
  });
  dialogRefSpyObj.componentInstance = { body: '' };
  let data: starWarsApiModel = {
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
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      providers: [InformationService],
    });
    modalService = TestBed.get(InformationService);
  });

  it('Abrir el modal', () => {
    const spy = spyOn(modalService, 'open').and.callThrough();
    modalService.open(data);
    expect(spy).toHaveBeenCalled();
  });
});

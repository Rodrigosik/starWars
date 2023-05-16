import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared.module';
import { starWarsApiModel } from 'src/app/utils/models';
import { InformationComponent } from './information.component';

describe('Confirmation Dialog Component', () => {
  let component: InformationComponent;
  let fixture: ComponentFixture<InformationComponent>;
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InformationComponent],
      imports: [SharedModule],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: data,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de crearse correctamente', async(() => {
    expect(component).toBeTruthy();
  }));
});

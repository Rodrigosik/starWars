import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { StarwarsService } from 'src/app/core/services/starwars.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { starWarsApiModel } from 'src/app/utils/models';
import { HomeComponent } from './home.component';
import { InformationService } from './modals/information/information.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let starwarsService: StarwarsService;
  let informationService: InformationService;
  let httpClientSpy: { post: jasmine.Spy };
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HttpClientTestingModule, SharedModule],
      providers: [StarwarsService, InformationService],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    starwarsService = fixture.debugElement.injector.get(StarwarsService);
    informationService = fixture.debugElement.injector.get(InformationService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Creación del componente.', () => {
    expect(component).toBeTruthy();
  });

  it('Inicio del componente', () => {
    const spy = spyOn(starwarsService, 'getDataStarWars').and.callFake(() =>
      of([])
    );
    component.ngOnInit();
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('Abrir modal', () => {
    const spy = spyOn(component, 'openInformation').and.callThrough();
    component.openInformation(data);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });
});

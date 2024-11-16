import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { SwapiService } from './swapi.service';
import { Person, PersonResponse } from '../../models/people';
import { Starship, StarshipResponse } from '../../models/starship';
import { testPerson, testPerson2, testStarship, testStarship2 } from '../../test.fixtures';
import { provideHttpClient } from '@angular/common/http';

describe('GameService', () => {
  let service: SwapiService;
  let httpMock: HttpTestingController;

  const mockApiUrl = 'https://swapi.dev/api';

  const mockPeopleResponse: PersonResponse = {
    count: 82,
    previous: '',
    results: [testPerson],
    next: 'https://swapi.dev/api/people?page=2',
  };
  const mockStarshipsResponse: StarshipResponse = {
    count: 82,
    previous: '',
    results: [testStarship],
    next: 'https://swapi.dev/api/starships?page=2',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SwapiService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(SwapiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch all people', () => {
    const mockSecondPageResponse = {
      results: [testPerson2],
      next: null,
    };

    service.getAllPeople().subscribe((result) => {
      expect(result).toEqual([testPerson, testPerson2]);
    });

    const firstPageReq = httpMock.expectOne(`${mockApiUrl}/people`);
    expect(firstPageReq.request.method).toBe('GET');
    firstPageReq.flush(mockPeopleResponse);

    const secondPageReq = httpMock.expectOne(`${mockApiUrl}/people?page=2`);
    expect(secondPageReq.request.method).toBe('GET');
    secondPageReq.flush(mockSecondPageResponse);
  });

  it('should fetch all starships', () => {
    const mockSecondPageResponse = {
      results: [testStarship2],
      next: null,
    };

    service.getAllStarships().subscribe((result) => {
      expect(result).toEqual([testStarship, testStarship2]);
    });

    const firstPageReq = httpMock.expectOne(`${mockApiUrl}/starships`);
    expect(firstPageReq.request.method).toBe('GET');
    firstPageReq.flush(mockStarshipsResponse);

    const secondPageReq = httpMock.expectOne(`${mockApiUrl}/starships?page=2`);
    expect(secondPageReq.request.method).toBe('GET');
    secondPageReq.flush(mockSecondPageResponse);
  });
});

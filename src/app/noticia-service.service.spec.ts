import { TestBed, inject } from '@angular/core/testing';

import { NoticiaServiceService } from './noticia-service.service';

describe('NoticiaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoticiaServiceService]
    });
  });

  it('should ...', inject([NoticiaServiceService], (service: NoticiaServiceService) => {
    expect(service).toBeTruthy();
  }));
});

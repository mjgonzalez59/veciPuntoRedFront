/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PuntoRedService } from './punto-red.service';

describe('Service: PuntoRed', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PuntoRedService]
    });
  });

  it('should ...', inject([PuntoRedService], (service: PuntoRedService) => {
    expect(service).toBeTruthy();
  }));
});

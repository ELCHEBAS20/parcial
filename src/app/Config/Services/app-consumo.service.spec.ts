import { TestBed } from '@angular/core/testing';

import { AppConsumoService } from './app-consumo.service';

describe('AppConsumoService', () => {
  let service: AppConsumoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppConsumoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

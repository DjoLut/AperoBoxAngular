import { TestBed } from '@angular/core/testing';

import { LigneProduitService } from './ligne-produit.service';

describe('LigneProduitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LigneProduitService = TestBed.get(LigneProduitService);
    expect(service).toBeTruthy();
  });
});

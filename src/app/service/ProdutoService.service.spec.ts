/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProdutoServiceService } from './ProdutoService.service';

describe('Service: ProdutoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProdutoServiceService]
    });
  });

  it('should ...', inject([ProdutoServiceService], (service: ProdutoServiceService) => {
    expect(service).toBeTruthy();
  }));
});

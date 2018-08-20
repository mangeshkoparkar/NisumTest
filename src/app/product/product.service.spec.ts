// Angular
import { TestBed, inject } from '@angular/core/testing';

// MyApp
import { ProductService } from './product.service';

describe('ProductserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService]
    });
  });

  it('should be created', inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy();
  }));
});

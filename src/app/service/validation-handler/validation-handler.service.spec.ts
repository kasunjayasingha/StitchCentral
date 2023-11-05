import { TestBed } from '@angular/core/testing';

import { ValidationHandlerService } from './validation-handler.service';

describe('ValidationHandlerService', () => {
  let service: ValidationHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidationHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { QuestionPoolService } from './question-pool.service';

describe('QuestionPoolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionPoolService]
    });
  });

  it('should be created', inject([QuestionPoolService], (service: QuestionPoolService) => {
    expect(service).toBeTruthy();
  }));
});

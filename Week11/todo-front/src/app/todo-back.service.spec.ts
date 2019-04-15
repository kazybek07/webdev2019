import { TestBed } from '@angular/core/testing';

import { TodoBackService } from './todo-back.service';

describe('TodoBackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoBackService = TestBed.get(TodoBackService);
    expect(service).toBeTruthy();
  });
});

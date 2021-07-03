import { TestBed, async, inject } from '@angular/core/testing';

import { CartGuardGuard } from './cart-guard.guard';

describe('CartGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartGuardGuard]
    });
  });

  it('should ...', inject([CartGuardGuard], (guard: CartGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { FixturesDataResolver } from './fixtures-data.resolver';

describe('FixturesDataResolver', () => {
  let resolver: FixturesDataResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(FixturesDataResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

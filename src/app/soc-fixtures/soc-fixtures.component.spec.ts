import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocFixturesComponent } from './soc-fixtures.component';

describe('SocFixturesComponent', () => {
  let component: SocFixturesComponent;
  let fixture: ComponentFixture<SocFixturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocFixturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocFixturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

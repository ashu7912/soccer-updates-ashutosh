import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocDashboardComponent } from './soc-dashboard.component';

describe('SocDashboardComponent', () => {
  let component: SocDashboardComponent;
  let fixture: ComponentFixture<SocDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

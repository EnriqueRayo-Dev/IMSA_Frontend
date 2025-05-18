import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDeSolicitudesComponent } from './dashboard-de-solicitudes.component';

describe('DashboardDeSolicitudesComponent', () => {
  let component: DashboardDeSolicitudesComponent;
  let fixture: ComponentFixture<DashboardDeSolicitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardDeSolicitudesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardDeSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

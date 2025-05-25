import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabInfoGeneralComponent } from './tab-info-general.component';

describe('TabInfoGeneralComponent', () => {
  let component: TabInfoGeneralComponent;
  let fixture: ComponentFixture<TabInfoGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabInfoGeneralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabInfoGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

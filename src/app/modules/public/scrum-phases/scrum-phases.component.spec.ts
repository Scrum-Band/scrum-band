import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumPhasesComponent } from './scrum-phases.component';

describe('ScrumPhasesComponent', () => {
  let component: ScrumPhasesComponent;
  let fixture: ComponentFixture<ScrumPhasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrumPhasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrumPhasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbLightSwitcherComponent } from './sb-light-switcher.component';

describe('SbLightSwitcherComponent', () => {
  let component: SbLightSwitcherComponent;
  let fixture: ComponentFixture<SbLightSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbLightSwitcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SbLightSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

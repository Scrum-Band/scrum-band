import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbBackgroundComponent } from './sb-background.component';

describe('SbBackgroundComponent', () => {
  let component: SbBackgroundComponent;
  let fixture: ComponentFixture<SbBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbBackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SbBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbToolbarComponent } from './sb-toolbar.component';

describe('SbToolbarComponent', () => {
  let component: SbToolbarComponent;
  let fixture: ComponentFixture<SbToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SbToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

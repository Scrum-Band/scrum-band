import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbSimpleDialogComponent } from './sb-simple-dialog.component';

describe('SbSimpleDialogComponent', () => {
  let component: SbSimpleDialogComponent;
  let fixture: ComponentFixture<SbSimpleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbSimpleDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SbSimpleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbSidenavComponent } from './sb-sidenav.component';

describe('SbSidenavComponent', () => {
  let component: SbSidenavComponent;
  let fixture: ComponentFixture<SbSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbSidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SbSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

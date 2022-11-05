import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbLangSelectorComponent } from './sb-lang-selector.component';

describe('SbLangSelectorComponent', () => {
  let component: SbLangSelectorComponent;
  let fixture: ComponentFixture<SbLangSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbLangSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SbLangSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndNoteComponent } from './end-note.component';

describe('EndNoteComponent', () => {
  let component: EndNoteComponent;
  let fixture: ComponentFixture<EndNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

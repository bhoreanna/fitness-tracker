import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopTraningComponent } from './stop-traning.component';

describe('StopTraningComponent', () => {
  let component: StopTraningComponent;
  let fixture: ComponentFixture<StopTraningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopTraningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopTraningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

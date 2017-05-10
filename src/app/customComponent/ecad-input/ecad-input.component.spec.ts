import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcadInputComponent } from './ecad-input.component';

describe('EcadInputComponent', () => {
  let component: EcadInputComponent;
  let fixture: ComponentFixture<EcadInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcadInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcadInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCoprodComponent } from './form-coprod.component';

describe('FormCoprodComponent', () => {
  let component: FormCoprodComponent;
  let fixture: ComponentFixture<FormCoprodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCoprodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCoprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

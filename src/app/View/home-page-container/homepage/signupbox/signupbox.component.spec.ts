import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupboxComponent } from './signupbox.component';

describe('SignupboxComponent', () => {
  let component: SignupboxComponent;
  let fixture: ComponentFixture<SignupboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveValidateComponent } from './reactive-validate.component';

describe('ReactiveValidateComponent', () => {
  let component: ReactiveValidateComponent;
  let fixture: ComponentFixture<ReactiveValidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveValidateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewWorkerComponent } from './form-new-worker.component';

describe('FormNewWorkerComponent', () => {
  let component: FormNewWorkerComponent;
  let fixture: ComponentFixture<FormNewWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormNewWorkerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNewWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcomComponent } from './addcom.component';

describe('AddcomComponent', () => {
  let component: AddcomComponent;
  let fixture: ComponentFixture<AddcomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddcomComponent]
    });
    fixture = TestBed.createComponent(AddcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

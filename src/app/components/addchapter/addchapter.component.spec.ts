import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddchapterComponent } from './addchapter.component';

describe('AddchapterComponent', () => {
  let component: AddchapterComponent;
  let fixture: ComponentFixture<AddchapterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddchapterComponent]
    });
    fixture = TestBed.createComponent(AddchapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

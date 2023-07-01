import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzesDetailsComponent } from './quizzes-details.component';

describe('QuizzesDetailsComponent', () => {
  let component: QuizzesDetailsComponent;
  let fixture: ComponentFixture<QuizzesDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizzesDetailsComponent]
    });
    fixture = TestBed.createComponent(QuizzesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

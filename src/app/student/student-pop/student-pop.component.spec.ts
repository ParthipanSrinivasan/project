import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPopComponent } from './student-pop.component';

describe('StudentPopComponent', () => {
  let component: StudentPopComponent;
  let fixture: ComponentFixture<StudentPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentPopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

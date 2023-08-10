import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListComponet } from './student-list.component';

describe('StudentListComponet', () => {
  let component: StudentListComponet
  let fixture: ComponentFixture<StudentListComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentListComponet ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentListComponet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

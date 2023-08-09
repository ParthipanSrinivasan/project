import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentaddComponet } from './student-add.component';

describe('StudentaddComponet', () => {
  let component: StudentaddComponet
  let fixture: ComponentFixture<StudentaddComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentaddComponet ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentaddComponet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

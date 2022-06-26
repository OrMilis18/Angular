import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDetalisComponent } from './edit-detalis.component';

describe('EditDetalisComponent', () => {
  let component: EditDetalisComponent;
  let fixture: ComponentFixture<EditDetalisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDetalisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

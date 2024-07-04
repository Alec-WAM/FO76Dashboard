import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNukeDialogComponent } from './add-nuke-dialog.component';

describe('AddNukeDialogComponent', () => {
  let component: AddNukeDialogComponent;
  let fixture: ComponentFixture<AddNukeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNukeDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNukeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

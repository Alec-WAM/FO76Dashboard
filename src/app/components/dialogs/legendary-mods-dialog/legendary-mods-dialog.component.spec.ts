import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendaryModsDialogComponent } from './legendary-mods-dialog.component';

describe('LegendaryModsDialogComponent', () => {
  let component: LegendaryModsDialogComponent;
  let fixture: ComponentFixture<LegendaryModsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LegendaryModsDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegendaryModsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

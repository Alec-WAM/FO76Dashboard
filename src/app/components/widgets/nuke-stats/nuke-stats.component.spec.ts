import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NukeStatsComponent } from './nuke-stats.component';

describe('NukeStatsComponent', () => {
  let component: NukeStatsComponent;
  let fixture: ComponentFixture<NukeStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NukeStatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NukeStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

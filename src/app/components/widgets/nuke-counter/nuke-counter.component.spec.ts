import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NukeCounterComponent } from './nuke-counter.component';

describe('NukeCounterComponent', () => {
  let component: NukeCounterComponent;
  let fixture: ComponentFixture<NukeCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NukeCounterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NukeCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

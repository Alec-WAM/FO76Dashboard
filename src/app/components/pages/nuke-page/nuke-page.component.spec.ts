import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NukePageComponent } from './nuke-page.component';

describe('NukePageComponent', () => {
  let component: NukePageComponent;
  let fixture: ComponentFixture<NukePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NukePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NukePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

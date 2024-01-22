import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldMapComponent } from './world.component';

describe('WorldComponent', () => {
  let component: WorldMapComponent;
  let fixture: ComponentFixture<WorldMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorldMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorldMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

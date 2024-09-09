import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherblogComponent } from './otherblog.component';

describe('OtherblogComponent', () => {
  let component: OtherblogComponent;
  let fixture: ComponentFixture<OtherblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherblogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

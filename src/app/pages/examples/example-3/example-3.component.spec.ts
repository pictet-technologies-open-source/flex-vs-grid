import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example3Component } from './example-3.component';

describe('Example3Component', () => {
  let component: Example3Component;
  let fixture: ComponentFixture<Example3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Example3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

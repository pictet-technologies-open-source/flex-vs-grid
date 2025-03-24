import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example6Component } from './example-6.component';

describe('Example6Component', () => {
  let component: Example6Component;
  let fixture: ComponentFixture<Example6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Example6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

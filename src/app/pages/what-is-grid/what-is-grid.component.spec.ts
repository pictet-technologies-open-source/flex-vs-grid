import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsGridComponent } from './what-is-grid.component';

describe('WhatIsGridComponent', () => {
  let component: WhatIsGridComponent;
  let fixture: ComponentFixture<WhatIsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatIsGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatIsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

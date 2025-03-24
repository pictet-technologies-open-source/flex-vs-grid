import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsFlexboxComponent } from './what-is-flexbox.component';

describe('WhatIsFlexboxComponent', () => {
  let component: WhatIsFlexboxComponent;
  let fixture: ComponentFixture<WhatIsFlexboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatIsFlexboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatIsFlexboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

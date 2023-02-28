import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSobreMiComponent } from './section-sobre-mi.component';

describe('SectionSobreMiComponent', () => {
  let component: SectionSobreMiComponent;
  let fixture: ComponentFixture<SectionSobreMiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSobreMiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSobreMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

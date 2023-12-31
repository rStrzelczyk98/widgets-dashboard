import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTemplateComponent } from './widget-template.component';

describe('WidgetTemplateComponent', () => {
  let component: WidgetTemplateComponent;
  let fixture: ComponentFixture<WidgetTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetTemplateComponent]
    });
    fixture = TestBed.createComponent(WidgetTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

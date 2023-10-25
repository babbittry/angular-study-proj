import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbcodeEditorComponent } from './bbcode-editor.component';

describe('BbcodeEditorComponent', () => {
  let component: BbcodeEditorComponent;
  let fixture: ComponentFixture<BbcodeEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BbcodeEditorComponent]
    });
    fixture = TestBed.createComponent(BbcodeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

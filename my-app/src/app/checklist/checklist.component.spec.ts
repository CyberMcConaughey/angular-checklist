import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsrBPMCheckList } from './checklist.component';

describe('UsrBPMCheckList', () => {
  let component: UsrBPMCheckList;
  let fixture: ComponentFixture<UsrBPMCheckList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsrBPMCheckList]
    }).compileComponents();

    fixture = TestBed.createComponent(UsrBPMCheckList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
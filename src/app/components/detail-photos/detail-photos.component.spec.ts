import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPhotosComponent } from './detail-photos.component';

describe('DetailPhotosComponent', () => {
  let component: DetailPhotosComponent;
  let fixture: ComponentFixture<DetailPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

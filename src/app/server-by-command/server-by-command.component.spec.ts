import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerByCommandComponent } from './server-by-command.component';

describe('ServerByCommandComponent', () => {
  let component: ServerByCommandComponent;
  let fixture: ComponentFixture<ServerByCommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerByCommandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerByCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

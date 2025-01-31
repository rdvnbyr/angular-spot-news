import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicHeadlinesComponent } from './topic-headlines.component';

describe('TopicHeadlinesComponent', () => {
  let component: TopicHeadlinesComponent;
  let fixture: ComponentFixture<TopicHeadlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicHeadlinesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicHeadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

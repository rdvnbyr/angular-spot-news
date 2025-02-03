import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  imports: [],
  templateUrl: './scroll-to-top.component.html',
  styleUrl: './scroll-to-top.component.scss'
})
export class ScrollToTopComponent implements OnInit {
  @ViewChild('scrollToTopBtn') scrollToTopBtn: any;

  ngOnInit() {
    // on scroll
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        this.scrollToTopBtn.style.display = 'block';
      } else {
        this.scrollToTopBtn.style.display = 'none';
      }
    });
  }

  onScrollToTop() {
    // scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

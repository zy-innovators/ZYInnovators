import { Directive, ElementRef, OnInit, OnDestroy, input } from '@angular/core';

@Directive({
  selector: '[zyAnimateOnScroll]',
  standalone: true
})
export class AnimateOnScrollDirective implements OnInit, OnDestroy {
  animationClass = input<string>('revealed', { alias: 'zyAnimateOnScroll' });
  threshold = input<number>(0.15);
  delay = input<number>(0);

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const className = this.animationClass() || 'revealed';
            if (this.delay()) {
              setTimeout(() => {
                this.el.nativeElement.classList.add(className);
              }, this.delay());
            } else {
              this.el.nativeElement.classList.add(className);
            }
            this.observer.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: this.threshold() }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

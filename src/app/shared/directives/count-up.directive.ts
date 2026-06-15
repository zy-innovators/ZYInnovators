import { Directive, ElementRef, OnInit, OnDestroy, input, effect } from '@angular/core';

@Directive({
  selector: '[zyCountUp]',
  standalone: true
})
export class CountUpDirective implements OnInit, OnDestroy {
  targetValue = input.required<number>({ alias: 'zyCountUp' });
  duration = input<number>(2000);
  suffix = input<string>('');

  private observer!: IntersectionObserver;
  private hasAnimated = false;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.textContent = '0' + this.suffix();

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.hasAnimated = true;
            this.animate();
            this.observer.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: 0.3 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  private animate(): void {
    const target = this.targetValue();
    const duration = this.duration();
    const suffix = this.suffix();
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);

      this.el.nativeElement.textContent = current.toLocaleString() + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

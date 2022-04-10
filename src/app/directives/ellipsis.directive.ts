import {AfterViewInit, Directive, ElementRef, Inject, Input, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Directive({
  selector: '[appEllipsis]'
})
export class EllipsisDirective implements AfterViewInit {

  @Input() ellipsisChar = '…';
  @Input() vrmEllipsis = 10;

  // tslint:disable-next-line:ban-types
  constructor(private el: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) { }

  public ngAfterViewInit(): void {
    const isBrowser = isPlatformBrowser(this.platformId);
    if (isBrowser) {
      this.clipText();
    }
  }

  private clipText(): void {
    const el: HTMLElement = this.el.nativeElement;
    if (el.innerText.length > this.vrmEllipsis) {
      const text = el.innerText.slice(0, this.vrmEllipsis);
      el.innerText = `${text}${this.ellipsisChar}`;
    }
  }
}

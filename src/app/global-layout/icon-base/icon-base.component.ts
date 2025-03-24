import { Component, ElementRef, inject, input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-icon-base',
  standalone: true,
  imports: [],
  template: '',
  styles: ':host { display: contents }'
})
export class IconBaseComponent {
    private elementRef = inject(ElementRef);
    private document = inject(DOCUMENT);
    private httpClient = inject(HttpClient);

    src = input.required<string>();
    size = input<string | number>(16);

    constructor() {
        toObservable(this.src).pipe(
            takeUntilDestroyed(),
            switchMap((src) => this.httpClient.get(src, {responseType: 'text'})))
            .subscribe((value) => {
                this.elementRef.nativeElement.innerHTML = this.createIcon(value)?.outerHTML;
            });
    }

    createIcon(value: string): SVGElement | null {
        const div = this.document.createElement('div');
        div.innerHTML = value;
        const svg = div.querySelector('svg');
        if (!svg) {
            console.error("Icon not found");
        } else {
            const size = this.size().toString();
            svg.setAttribute('width', size);
            svg.setAttribute('height', size);
        }
        return svg;
    }

}

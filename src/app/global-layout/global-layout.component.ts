import { Component, HostListener, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { IconBaseComponent } from './icon-base/icon-base.component';

export type Context = {
    url: string;
    subTitle: string;
}

@Component({
  selector: 'app-global-layout',
  imports: [
      RouterOutlet,
      RouterLink,
      IconBaseComponent
  ],
  templateUrl: './global-layout.component.html',
  styleUrl: './global-layout.component.less'
})
export class GlobalLayoutComponent {

    private router = inject(Router);

    previousContext?: Context;
    context?: Context;
    nextContext?: Context;

    contexts: Context[] = [
        {
            url: '/introduction',
            subTitle: '3, 2, 1... GO!',
        },
        {
            url: '/summary',
            subTitle: 'Summary',
        },
        {
            url: '/what-is-flexbox',
            subTitle: 'What is Flexbox?',
        },
        {
            url: '/what-is-grid',
            subTitle: 'What is Grid?',
        },
        {
            url: '/examples/1',
            subTitle: 'Example 1 (Layout 3 columns)',
        },
        {
            url: '/examples/2',
            subTitle: 'Example 2 (Navigation bar)',
        },
        {
            url: '/examples/3',
            subTitle: 'Example 3 (List of tags)',
        },
        {
            url: '/examples/4',
            subTitle: 'Example 4 (Responsive dashboard like FrontGate)',
        },
        {
            url: '/examples/5',
            subTitle: 'Example 5 (Form)',
        },
        {
            url: '/examples/6',
            subTitle: 'Example 5 (Application layout)',
        },
        {
            url: '/conclusion',
            subTitle: 'Conclusion'
        },
        {
            url: '/questions',
            subTitle: 'Questions',
        },
    ];

    constructor() {
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe((event: NavigationEnd) => {
                this.context = this.contexts.find(item => item.url === event.urlAfterRedirects);
                if (this.context) {
                    const currentContextIndex = this.contexts.indexOf(this.context);
                    this.previousContext = currentContextIndex === 0 ? undefined : this.contexts[currentContextIndex - 1];
                    this.nextContext = currentContextIndex === (this.contexts.length - 1) ? undefined : this.contexts[currentContextIndex + 1];
                }
            });
    }

    @HostListener('window:keydown', ['$event'])
    onKeyDown(event: KeyboardEvent): void {
        switch (event.key) {
            case 'ArrowRight':
                const nextUrl = this.nextContext?.url;
                if (nextUrl) {
                    this.router.navigateByUrl(nextUrl);
                }
                break;
            case "ArrowLeft":
                const prevUrl = this.previousContext?.url;
                if (prevUrl) {
                    this.router.navigateByUrl(prevUrl);
                }
                break;
            default:
                break;
        }
    }

}

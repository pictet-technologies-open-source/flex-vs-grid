import { Component, HostListener, inject } from '@angular/core';
import { IconBaseComponent } from '../../../global-layout/icon-base/icon-base.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-example-6',
    imports: [
        IconBaseComponent
    ],
  templateUrl: './example-6.component.html',
  styleUrl: './example-6.component.less'
})
export class Example6Component {

    private router = inject(Router);

    numbers: number[] = Array.from({ length: 10 }, (_, i) => i + 1);

    readonly previousUrl = '/examples/5';
    readonly nextUrl = '/conclusion';

    @HostListener('window:keydown', ['$event'])
    onKeyDown(event: KeyboardEvent): void {
        switch (event.key) {
            case 'ArrowRight':
                this.router.navigateByUrl(this.nextUrl);
                break;
            case "ArrowLeft":
                this.router.navigateByUrl(this.previousUrl);
                break;
            default:
                break;
        }
    }

}

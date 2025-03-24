import { Component, HostListener, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotificationComponent } from './notification/notification.component';
import { NotificationService } from './notification/notification.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NotificationComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.less'
})
export class AppComponent {
    title = 'flex-vs-grid';

    notificationService = inject(NotificationService);

    @HostListener('window:keydown', ['$event'])
    onKeyDown(event: KeyboardEvent): void {
        switch (event.key) {
            case '1':
                this.notificationService.addNotification('margin: auto', 'Use <code>margin: auto;</code> to isolate the element from the others.');
                break;
            case '2':
                this.notificationService.addNotification('Flexbox / Grid editor', 'In the Chrome console, right after <code>display: flex;</code> property you can access to the <strong>Flexbox editor</strong>. The same feature exist also for grid.');
                break;
            case '3':
                this.notificationService.addNotification('Flex / Grid browser container color', 'To change the color of your Flex / Grid container color, go to <strong>Browser console > Layout tab</strong> and pick the color you wants.');
                break;
            case '4':
                this.notificationService.addNotification('Flexbox ≠ 1D - Grid ≠ 2D', 'It’s wrong to see Flexbox as for 1D layouts and Grid for 2D layouts. It’s <strong>the way you control</strong> Flexbox that is 1D and Grid that is 2D.');
                break;
            case '5':
                this.notificationService.addNotification('Flex property', 'The default value for flex property is <code>flex: 0 1 auto;</code>.<br /><code>flex: 1;</code> = <code>flex: 1 1 <s>auto</s> 0;</code>');
                break;
            case '6':
                this.notificationService.addNotification('Flexbox + padding', 'The Flexbox algorithm <strong>first distributes the space</strong> between elements and then <strong>applies the padding afterward</strong>.');
                break;
            case '7':
                this.notificationService.addNotification('place-items vs place-content', '<strong>place-items</strong> modify the position of the items inside their cell <br/><strong>place-content</strong> modify the position of the grid inside the container.');
                break;
            default:
                break;
        }
    }

}

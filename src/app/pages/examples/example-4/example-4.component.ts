import { Component } from '@angular/core';
import { IconBaseComponent } from '../../../global-layout/icon-base/icon-base.component';

@Component({
    selector: 'app-example-4',
    imports: [
        IconBaseComponent
    ],
    templateUrl: './example-4.component.html',
    styleUrl: './example-4.component.less'
})
export class Example4Component {
    barNumbers = Array.from({length: 12}, (_, i) => i + 1);

    protected readonly Math = Math;

    barChartData = [
        { month: 'JAN', value: this.getRandomValue() },
        { month: 'FEB', value: this.getRandomValue() },
        { month: 'MAR', value: this.getRandomValue() },
        { month: 'APR', value: this.getRandomValue() },
        { month: 'MAY', value: this.getRandomValue() },
        { month: 'JUN', value: this.getRandomValue() },
        { month: 'JUL', value: this.getRandomValue() },
        { month: 'AUG', value: this.getRandomValue() },
        { month: 'SEP', value: this.getRandomValue() },
        { month: 'OCT', value: this.getRandomValue() },
        { month: 'NOV', value: this.getRandomValue() },
        { month: 'DEC', value: this.getRandomValue() },
    ]

    getRandomValue(): number {
        return Math.floor(Math.random() * (200 - 25 + 1)) + 25;
    }
}

import { CommonModule } from '@angular/common';
import {
    AfterContentChecked,
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Input,
    ViewChild,
} from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'tt-icon',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent implements AfterViewInit, AfterContentChecked {
    @ViewChild('icon') icon!: ElementRef;

    iconClass!: string;

    constructor(private changeDetectorRef: ChangeDetectorRef) {}

    ngAfterViewInit(): void {
        if (this.icon.nativeElement && this.icon.nativeElement.textContent) {
            this.iconClass = this.icon.nativeElement.textContent;
            this.changeDetectorRef.detectChanges();
        }
    }

    ngAfterContentChecked(): void {
        if (this.icon && this.icon.nativeElement) {
            this.iconClass = this.icon.nativeElement.textContent;
            this.changeDetectorRef.detectChanges();
        }
    }
}

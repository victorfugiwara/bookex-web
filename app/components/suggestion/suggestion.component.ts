import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component ({
	selector: 'suggestion',
    host: {
        '(document:click)': 'handleClick($event)',
    },
    template: `
    	<input type="text" class="form-control" placeholder="{{inputPlaceHolder}}" [(ngModel)]="query" (keyup)="filter($event)" (blur)="handleBlur()">

        <div class="suggestions" *ngIf="filteredList.length > 0">
            <ul *ngFor="let itemList of filteredList; let idx = index" >
                <li [class.suggestion-selected]="idx == selectedIdx">
                    <a (click)="select(itemList)">{{formatItem(itemList)}}</a>
                </li>
            </ul>
        </div>
    	`

})
export class SuggestionComponent {

	@Input() dataList = [];
	@Input() showFields = '';
    @Input() inputPlaceHolder = '';
    @Input() query = '';
	@Output() selectItem = new EventEmitter();
	
	public filteredList = [];
	public elementRef;
    selectedIdx: number;

	constructor(myElement: ElementRef) {
        this.elementRef = myElement;
        this.selectedIdx = -1;
    }

    formatItem(item) {
        let show: string = '';
        let arrayFields = this.showFields.split(',');
        for (let i = 0; i < arrayFields.length; i++) {
            if (show != '') {
                show += ' - ';
            }
            show += item[arrayFields[i].trim()];
        }
        return show;
    }

	filter(event: any) {
        if (this.query && this.query != '') {
            this.filteredList = this.dataList.filter(function (el) {
                let baseValue = '';
                let arrayFields = this.showFields.split(',');
                for (let i = 0; i < arrayFields.length; i++) {
                    baseValue += el[arrayFields[i].trim()];
                }

                return baseValue.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
            }.bind(this));
        } else {
            this.filteredList = this.dataList;
        }

        if (this.filteredList.length > 0) {
            if (event.code == "ArrowDown" && this.selectedIdx < this.filteredList.length) {
                this.selectedIdx++;
            } else if (event.code == "ArrowUp" && this.selectedIdx >= 0) {
                this.selectedIdx--;
            } else if ( (event.code == "Enter" || event.code == "NumpadEnter") && this.selectedIdx >= 0) {
                this.select(this.filteredList[this.selectedIdx]);
            } else if (event.code == "Escape") {
                this.filteredList = [];
                this.selectedIdx = -1;
            }
        }
    }

    select(item) {
        this.query = this.formatItem(item);
        this.filteredList = [];
        this.selectedIdx = -1;
        this.selectItem.next(item);
    }

    handleBlur() {
        if (this.selectedIdx > -1) {
            this.select(this.filteredList[this.selectedIdx]);
        }
    }

    handleClick(event) {
        var clickedComponent = event.target;
        var inside = false;
        do {
            if (clickedComponent === this.elementRef.nativeElement) {
                inside = true;
            }
            clickedComponent = clickedComponent.parentNode;
        } while (clickedComponent);
        if (!inside) {
            this.filteredList = [];
        }
        this.selectedIdx = -1;
    }
}
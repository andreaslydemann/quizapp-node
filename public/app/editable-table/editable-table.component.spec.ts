/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Input } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EditableTableComponent } from './editable-table.component';

describe('EditableTableComponent', () => {
    let component: EditableTableComponent;
    let fixture: ComponentFixture<EditableTableComponent>;
    let tableDebugElement: DebugElement;
    let addRowButtonDebugElement: DebugElement;
    let table: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EditableTableComponent],
            imports: [ReactiveFormsModule, FormsModule],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EditableTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        tableDebugElement = fixture.debugElement.query(By.css('table'));
        addRowButtonDebugElement = fixture.debugElement.query(By.css('button'));
        table = tableDebugElement.nativeElement;
    });
});
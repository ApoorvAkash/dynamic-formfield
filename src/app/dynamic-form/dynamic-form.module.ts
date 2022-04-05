import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicFormComponent} from './dynamic-form.component';
import {FormButtonComponent} from './form-button/form-button.component';
import {FormInputComponent} from './form-input/form-input.component';
import {FormSelectComponent} from './form-select/form-select.component';
import {FormSelectSearchComponent} from './form-select-search/form-select-search.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DynamicFieldDirective} from '../directives/dynamic-field.directive';
import {MatButtonModule, MatDatepickerModule, MatInputModule, MatSelectModule, MatNativeDateModule} from '@angular/material';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {FormDatepickerComponent} from './form-datepicker/form-datepicker.component';

@NgModule({
	declarations: [
		DynamicFormComponent,
		DynamicFieldDirective,
		FormButtonComponent,
		FormInputComponent,
		FormSelectComponent,
		FormSelectSearchComponent,
		FormDatepickerComponent
	],
	imports: [
		CommonModule,
		MatButtonModule,
		MatSelectModule,
		MatInputModule,
		MatDatepickerModule,
		NgxMatSelectSearchModule,
		ReactiveFormsModule,
    MatNativeDateModule
	],
	exports: [
		DynamicFormComponent
	],
	entryComponents: [
		FormButtonComponent,
		FormInputComponent,
		FormSelectComponent,
		FormSelectSearchComponent,
		FormDatepickerComponent
	],
  providers: [  
    MatDatepickerModule,  
  ],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA,
		NO_ERRORS_SCHEMA
	]
})
export class DynamicFormModule {
}

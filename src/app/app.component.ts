import { Component, ViewChild, OnInit } from '@angular/core';
import {Validators} from '@angular/forms';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';

@Component({
  selector: 'newt-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
	config: any = [];
	@ViewChild(DynamicFormComponent,{static:true}) form: DynamicFormComponent;
  name = 'Angular';

	ngOnInit() {
    this.initQueryForm();
  }
  initQueryForm() {
		this.config = [ 
			[
				{
					type: 'input',
					name: 'fullName',
					placeholder: 'Full Name',
					validation: [],
					containerClass: 'col-3 kt-margin-bottom-10-mobile'
				},
				{
					type: 'input',
					name: 'mobile',
					placeholder: 'Mobile',
					validation: [],
					containerClass: 'col-3 kt-margin-bottom-10-mobile'
				},
				{
					type: 'input',
					name: 'city',
					placeholder: 'City',
					validation: [Validators.required],
					containerClass: 'col-3 kt-margin-bottom-10-mobile'
				},
				{
					type: 'datepicker',
					name: 'Datepicker',
					placeholder: 'datepicker',
					validation: [Validators.required],
					containerClass: 'col-3 kt-margin-bottom-10-mobile'
				},
				{
					type: 'button',
					label: 'SEARCH',
					name: 'submit',
					containerClass: 'col-md-12'
				}
			]
		];
	}
  submit(value: { [name: string]: any }) {
		console.log('value ',value)
	}
}

import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private formBuilder: FormBuilder) {  }

  public orderForm: FormGroup;



  ngOnInit() {
      this.orderForm = this.formBuilder.group({
        customerName: '',
        email: '',
        items: this.formBuilder.array([ this.createItem()])
      });
  }

 createItem(): FormGroup {
    return this.formBuilder.group({
      name: '',
      description: '',
      price: ''
    });
  }

   get items(): FormArray {
    return this.orderForm.get('items') as FormArray;
  };

  addItem(): void {
  this.items.push(this.createItem());
  }

  public OnSubmit(formValue: any) {
        console.log(formValue);
    }
}

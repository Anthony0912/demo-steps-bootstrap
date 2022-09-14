import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import SelfManagement from '../../interfaces/self-management.interface';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {

  @Input() nameComplete: string | undefined = '';
  @Output() handleOnEmitterPersonalInformation: EventEmitter<SelfManagement> = new EventEmitter<SelfManagement>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: this.nameComplete ?? ''
    });
  }

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]]
  });

  public inputIsValid(input: string): boolean | null {
    return this.myForm.controls[input].errors && this.myForm.controls[input].touched;
  }

  public onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    this.handleOnEmitterPersonalInformation.emit({
      lastStep: 2,
      stepSelected: 2,
      personalInformation: { name: this.name.value.trim() }
    })
    this.myForm.reset();
  }

  private get name(): AbstractControl {
    return this.myForm.get('name')!;
  }

}

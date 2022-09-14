import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import SelfManagement from '../../interfaces/self-management.interface';

@Component({
  selector: 'app-signatures',
  templateUrl: './signatures.component.html',
  styleUrls: ['./signatures.component.scss']
})
export class SignaturesComponent implements OnInit {

  @Input() nameComplete: string | undefined = '';
  @Output() handleOnEmitterSignatures: EventEmitter<SelfManagement> = new EventEmitter<SelfManagement>();

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
    this.handleOnEmitterSignatures.emit({
      lastStep: 5,
      stepSelected: 5,
      signature: { name: this.name.value.trim() }
    })
    this.myForm.reset();
  }

  private get name(): AbstractControl {
    return this.myForm.get('name')!;
  }


}

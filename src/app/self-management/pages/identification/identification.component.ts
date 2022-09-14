import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import SelfManagement from '../../interfaces/self-management.interface';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.scss']
})
export class IdentificationComponent implements OnInit {

  @Input() cardIdentification: number | undefined = 0;
  @Output() handleOnEmitterIdentification: EventEmitter<SelfManagement> = new EventEmitter<SelfManagement>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset({
      identification: this.cardIdentification ?? ''
    });
  }

  myForm: FormGroup = this.fb.group({
    identification: ['', [Validators.required, Validators.minLength(3)]]
  });

  public inputIsValid(input: string): boolean | null {
    return this.myForm.controls[input].errors && this.myForm.controls[input].touched;
  }

  public onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    this.handleOnEmitterIdentification.emit({
      lastStep: 4,
      stepSelected: 4,
      identification: { cardIdentification: this.identification.value.trim() }
    })
    this.myForm.reset();
  }

  private get identification(): AbstractControl {
    return this.myForm.get('identification')!;
  }

}

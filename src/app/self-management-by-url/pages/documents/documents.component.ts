import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import SelfManagement from '../../interfaces/self-management.interface';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  @Input() documentName: string | undefined = '';
  @Output() handleOnEmitterDocument: EventEmitter<SelfManagement> = new EventEmitter<SelfManagement>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: this.documentName ?? ''
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
    this.handleOnEmitterDocument.emit({
      lastStep: 3,
      stepSelected: 3,
      document: { documentName: this.name.value.trim() }
    })
    this.myForm.reset();
  }

  private get name(): AbstractControl {
    return this.myForm.get('name')!;
  }


}

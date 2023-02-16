import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  datos: FormGroup;
  confirmacion: string = "";


  constructor(
    private contactService: ContactService
  ) {
    this.datos = new FormGroup({
      nameContact: new FormControl('', [
        Validators.required
      ]),
      emailContact: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      subjectContact: new FormControl('', [
        Validators.required
      ]),
      textContact: new FormControl('', [
        Validators.required
      ])

    })
  }

  ngOnInit(): void {
  }

  getData(): void {
    console.log(this.datos.value)
    this.datos.reset();
  }


  async envioCorreo(): Promise<any> {
    this.confirmacion = ""
    let params = {
      nombre: this.datos.value.nameContact,
      email: this.datos.value.emailContact,
      asunto: this.datos.value.subjectContact,
      mensaje: this.datos.value.textContact


    }

    let response = await this.contactService.sendEmail(params)
    if (response.success) {
      this.confirmacion = response.success
    }

  }
}

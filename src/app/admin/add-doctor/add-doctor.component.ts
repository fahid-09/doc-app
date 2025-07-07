import { Component } from '@angular/core';
import { doctor } from 'src/app/data-types';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss'],
})
export class AddDoctorComponent {
  uploadImage: any;
  constructor(private docService: DoctorService) {}

  createDoctor(data: doctor) {
    data.image = this.uploadImage;
    this.docService.addDoctor(data);
  }

  onFileSelected(e: any) {
    if (e.target.files[0] != null) {
      var reader = new FileReader();
      reader.onload = (e: any) => {
        this.uploadImage = e.target.result;
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }
}

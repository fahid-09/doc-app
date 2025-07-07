import { Component } from '@angular/core';
import { DoctorService } from '../services/doctor.service';
import { doctor } from '../data-types';
import {
  faTrash,
  faPen,
  faEye,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-all-doctors',
  templateUrl: './all-doctors.component.html',
  styleUrls: ['./all-doctors.component.scss'],
})
export class AllDoctorsComponent {
  constructor(private docService: DoctorService) {}
  noDoctors : string = "";
  deleteIcon = faTrash;
  editIcon = faPen;
  viewIcon = faEye;
  topDoctors: doctor[] = [];

  ngOnInit() {
    this.allDoctor();
  }
  allDoctor() {
    this.docService.getAllDoctors().subscribe((allDoctors) => {
      this.topDoctors = allDoctors;
      console.log('haye haye all doctors are', this.topDoctors);
    });
  }

  deleteDoctor(id: number) {
    this.docService.deleteDoctor(id).subscribe((result) => {
      if (result) {
        this.allDoctor();
      }
      // console.log("the deleted result is ", result);
    });
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { doctor } from 'src/app/data-types';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.scss'],
})
export class UpdateDoctorComponent {
  constructor(
    private docService: DoctorService,
    private route: ActivatedRoute, 
    private router: Router
  ) {}

  doctorData: doctor | undefined ;
  updateMessage: string | undefined;
  doctorImage: string | undefined;
  ngOnInit() {
    let docId = this.route.snapshot.paramMap.get('docId');
    // console.log("the id is", docId)
    docId &&
      this.docService.getUpdateDoctor(docId).subscribe((result) => {
        this.doctorData = result;
        console.log(this.doctorData);
      });
  }

  updatedoctor(data: doctor) {
    if (this.doctorData) {
      data.id = this.doctorData.id;
      this.doctorImage = data.image;
    }
     if (!data.image) {
      data.image = this.doctorData?.image || '';
    }
    this.docService.updateDoctor(data).subscribe((result) => {
      if (result) {
        this.updateMessage = 'Doctor Updated Successfully';
        this.router.navigate(['/all-doctors'])
      }
      setTimeout(()=>{
        this.updateMessage = undefined;
      },3000)
    });
  }
}

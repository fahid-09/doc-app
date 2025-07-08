import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { doctor } from 'src/app/data-types';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-view-doctor-profile',
  templateUrl: './view-doctor-profile.component.html',
  styleUrls: ['./view-doctor-profile.component.scss']
})
export class ViewDoctorProfileComponent {

  doctorDetails: doctor | undefined; 

constructor(private docService: DoctorService, private route: ActivatedRoute){}

ngOnInit(){
  let doctorId = this.route.snapshot.paramMap.get('docId');
  doctorId && this.docService.viewDoctorProfile(doctorId).subscribe((result)=>{
    this.doctorDetails = result;
  })
}
}

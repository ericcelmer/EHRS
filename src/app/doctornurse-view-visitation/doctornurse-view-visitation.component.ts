import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultationServiceService } from '../consultation-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-doctornurse-view-visitation',
	templateUrl: './doctornurse-view-visitation.component.html',
	styleUrls: ['./doctornurse-view-visitation.component.css']
})
export class DoctorNurseViewVisitationComponent implements OnInit {
	visitationData:any;

	constructor(private router: Router, private service: ConsultationServiceService, private fb: FormBuilder) { 
		
	}

	ngOnInit(){
		this.getDataFromApi();
	}

	getDataFromApi() {
		/*this.visitationData = [
			{
				patientid:"37f068aa-fc08-4499-a049-babe85fe96bf",
				visit_date:new Date("2022-05-13 11:24:46.408"),
				visit_reason:"Covid vaccine shot",
				symptoms:null,
				visit_summary:null
			},
			{
				patientid:"37f068aa-fc08-4499-a049-babe85fe96bf",
				visit_date:new Date("2022-05-13 15:24:46.408"),
				visit_reason:"Covid vaccine shot",
				symptoms:null,
				visit_summary:null
			}
		];
		return;*/
		//TODO replace with actual patient id
		this.service.getVisitationHistory("37f068aa-fc08-4499-a049-babe85fe96bf").subscribe(data =>{
			this.visitationData = data;
			this.displayVisitationHistory();
			console.log(this.visitationData);
			//TODO what do i do with this
		});
	}
	
	displayVisitationHistory() {

	}
}

import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Resident from '../Resident';
import { ResidentsService } from '../residents.service';

@Component({
  selector: 'app-resident-detail',
  templateUrl: './resident-detail.component.html',
  styleUrls: ['./resident-detail.component.css']
})
export class ResidentDetailComponent implements OnInit {

  resident: Resident | undefined;

  constructor(
    private route: ActivatedRoute, 
    private residentService : ResidentsService, 
    private location: Location) { }

  ngOnInit(): void {
    this.getResident();
  }

  getResident(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.residentService.getResident(id).subscribe(resident => this.resident = resident);
  }

  goBack(): void{
    this.location.back();
  }

}

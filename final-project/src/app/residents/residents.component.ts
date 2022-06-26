import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable} from 'rxjs';
import { switchMap } from "rxjs/operators";
import { RESIDENTS } from './dummy-data-residents';
import Resident from './Resident';
import { ResidentsService } from './residents.service';

@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.css']
})
export class ResidentsComponent implements OnInit {

  residents: Resident[] = [];
  
  constructor(private service:ResidentsService) { }

  ngOnInit(): void {
    this.getResidents();
  }

  getResidents(): void{
    this.service.getResidents().subscribe(residents => this.residents = residents);
  }

}



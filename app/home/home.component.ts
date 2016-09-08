import { Component, OnInit } from '@angular/core';
import { Location } from '/app/location';
import { LocationService } from '/app/location.service';
import { Router } from '@angular/router'; 


@Component({
  selector: 'hibt-home',
  template: `
    <h3> Places to Get There </h3>
    <ul class="locations">
      <li *ngFor="let location of locations" (click)="goToDetail(location)">
         <span class="badge">{{location.id}}</span> {{location.title}}
      </li>
    </ul>
    <button (click)="goBack()"> Back </button>
  `,
  styleUrls: ['app/home/homeStyle.css'],
  providers: [ LocationService]
})

export class HomeComponent implements OnInit {
    // array of locations 
    locations: Location[];

    constructor(private locationService: LocationService,private router: Router) { }

    // onSelect(selection: Location) : void {
    //     this.selectedLocation = selection;
    // }

    getLocations(): void {
        // pass locations variable to getLocations()promise method, and that passed locations variable hold 'locations' data
        // and that data is assigned to locations variable in this component i.e this.locations
        this.locationService.getLocations().then(locations => this.locations = locations);
    }

    goToDetail(location: Location): void {
        let link = ['/location-detail', location.id];
        this.router.navigate(link);
    }

    goBack(): void {
        window.history.back();
    }

    ngOnInit(): void {
        this.getLocations();
    }
}

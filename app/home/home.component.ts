import { Component } from '@angular/core';
import { Location } from '/app/location';
import { LocationService } from '/app/location.service';


@Component({
  selector: 'hibt-home',
  template: `
    <h3> Places to Get There </h3>
    <ul class="locations">
      <li *ngFor="let location of locations" (click)="onSelect(location)" [class.selected]="location===selectedLocation">
         <span class="badge">{{location.id}}</span> {{location.title}}
      </li>
    </ul>
    <location-detail [location]="selectedLocation"></location-detail>
  `,
  styleUrls: ['homeStyle.css'],
  providers: [ LocationService]
})

export class HomeComponent implements onInit {
    // array of locations 
    locations: Location[];
    // location that user select
    selectedLocation: Location;

    constructor(private locationService: LocationService) { }

    onSelect(selection: Location) : void {
        this.selectedLocation = selection;
    }

    getLocations(): void {
        // pass locations variable to getLocations()promise method, and that passed locations variable hold 'locations' data
        // and that data is assigned to locations variable in this component i.e this.locations
        this.locationService.getLocations().then(locations => this.locations = locations);
    }

    ngOnInit(): void {
        this.getLocations();
    }
}

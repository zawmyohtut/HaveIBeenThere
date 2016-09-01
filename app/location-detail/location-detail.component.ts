import { Component, Input } from '@angular/core';
import { Location } from '/app/location';

@Component({
  selector: 'location-detail',
  template: `
     <div *ngIf="location">
        <label>Your next destination : </label>
        <input [(ngModel)]="location.title">
        <input [(ngModel)]="location.description">
    </div>
  `
})
export class LocationDetailComponent {
    @Input()
    location: Location;
}
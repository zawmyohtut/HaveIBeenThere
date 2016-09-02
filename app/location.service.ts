import { Injectable } from '@angular/core';
import { LOCATIONS } from '/app/mock-locations';
import { Location } from '/app/location'

@Injectable()
export class LocationService {

    getLocations(): Promise<Location[]> {
        return Promise.resolve(LOCATIONS);
    } 
}
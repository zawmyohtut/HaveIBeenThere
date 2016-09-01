import { Component } from '@angular/core';
import { Location } from '/app/location';

// mocked array of locations data
const LOCATIONS: Location[] = [
  {
      id: 1,
      title: 'Bagan',
      description: 'Ancient City - heart of Burma',
      completed: false,
      author: 'David Van Gaal',
      photolink: 'https://www.google.com.au/search?q=bagan&biw=1440&bih=903&source=lnms&tbm=isch&sa=X&ved=0ahUKEwic1OrM0erOAhWEGpQKHTruCmQQ_AUICCgB#tbm=isch&q=bagan+sunset&imgrc=wlFhWoLzPq0eVM%3A',
  },
  {
      id: 2,
      title: 'Inn Lay',
      description: 'Floating City for Burma',
      completed: false,
      author: 'John Craig',      
      photolink: 'https://www.google.com.au/search?q=inn+lay&biw=1440&bih=903&tbm=isch&imgil=zTKfNLH9l2x1lM%253A%253BMFMZah-eseCGRM%253Bhttp%25253A%25252F%25252Fwww.myanmarfantastictravel.com%25252Finnlay-lake%25252F&source=iu&pf=m&fir=zTKfNLH9l2x1lM%253A%252CMFMZah-eseCGRM%252C_&usg=__ddLy60bbVv2iaZOvjNkr-di9NoY%3D&ved=0ahUKEwib4ILx0erOAhWEJ5QKHfeoAMUQyjcIKA&ei=P0XGV9vEEITP0AT30YKoDA#imgrc=zTKfNLH9l2x1lM%3A',
  },
  {
      id: 3,
      title: 'Rangoon',
      description: 'The commercial city of Burma',
      completed: false,
      author: 'David Van Gaal',
      photolink: 'https://www.google.com.au/search?q=yangon&biw=1440&bih=903&tbm=isch&imgil=FuRGLHcT-1HdiM%253A%253BXvFqEHTpg2XCbM%253Bhttp%25253A%25252F%25252Faseanfic.org%25252F2015%25252Fevent%25252Faseanfic-yangon-2013%25252F&source=iu&pf=m&fir=FuRGLHcT-1HdiM%253A%252CXvFqEHTpg2XCbM%252C_&usg=__JqHBLQ7Vh3MZs4WASTrm_cgcMl0%3D&ved=0ahUKEwjBktKd1urOAhVBshQKHaovD0sQyjcIMw&ei=zknGV8HzI8HkUqrfvNgE#imgrc=FuRGLHcT-1HdiM%3A',
  },
  {
     id: 4,
      title: 'Mandalay',
      description: 'The residing city of last Burmese King',
      completed: false,
      author: 'Juan Guadarao',
      photolink: 'https://www.google.com.au/search?q=yangon&biw=1440&bih=903&tbm=isch&imgil=FuRGLHcT-1HdiM%253A%253BXvFqEHTpg2XCbM%253Bhttp%25253A%25252F%25252Faseanfic.org%25252F2015%25252Fevent%25252Faseanfic-yangon-2013%25252F&source=iu&pf=m&fir=FuRGLHcT-1HdiM%253A%252CXvFqEHTpg2XCbM%252C_&usg=__JqHBLQ7Vh3MZs4WASTrm_cgcMl0%3D&ved=0ahUKEwjBktKd1urOAhVBshQKHaovD0sQyjcIMw&ei=zknGV8HzI8HkUqrfvNgE#tbm=isch&q=manadalay+&imgrc=zh7s_AKX0T_wSM%3A',
  }

];

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
  styleUrls: ['homeStyle.css']
})

export class HomeComponent {
    // array of locations 
    locations = LOCATIONS;
    // location that user select
    selectedLocation: Location;

    onSelect(selection: Location) : void{
        this.selectedLocation = selection;
    }
}

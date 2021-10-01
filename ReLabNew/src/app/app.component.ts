import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server mappe';
  markerOptions: google.maps.MarkerOptions;
  markerOptions2: google.maps.MarkerOptions;
  //Aggiungiamo latitudine e longitudine di un luogo
  center : any;
  position : any;
  label :string;
  circleOptions: { fillColor: string; }; 
  circleOptions2: { fillColor: string; };
  constructor()
  {
    this.center={lat: 45.506738, lng: 9.190766};
    this.position = this.center;
    this.label = "ciao";
    this.circleOptions = {fillColor : 'red'}
    this.circleOptions2 = {fillColor : 'red'}

    let iconData : google.maps.Icon = {
      url:'./assets/img/cat_acrobat.ico',
      scaledSize : new google.maps.Size(60,60)
    }
  
      this.markerOptions = {icon:iconData}

   let iconData2 : google.maps.Icon = {
        url:'./assets/img/piccione.jpg',
        scaledSize : new google.maps.Size(60,60)
      }
    
        this.markerOptions2 = {icon:iconData2}

  }
  blue(){
    this.circleOptions = {fillColor : 'blue'}


  }
  green(){
    this.circleOptions = {fillColor : 'green'}
    

  }
  
  purple(){
    this.circleOptions = {fillColor : 'purple'}
    let iconData : google.maps.Icon = {
      url:'./assets/img/cat_acrobat.ico',
      scaledSize : new google.maps.Size(60,60)
 }
  
this.markerOptions = {icon:iconData}
  

  }
  
}

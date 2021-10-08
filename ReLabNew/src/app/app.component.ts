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
  markerOptions3: google.maps.MarkerOptions;
  vertices: google.maps.LatLngLiteral[];
  vertices2: google.maps.LatLngLiteral[];
  //Aggiungiamo latitudine e longitudine di un luogo
  center : any;
  position : any;
  label :string;
  circleOptions: { fillColor: string; }; 
  circleOptions2: { fillColor: string; };
  position2: { lat: number; lng: number; };
  position3: { lat: number; lng: number; };
  constructor()
  {
    
    
    this.center={lat: 45.506738, lng: 9.190766};

    this.vertices = [
      {  lat: this.center.lat + 0.001, lng: this.center.lng - 0.002 },
      {  lat: this.center.lat, lng: this.center.lng },
      {  lat: this.center.lat - 0.001, lng: this.center.lng - 0.002}
    ];
     this.vertices2 = [
      {  lat: 45.507338,  lng: 9.190766 },
      {  lat: 45.507338,  lng: 9.191966 },
      {  lat: 45.506038, lng: 9.1919666},
      {  lat: 45.506038, lng: 9.190766 },
    ];
    this.position = this.center;
    this.position2={lat: 45.507338, lng: 9.190766};
    this.position3={lat: 45.506038, lng: 9.190766};
    this.label = "ciao";
    this.circleOptions = {fillColor : 'red'}
    this.circleOptions2 = {fillColor : 'red'}

    let iconData : google.maps.Icon = {
      url:'./assets/img/cat_acrobat.ico',
      scaledSize : new google.maps.Size(60,60)
    }
  
      this.markerOptions = {icon:iconData}

   let iconData2 : google.maps.Icon = {
        url:'./assets/img/piccione.ico',
        scaledSize : new google.maps.Size(110,110)
      }
    
        this.markerOptions2 = {icon:iconData2}

    let iconData3 : google.maps.Icon = {
        url:'./assets/img/kebab.ico',
        scaledSize : new google.maps.Size(80,80)
        }
      
          this.markerOptions3 = {icon:iconData3}

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

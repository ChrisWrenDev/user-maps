export class Map {
  private googleMap: google.maps.Map; //cannot be reference outside of class
  constructor(id:string){
    this.googleMap = new google.maps.Map(document.getElementById(id) as HTMLElement, { zoom: 1, center: {lat: 0, lng: 0}});
  }
}

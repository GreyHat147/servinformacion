import { ElementRef, NgZone, OnInit, ViewChild, Component } from '@angular/core';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  @ViewChild('search') public searchElement: ElementRef;
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor(private mapsApiLoader: MapsAPILoader, private ngZone: NgZone) { }

  ngOnInit( ) {
    this.mapsApiLoader.load()
    .then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, { types: ["address"]});
      autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
            this.lat = place.geometry.location.lat();
            this.lng = place.geometry.location.lng();
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
          });
      });
    });
  }

  moveMarker(e) {
    this.lat = e.coords.lat;
    this.lng = e.coords.lng;
  }

}

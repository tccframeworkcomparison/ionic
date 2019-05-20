import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public latitude: any;
  public longitude: any;

  public loading: any;

  constructor(
    private geolocation: Geolocation,
    public loadingController: LoadingController
  ) {

  }

  getGeoLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
}

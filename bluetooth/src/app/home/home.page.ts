import { Component } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  toggle = false;

  constructor(public bluetoothSerial: BluetoothSerial) {
    this.checkBluetoothEnabled();
  }

  checkBluetoothEnabled() {
    this.bluetoothSerial.isEnabled()
      .then(success => {
        this.toggle = true;
      });
  }

  /*
   *Ia fazer ligar/desligar, mas não consegui encontrar para desligar 
   */
  OnOffBluetooth() {
   this.bluetoothSerial.enable()
      .then(success => {
        this.toggle = true;
      });
  }
}

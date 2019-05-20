import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    text = '';
    valueStorage = '';

    constructor(private storage: Storage) {
    }

    postStorage() {
      this.storage.set('texto', this.text)
      .then(() => {
        this.getStorage();
      });
    }

    async getStorage() {
      await this.storage.get('texto')
        .then((val) => {
          console.log(val)
          this.valueStorage = val;
        });
    }
}

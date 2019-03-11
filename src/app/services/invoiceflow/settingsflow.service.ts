import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()

export class SettingsFlowService {

    constructor(private storage: Storage) {}
    
    getData(key) {
        return this.storage.get(key).then((val) => {
            return val;
        });
    }
    setData(key, value) {
        this.storage.set(key, value);
    }
}
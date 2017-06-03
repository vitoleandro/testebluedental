import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class FirebaseService {

  constructor(public afDB: AngularFireDatabase) { }

  getObject(document) {
    return this.afDB.object(document);
  }

  getList(document) {
    return this.afDB.list(document);
  }

  addItem(document, item) {
    this.afDB.list(document).push(item);
  }

  remoteItem(document, key) {
    this.afDB.list(document).remove(key);
  }

  query(document, options) {
    return this.afDB.list(document, options);
  }

}

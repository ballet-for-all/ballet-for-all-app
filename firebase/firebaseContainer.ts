import firebase from 'firebase/compat'

import firebaseConfig from './firebaseConfig'

export class FirebaseContainer {
  // TODO(ghrud92): DB를 직접 사용하지 않고, client를 만들어서 사용하도록 수정
  private readonly db: firebase.firestore.Firestore

  constructor () {
    firebase.initializeApp(firebaseConfig())
    this.db = firebase.firestore()
  }
}

export const firebaseContainer = new FirebaseContainer()

import React, { useContext } from 'react'

import { firebaseContainer, FirebaseContainer } from './firebaseContainer'

const FirebaseContainerContext = React.createContext<FirebaseContainer>(firebaseContainer)

export const FirebaseProvider = FirebaseContainerContext.Provider

export function useFirebase () {
  return useContext(FirebaseContainerContext)
}

import { firestore } from './firebase'

export async function getProjects () {
   const snapshot = await firestore.collection("sites").get();
   const sites = snapshot.docs.map((docs) => docs.data());

   return(sites)
}

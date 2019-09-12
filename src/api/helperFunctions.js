//
// Helper functions
//
import firebase from 'firebase';

// const gotData = (data) => {
//   const scores = data.val();
//   const keys = Object.keys(scores);
//   return keys;
// };

export const addToDatabase = async (link, item) => {
  const database =  firebase.database();
  const ref = database.ref(link);
  await ref.set(item)
    .then(() => console.log('Item added to the database!'))
    .catch(err => console.log(err));
};

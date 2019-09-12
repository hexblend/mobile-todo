//
// Helper functions
//
import firebase from 'firebase';
const database = firebase.database();

export const addToDatabase = async (link, item) => {
  const ref = database.ref(link);
  await ref.set(item)
    .then(() => console.log('Item added to the database!'))
    .catch(err => console.log(err));
};

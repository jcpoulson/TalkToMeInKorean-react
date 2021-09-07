// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, setDoc, updateDoc, deleteField, getDoc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGD3vv6U02IMDL4qiYYDUE39Q9R8F7b9o",
  authDomain: "ttmik-backend.firebaseapp.com",
  projectId: "ttmik-backend",
  storageBucket: "ttmik-backend.appspot.com",
  messagingSenderId: "264774160710",
  appId: "1:264774160710:web:239b9d003c971e9e58d547"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const storage = getStorage(firebaseApp);


/*

  CRUD OPERATIONS FOR THE DATABASE

*/

/**
     * Returns the main level and lesson data, no authentication or parameters required
     * @retun {items} - An array containing the level and lesson data
*/

const getLevels = async () => {
  const items = []
  let data = await getDocs(collection(db, 'levels'))
  data.forEach((doc) => items.push(doc.data()));
  return items
}


/**
     * Adds a completely new level to the database
     * @return {levelData} - An object containing the lesson data, try and add at least one lesson object to avoid messy data
*/
const addLevel = async (level, levelData) => {
  await setDoc(doc(db, "levels", `level${level}`), levelData)
}


/**
     * Adds a lesson to a specified level
     * @param {level} - The selected level, you want to add a lesson to
     * @param {lesson} - the lesson number you would like to add, this will overwrite an existing lesson, SO BE CAREFUL
     * @param {data} - an object that contains the data for the lesson, the keys should be title, link and content
*/
const addLesson = (level, lesson, data) => {
  const fetchedlevel = doc(db, 'levels', `level${level}`);
  setDoc(fetchedlevel, {
    [`lesson${lesson}`]: {
      title: data.title,
      link: data.link,
      content: data.content
    }
  }, { merge: true })
}


/**
     * Deletes a lesson from a specified level
     * @param {level} - The selected level, you want to add a lesson to
     * @param {lesson} - the lesson number you would like to delete
*/
const deleteLesson = async (level, lesson) => {
  const fetchedLevel = doc(db, 'levels', `level${level}`);
  await updateDoc(fetchedLevel, {
    [`lesson${lesson}`]: deleteField()
  })
}


/* 

  USER AUTHENTICATION METHODS 

*/ 


/* SIGN IN METHOD */
const signIn = async (email, password) => {
    const preAuthUser = await signInWithEmailAndPassword(auth, email, password)
    const authenticatedUser = preAuthUser.user;
    
    const userRef = doc(db, "users", authenticatedUser.email);
    const userData = await getDoc(userRef);
    
    return userData.data()
}


/* SIGN UP METHOD */
const signUp = async (email, password, firstName, lastName) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
  const createdUser = await setDoc(doc(db, 'users', userCredential.user.email), {
    email: userCredential.user.email,
    firstName: firstName,
    lastName: lastName,
    picture: "/default/path"
  })
}


/* UPDATE USER METHOD */
const updateUser = async (email, firstName, lastName) => {
  const userRef = doc(db, 'users', email);

  await updateDoc(userRef, {
    firstName: firstName,
    lastName: lastName
  });
}


/* 

  STORAGE BUCKET OPERATIONS

*/


const uploadImage = async (photo, email) => {
  const userRef = doc(db, 'users', email);
  const imagesRef = ref(storage, '/images/' + photo.name + email);
  uploadBytes(imagesRef, photo).then((snapshot) => {
    getDownloadURL(imagesRef).then(data => {
      updateDoc(userRef, {
        picture: data
      })
    })
  });
}


export {
  getLevels,
  addLevel,
  addLesson,
  deleteLesson,
  signIn,
  signUp,
  updateUser,
  uploadImage
}
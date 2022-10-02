import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"

import {auth, db} from './app/firebase.js'
import { logInCheck } from "./app/loginCheck.js"
import { getDocs, collection} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"
import { setupPosts} from './app/postList.js'

import './app/signupForm.js'
import './app/signinForm.js'
import  './app/logout.js'
import './app/googleLogin.js'

onAuthStateChanged(auth, async (user)=> {

      if(user){
               const querySnapshot =  await getDocs(collection(db, 'post'))
               setupPosts(querySnapshot.docs)
        } else {
                setupPosts([])
      
              } 
        logInCheck(user)
})
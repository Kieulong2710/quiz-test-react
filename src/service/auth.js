import firebase from "../config/firebase-config";

const sociaMediaAuth =(provider)=>{
    return( firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
        return res.user;
    })
    .catch((er) =>{
        return er;
    }))
}
export default sociaMediaAuth;
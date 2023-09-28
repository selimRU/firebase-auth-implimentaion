import { GithubAuthProvider, getAuth } from "firebase/auth";
import { useState } from 'react'
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import app from "./App";



const LogIn = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    const providerGoogle = new GoogleAuthProvider()
    const providerGit = new GithubAuthProvider();
    const handleGoogleSignUp = () => {
        signInWithPopup(auth, providerGoogle)
            .then(res => {
                const loggedUser = res.user
                console.log(loggedUser);
                setUser(loggedUser)
            })
    }
    const handleGithubSignUp = () => {
        signInWithPopup(auth, providerGit)
            .then(res => {
                const loggedUser = res.user
                console.log(loggedUser);
                setUser(loggedUser)
            })
    }
    const handleGoogleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <h1 className=' text-2xl text-center mt-5'>Auth Implementaion</h1>
            <div className='mt-5 flex gap-4 justify-center'>
                {user ?

                    <button className=' bg-slate-500 px-5 py-3 rounded-md text-white' onClick={handleGoogleSignOut}>Sign Out</button>

                    :
                    <div>
                        <button className=' bg-slate-500 px-5 py-3 rounded-md text-white mr-4' onClick={handleGoogleSignUp}>Google Login</button>
                        <button className=' bg-slate-500 px-5 py-3 rounded-md text-white' onClick={handleGithubSignUp}>Github Login</button>
                    </div>
                }
            </div>

            <div className=' flex justify-center mt-10'>
                <div>
                    <img src={user?.photoURL} alt="" />
                    <p>{user?.displayName}</p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
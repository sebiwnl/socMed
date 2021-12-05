import { Main } from "next/document";
import { auth, googleAuthProvider} from '../lib/firebase';
import { useContext } from 'react';
import { UserContext } from '../lib/context';

export default function EnterPage({ }) {
    const { user, username } = useContext(UserContext)


    return (
        <main>
                {user ?
                    !username ? <UsernameForm /> : <SignOutButton />
                    :
                    <SignInButton />
                }
        </main>
    )
}

function SignInButton() {
    const singInWithGoogle = async () => {
        await auth.signInWithPopup(googleAuthProvider);
    }

    return (
        <button className="btn-google" onClick={singInWithGoogle}>
            <img src={'google.png'} /> sign in with Google
        </button>
    )
}

function SignOutButton() {
    return <button onClick={() => auth.signOut()}>Sign Out</button>
}

function UsernameForm() {
    return null;
}
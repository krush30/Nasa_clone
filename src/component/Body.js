import React, { useEffect } from 'react';
import Login from './Login';
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';
import Home from './Home';
import { useDispatch } from 'react-redux';
import { auth } from './utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { addData } from './utils/appSlice';
import MarsIMG from './MarsIMG';

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/home",
            element: <Home />
        }, {
            path: "/mars",
            element: <MarsIMG />
        }
    ]);
    const dispatch = useDispatch();

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                const email = user.email;
                const displayName = user.displayName;
                const photoURL = user.photoURL;
                dispatch(addData(uid, email, displayName, photoURL));





                // ...
            } else {

                // User is signed out
                // ...
            }
        });
    }, [])

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body;

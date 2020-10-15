import React, { createContext, useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/auth';

const UsuarioContext = createContext({});

const UsuarioProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);

    const ListenAuth = (userState) => {
        setUser(userState);
    }

    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged(ListenAuth)
        return listener;
    }, [])

    const signIn = async (email, password) => {
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            console.warn("Acesso concluído, aproveite.");
        })
        .catch(() => {
            console.warn("Usuário ou senha incorretos.");
        })
    }

    const signOut = async () => {
        firebase.auth().signOut()
        .then(() => {
            console.warn("Até a próxima ; )");
        }).catch(err => {
            console.warn(err);
        })
    }

    return (
        <UsuarioContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </UsuarioContext.Provider>
    )
}

export { UsuarioContext, UsuarioProvider }
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton
} from '@ionic/react';
import React from 'react';
import './Tab1.css';
import { login, logout } from '../redux/actions/login';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../redux/reducers';

const Tab1: React.FC = () => {
  const loading: boolean = useSelector((state: State) => state.login.loading);
  const loggedIn: boolean = useSelector((state: State) => state.login.loggedIn);
  const user: any = useSelector((state: State) => state.login.user);
  const dispatch = useDispatch()
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab One</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={() => dispatch(login())}>Login</IonButton>
        <p>{user ? JSON.stringify(user) : "not logged in"}</p>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
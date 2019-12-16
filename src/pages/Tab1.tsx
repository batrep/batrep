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
import { User } from 'firebase';
import { Profile } from '../redux/actions/profile';

const Tab1: React.FC = () => {
  const loading: boolean = useSelector((state: State) => state.login.loading);
  const loggedIn: boolean = useSelector((state: State) => state.login.loggedIn);
  const user = JSON.parse(JSON.stringify(useSelector((state: State) => state.login.user)));
  const myProfile = useSelector((state: State) => state.myProfile.profile);
  const dispatch = useDispatch();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab One</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={() => dispatch(login())}>Login</IonButton>
        <p>DISPLAY NAME: {user ? user.displayName : "not logged in"}</p>
        <p>
          Public: {myProfile ? JSON.stringify(myProfile.public) : "unable to retrieve"}
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
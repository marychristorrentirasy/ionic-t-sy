// pages/ClickCounter.tsx
import React, { useState } from 'react';
import { IonContent, IonButton, IonPage, IonTitle } from '@ionic/react';

const ClickCounter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <IonPage>
      <IonTitle>Click Counter</IonTitle>
      <IonContent className="ion-padding">
        <h2>Count: {count}</h2>
        <IonButton onClick={increment}>Increment</IonButton>
        <IonButton onClick={decrement}>Decrement</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default ClickCounter;

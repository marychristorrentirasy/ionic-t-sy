// pages/Calculator.tsx
import React, { useState } from 'react';
import { IonContent, IonPage, IonButton, IonGrid, IonRow, IonCol, IonInput } from '@ionic/react';
import './calculator.css';

const Calculator: React.FC = () => {
  const [result, setResult] = useState('');

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      try {
        setResult(eval(result).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setResult('');
    } else {
      setResult(result + value);
    }
  };

  return (
    <IonPage>
      <IonContent className="calculator">
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <IonInput className="result" value={result} readonly></IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="3"><IonButton onClick={() => handleButtonClick('7')}>7</IonButton></IonCol>
            <IonCol size="3"><IonButton onClick={() => handleButtonClick('8')}>8</IonButton></IonCol>
            <IonCol size="3"><IonButton onClick={() => handleButtonClick('9')}>9</IonButton></IonCol>
            <IonCol size="3"><IonButton color="danger" onClick={() => handleButtonClick('/')}>/</IonButton></IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="3"><IonButton onClick={() => handleButtonClick('4')}>4</IonButton></IonCol>
            <IonCol size="3"><IonButton onClick={() => handleButtonClick('5')}>5</IonButton></IonCol>
            <IonCol size="3"><IonButton onClick={() => handleButtonClick('6')}>6</IonButton></IonCol>
            <IonCol size="3"><IonButton color="danger" onClick={() => handleButtonClick('*')}>*</IonButton></IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="3"><IonButton onClick={() => handleButtonClick('1')}>1</IonButton></IonCol>
            <IonCol size="3"><IonButton onClick={() => handleButtonClick('2')}>2</IonButton></IonCol>
            <IonCol size="3"><IonButton onClick={() => handleButtonClick('3')}>3</IonButton></IonCol>
            <IonCol size="3"><IonButton color="danger" onClick={() => handleButtonClick('-')}>-</IonButton></IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="3"><IonButton onClick={() => handleButtonClick('0')}>0</IonButton></IonCol>
            <IonCol size="3"><IonButton onClick={() => handleButtonClick('.')}>.</IonButton></IonCol>
            <IonCol size="3"><IonButton color="success" onClick={() => handleButtonClick('=')}>=</IonButton></IonCol>
            <IonCol size="3"><IonButton color="danger" onClick={() => handleButtonClick('+')}>+</IonButton></IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12"><IonButton color="light" onClick={() => handleButtonClick('C')}>Clear</IonButton></IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Calculator;

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Welcome } from './src/pages/Wellcome';



export default function App() {
  return (
    <>
   <Welcome />
   <StatusBar style="auto" />
   </>
  );
}



import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './Header';
import InputForm from './InputForm';
// Other imports...

function App() {
  const onQuizGenerated = (quizData) => {
    console.log('Quiz Data:', quizData); // This will log the quiz data to the console
  };
  return (
    <ChakraProvider>
      <Header />
      <InputForm onQuizGenerated={onQuizGenerated}/>
    </ChakraProvider>
  );
}

export default App;

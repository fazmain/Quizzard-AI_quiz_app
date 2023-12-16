import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button, Textarea } from '@chakra-ui/react';

function InputForm({ onQuizGenerated }) {
  const [text, setText] = useState('');
  const [numQuestions, setNumQuestions] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/generate-quiz', { // Replace with your server's URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text, numOfQuestions: numQuestions })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const quizData = await response.json();
      onQuizGenerated(quizData); // Callback to pass the quiz data to the parent component
    } catch (error) {
      console.error('Error generating quiz:', error);
      // Optionally, handle the error in the UI
    }
  };

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit}>
        <FormControl id="text">
          <FormLabel>Text</FormLabel>
          <Textarea value={text} onChange={(e) => setText(e.target.value)} />
        </FormControl>
        <FormControl id="number">
          <FormLabel>Number of Questions</FormLabel>
          <Input type="number" value={numQuestions} onChange={(e) => setNumQuestions(e.target.value)} />
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">Generate Quiz</Button>
      </form>
    </Box>
  );
}

export default InputForm;

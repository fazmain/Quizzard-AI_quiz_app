import React, { useState } from 'react';
import { Box, Radio, RadioGroup, Stack, Button } from '@chakra-ui/react';

function QuizComponent({ questions, onSubmit }) {
  const [answers, setAnswers] = useState({});

  const handleOptionChange = (questionId, value) => {
    setAnswers({
      ...answers,
      [questionId]: value
    });
  };

  const handleSubmit = () => {
    onSubmit(answers);
  };

  return (
    <Box p={4}>
      {questions.map((question, index) => (
        <Box key={index} mb={4}>
          <div>{question.text}</div>
          <RadioGroup onChange={(value) => handleOptionChange(question.id, value)}>
            <Stack direction="column">
              {question.options.map((option, idx) => (
                <Radio key={idx} value={option}>
                  {option}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
        </Box>
      ))}
      <Button mt={4} colorScheme="teal" onClick={handleSubmit}>Submit Quiz</Button>
    </Box>
  );
}

export default QuizComponent;

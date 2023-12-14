
export const quizQuestions_2 = {
  questions: [
    {
      question: 'What is the purpose of array destructuring in JavaScript?',
      choices: [
        'To create a new array with specific elements',
        'To extract values from an array into separate variables',
        'To concatenate arrays',
        'To iterate over array elements',
      ],
      correctAnswer: 'To extract values from an array into separate variables',
    },
    {
      question: 'How can you use array destructuring to swap the values of two variables without using a temporary variable?',
      choices: [
        'const [a, b] = [b, a];',
        'const a = b; const b = a;',
        'const [a, b] = [b];',
        'const [b, a] = [a, b];',
      ],
      correctAnswer: 'const [a, b] = [b, a];',
    },
    {
      question: 'Which of the following statements is true about the syntax for array destructuring in JavaScript?',
      choices: [
        'The number of variables must match the length of the array exactly.',
        'Extra variables will be assigned undefined if there are not enough elements in the array.',
        'The square brackets are optional when assigning values to variables.',
        'Array destructuring only works with numerical indices.',
      ],
      correctAnswer: 'The number of variables must match the length of the array exactly.',
    },
    {
      question: 'What will be the value of `b` after the following code is executed?\n\n```javascript\nconst [a, b, c] = [1, 2];```',
      choices: [
        '1',
        '2',
        'undefined',
        'Error',
      ],
      correctAnswer: 'undefined',
    },
    {
      question: 'How can you ignore specific elements during array destructuring?',
      choices: [
        'Use underscores as variable names for the elements to be ignored.',
        'Enclose the elements to be ignored in curly braces.',
        'Include a special keyword like `ignore` before the variable names.',
        'It is not possible to ignore elements during array destructuring.',
      ],
      correctAnswer: 'Use underscores as variable names for the elements to be ignored.',
    },
    {
      question: 'What is the purpose of object destructuring in JavaScript?',
      choices: [
        'To create a new object with specific properties',
        'To extract values from an object into separate variables',
        'To merge multiple objects into one',
        'To delete properties from an object',
      ],
      correctAnswer: 'To extract values from an object into separate variables',
    },
    {
      question: 'How can you provide default values for variables during object destructuring?',
      choices: [
        'Use the `default` keyword before the variable names.',
        'Enclose the variable names in square brackets.',
        'Assign default values using the assignment operator (`=`).',
        'Default values are not allowed in object destructuring.',
      ],
      correctAnswer: 'Assign default values using the assignment operator (`=`).',
    },
    {
      question: 'What will be the value of `age` after the following code is executed?\n\n```javascript\nconst { name, age = 25 } = { name: "John" };```',
      choices: [
        'undefined',
        'null',
        '25',
        'Error',
      ],
      correctAnswer: '25',
    },
    {
      question: 'Which of the following statements is true about the syntax for object destructuring in JavaScript?',
      choices: [
        'The variable names must match the property names exactly.',
        'Extra variables will be assigned undefined if there are not enough properties in the object.',
        'Object destructuring only works with numerical indices.',
        'The curly braces are optional when assigning values to variables.',
      ],
      correctAnswer: 'The variable names must match the property names exactly.',
    },
    {
      question: 'How can you alias a destructured variable to a different name during object destructuring?',
      choices: [
        'Enclose the alias in square brackets.',
        'Use the `as` keyword before the alias name.',
        'Include a colon after the variable name followed by the alias.',
        'It is not possible to alias variables during object destructuring.',
      ],
      correctAnswer: 'Include a colon after the variable name followed by the alias.',
    },
  ]}
  
  
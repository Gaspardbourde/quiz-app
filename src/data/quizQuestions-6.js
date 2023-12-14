
export const quizQuestions_6 = {
  questions: [
    {
      question: 'What is the purpose of state in a React component?',
      choices: [
        'To store and manage data that can change over time.',
        'To define the initial properties of a component.',
        'To control the styling of a component.',
        'State is not used in React components.',
      ],
      correctAnswer: 'To store and manage data that can change over time.',
    },
    {
      question: 'Which hook is used to manage state in functional components in React?',
      choices: [
        'useState',
        'useEffect',
        'useReducer',
        'useContext',
      ],
      correctAnswer: 'useState',
    },
    {
      question: 'How do you update the state in a React functional component?',
      choices: [
        'By directly modifying the state variable.',
        'By calling the `setState` method.',
        'State is immutable and cannot be updated.',
        'By using the `this.state` syntax.',
      ],
      correctAnswer: 'By calling the `setState` method.',
    },
    {
      question: 'What does the `useState` hook return?',
      choices: [
        'The current state value and a function to update it.',
        'The current state value only.',
        'The initial state value passed as an argument.',
        'An object with properties for the current state and its updater function.',
      ],
      correctAnswer: 'The current state value and a function to update it.',
    },
    {
      question: 'What is the purpose of the `useEffect` hook in React?',
      choices: [
        'To define the initial state of a component.',
        'To manage side effects in functional components.',
        'To update the state of a component.',
        'To handle user interactions and events.',
      ],
      correctAnswer: 'To manage side effects in functional components.',
    },
    {
      question: 'When does the `useEffect` hook run in a React component?',
      choices: [
        'Before the component renders.',
        'After every re-render of the component.',
        'Only when the component is mounted.',
        'When the component unmounts.',
      ],
      correctAnswer: 'After every re-render of the component.',
    },
    {
      question: 'How can you conditionally run an effect in the `useEffect` hook based on a variable?',
      choices: [
        'By using an if statement inside the effect.',
        'By using a switch statement inside the effect.',
        'Conditional execution is not possible in `useEffect`.',
        'By defining a separate effect for each condition.',
      ],
      correctAnswer: 'By using an if statement inside the effect.',
    },
    {
      question: 'What is the purpose of the `useReducer` hook in React?',
      choices: [
        'To manage complex state logic in functional components.',
        'To reduce the number of renders in a component.',
        'To replace the `useState` hook.',
        'To define the initial state of a component.',
      ],
      correctAnswer: 'To manage complex state logic in functional components.',
    },
    {
      question: 'What is the key difference between `useState` and `useReducer` in React?',
      choices: [
        'They serve the same purpose and can be used interchangeably.',
        '`useState` is used for primitive values, while `useReducer` is used for complex state logic.',
        '`useReducer` is only used in class components.',
        '`useReducer` cannot be used in functional components.',
      ],
      correctAnswer: '`useState` is used for primitive values, while `useReducer` is used for complex state logic.',
    },
    {
      question: 'Which hook is used to consume a React context in a functional component?',
      choices: [
        'useContext',
        'useEffect',
        'useState',
        'useReducer',
      ],
      correctAnswer: 'useContext',
    },
  ]
}
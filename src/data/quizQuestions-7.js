
export const quizQuestions_7 = {
  questions: [
    {
      question: 'What is the primary purpose of the state hook in React?',
      choices: [
        'To create and manage state in functional components.',
        'To handle asynchronous operations in components.',
        'To define the initial properties of a class component.',
        'State hook is not used in React.',
      ],
      correctAnswer: 'To create and manage state in functional components.',
    },
    {
      question: 'How do you import the state hook in a React functional component?',
      choices: [
        'import { useState } from "react";',
        'import useState from "react";',
        'const useState = require("react");',
        'State hook is automatically available in all components.',
      ],
      correctAnswer: 'import { useState } from "react";',
    },
    {
      question: 'What is the syntax for declaring state using the state hook?',
      choices: [
        'const [state, setState] = useState();',
        'const state = useState();',
        'const state = useState(initialValue);',
        'const [setState, state] = useState();',
      ],
      correctAnswer: 'const [state, setState] = useState(initialValue);',
    },
    {
      question: 'How do you access the current value of state in a React functional component?',
      choices: [
        'By using `this.state` syntax.',
        'By directly accessing the state variable.',
        'By calling `state()` function.',
        'By using the state variable returned by the state hook.',
      ],
      correctAnswer: 'By using the state variable returned by the state hook.',
    },
    {
      question: 'How do you update the state using the state hook?',
      choices: [
        'By directly modifying the state variable.',
        'By calling `updateState(newValue)`.',
        'By using `state(newValue)` syntax.',
        'By calling the updater function returned by the state hook.',
      ],
      correctAnswer: 'By calling the updater function returned by the state hook.',
    },
    {
      question: 'What does the second element returned by the state hook represent?',
      choices: [
        'The initial state value provided during declaration.',
        'The current state value.',
        'The updater function to modify the state.',
        'It is not used and can be ignored.',
      ],
      correctAnswer: 'The updater function to modify the state.',
    },
    {
      question: 'When is the initial state value evaluated in the state hook?',
      choices: [
        'During component render.',
        'During component mount.',
        'During the cleanup phase.',
        'It is evaluated asynchronously after render.',
      ],
      correctAnswer: 'During component render.',
    },
    {
      question: 'How can you use the state hook to manage an object with multiple properties?',
      choices: [
        'By declaring multiple state variables for each property.',
        'By using a single state variable with an object value.',
        'State hook cannot manage objects.',
        'By creating a separate state hook for each property.',
      ],
      correctAnswer: 'By using a single state variable with an object value.',
    },
    {
      question: 'What is the purpose of the callback function in the state updater of the state hook?',
      choices: [
        'To specify dependencies for the state change.',
        'To handle errors during state updates.',
        'To perform additional operations after the state is updated.',
        'State updater does not take a callback function.',
      ],
      correctAnswer: 'To perform additional operations after the state is updated.',
    },
    {
      question: 'How do you conditionally update state based on its previous value using the state hook?',
      choices: [
        'By using `this.setState` syntax.',
        'By directly modifying the state variable.',
        'By calling `setState` inside the `useEffect` hook.',
        'By passing a function to the state updater that receives the previous state.',
      ],
      correctAnswer: 'By passing a function to the state updater that receives the previous state.',
    },
  ],
}
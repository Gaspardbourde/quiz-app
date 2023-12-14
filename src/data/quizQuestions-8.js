
export const quizQuestions_8 = {
  questions: [
    {
      question: 'What is the primary purpose of the useEffect hook in React?',
      choices: [
        'To create a new state variable in a functional component.',
        'To access the current state of a component.',
        'To manage side effects in a functional component.',
        'To define the initial state of a component.',
      ],
      correctAnswer: 'To manage side effects in a functional component.',
    },
    {
      question: 'How is the useEffect hook different from the componentDidMount lifecycle method in class components?',
      choices: [
        'They are equivalent and can be used interchangeably.',
        'useEffect only runs once when the component mounts, like componentDidMount.',
        'useEffect is used for class components, while componentDidMount is for functional components.',
        'useEffect is used for handling user events, while componentDidMount is for data fetching.',
      ],
      correctAnswer: 'useEffect only runs once when the component mounts, like componentDidMount.',
    },
    {
      question: 'What is the purpose of the second argument in the useEffect hook?',
      choices: [
        'To define the initial state of the component.',
        'To specify dependencies for the effect.',
        'To handle asynchronous operations.',
        'The second argument is not used in useEffect.',
      ],
      correctAnswer: 'To specify dependencies for the effect.',
    },
    {
      question: 'How can you mimic the behavior of componentWillUnmount using useEffect?',
      choices: [
        'By returning a cleanup function from the useEffect callback.',
        'By using a specific flag inside the effect to conditionally exit.',
        'Unmount behavior is not possible with useEffect.',
        'By manually detaching event listeners in the useEffect cleanup.',
      ],
      correctAnswer: 'By returning a cleanup function from the useEffect callback.',
    },
    {
      question: 'What happens if you omit the second argument in the useEffect hook?',
      choices: [
        'The effect runs without dependencies and might lead to performance issues.',
        'React throws an error, stating missing dependencies.',
        'The effect does not run, and React optimizes the component.',
        'It is not possible to omit the second argument.',
      ],
      correctAnswer: 'The effect runs without dependencies and might lead to performance issues.',
    },
    {
      question: 'When does the cleanup function in useEffect get executed?',
      choices: [
        'Before the component renders.',
        'After every re-render of the component.',
        'Only when the component is unmounted.',
        'The cleanup function is not a part of useEffect.',
      ],
      correctAnswer: 'Only when the component is unmounted.',
    },
    {
      question: 'How can you conditionally run an effect based on a variable in useEffect?',
      choices: [
        'By using an if statement inside the effect.',
        'By defining a separate effect for each condition.',
        'Conditional execution is not possible in useEffect.',
        'By using the `runEffect` prop in useEffect.',
      ],
      correctAnswer: 'By using an if statement inside the effect.',
    },
    {
      question: 'What is the purpose of the return statement in the useEffect cleanup function?',
      choices: [
        'To return a value from the effect.',
        'To define the initial state of the component.',
        'To specify dependencies for the effect.',
        'To perform cleanup tasks when the component unmounts.',
      ],
      correctAnswer: 'To perform cleanup tasks when the component unmounts.',
    },
    {
      question: 'How can you run an effect only once when the component mounts?',
      choices: [
        'By using the useEffectOnce hook.',
        'By providing an empty dependency array in useEffect.',
        'By using the componentDidMount lifecycle method.',
        'React automatically ensures effects run only once.',
      ],
      correctAnswer: 'By providing an empty dependency array in useEffect.',
    },
    {
      question: 'What is the recommended approach for handling data fetching in useEffect?',
      choices: [
        'Fetching data directly inside the useEffect callback.',
        'Using asynchronous functions directly in the useEffect callback.',
        'Abstracting data fetching into a separate function and calling it from useEffect.',
        'Data fetching is not allowed in useEffect.',
      ],
      correctAnswer: 'Abstracting data fetching into a separate function and calling it from useEffect.',
    },
  ],
}
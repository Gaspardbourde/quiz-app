
export const quizQuestions_3 = {
  questions: [
    {
      question: 'What is the primary advantage of using arrow functions in JavaScript?',
      choices: [
        'They have a shorter syntax.',
        'They have access to the "this" keyword.',
        'They can be used as class constructors.',
        'Arrow functions cannot be used in JavaScript.',
      ],
      correctAnswer: 'They have a shorter syntax.',
    },
    {
      question: 'How does an arrow function differ from a regular function in terms of the "this" keyword?',
      choices: [
        'Arrow functions have their own "this" context.',
        'Arrow functions share the same "this" context with their containing scope.',
        'Regular functions cannot use the "this" keyword.',
        'Arrow functions and regular functions behave the same with regard to "this".',
      ],
      correctAnswer: 'Arrow functions share the same "this" context with their containing scope.',
    },
    {
      question: 'Which of the following is a valid syntax for an arrow function with a single parameter?',
      choices: [
        'const func = param => { return param; }',
        'const func = (param) => { return param; }',
        'const func = param => return param;',
        'const func = param { return param; }',
      ],
      correctAnswer: 'const func = param => { return param; }',
    },
    {
      question: 'How can you implicitly return a value from an arrow function?',
      choices: [
        'Using the "return" keyword.',
        'Enclosing the return value in curly braces.',
        'Arrow functions cannot have implicit return values.',
        'By omitting the curly braces around the function body.',
      ],
      correctAnswer: 'By omitting the curly braces around the function body.',
    },
    {
      question: 'Which of the following statements is true about arrow functions and the "arguments" object?',
      choices: [
        'Arrow functions have access to their own "arguments" object.',
        'Arrow functions share the "arguments" object with their containing scope.',
        'Arrow functions cannot access the "arguments" object.',
        'The "arguments" object is deprecated in arrow functions.',
      ],
      correctAnswer: 'Arrow functions cannot access the "arguments" object.',
    },
    {
      question: 'How can you define a multiline arrow function?',
      choices: [
        'const func = () => { statement1; statement2; }',
        'const func = () => ( statement1, statement2 );',
        'const func = () => statement1 \n statement2 ;',
        'Multiline arrow functions are not allowed in JavaScript.',
      ],
      correctAnswer: 'const func = () => { statement1; statement2; }',
    },
    {
      question: 'What happens if you try to use the "new" keyword with an arrow function?',
      choices: [
        'An error will be thrown.',
        'The arrow function will be treated as a constructor function.',
        'The "new" keyword is not applicable to arrow functions.',
        'The arrow function will be automatically converted to a regular function.',
      ],
      correctAnswer: 'An error will be thrown.',
    },
    {
      question: 'In arrow functions, how does the syntax differ when using a single line versus multiple lines?',
      choices: [
        'Single-line arrow functions use curly braces, while multiline arrow functions don’t.',
        'Single-line arrow functions don’t use parentheses, while multiline arrow functions do.',
        'There is no difference in syntax between single-line and multiline arrow functions.',
        'Single-line arrow functions use parentheses, while multiline arrow functions use curly braces.',
      ],
      correctAnswer: 'Single-line arrow functions use parentheses, while multiline arrow functions use curly braces.',
    },
    {
      question: 'What is the purpose of the "lexical scoping" feature in arrow functions?',
      choices: [
        'It allows access to the "this" value of the containing scope.',
        'It restricts the use of variables to the current function scope.',
        'It provides a new scope for every arrow function.',
        'Lexical scoping is not relevant to arrow functions.',
      ],
      correctAnswer: 'It allows access to the "this" value of the containing scope.',
    },
    {
      question: 'Can arrow functions be used as methods in objects?',
      choices: [
        'Yes, arrow functions can be used as methods.',
        'No, arrow functions cannot be used as methods.',
        'Arrow functions can only be used as methods in class-based objects.',
        'Arrow functions can only be used as constructors, not methods.',
      ],
      correctAnswer: 'Yes, arrow functions can be used as methods.',
    },
    ]}
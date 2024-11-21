import { useEffect, useState } from "react";
import {
  Page,
  Navbar,
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  Button,
  Block,
  BlockTitle,
  List,
  ListItem,
  NavLeft,
  NavRight,
  f7,
  Icon,
} from "framework7-react";

// Sample quiz data
const quizData = [
  {
    id: 1,
    text: "Which of the following is a valid TypeScript data type?",
    options: ["String", "boolean", "number", "All of the above"],
    correctAnswer: 3,
  },
  {
    id: 2,
    text: "In TypeScript, what does the `readonly` keyword do?",
    options: [
      "Makes a property optional",
      "Marks a property as immutable",
      "Defines a new type",
      "Restricts access to private methods",
    ],
    correctAnswer: 1,
  },
  {
    id: 3,
    text: "How do you define an interface in TypeScript?",
    options: ["class", "interface", "type", "enum"],
    correctAnswer: 1,
  },
  {
    id: 4,
    text: "Which method is used to create a server in Node.js?",
    options: [
      "http.createServer",
      "server.listen",
      "fs.createServer",
      "net.createServer",
    ],
    correctAnswer: 0,
  },
  {
    id: 5,
    text: "In Node.js, which module is used for handling file system operations?",
    options: ["path", "http", "fs", "url"],
    correctAnswer: 2,
  },
  {
    id: 6,
    text: "How do you compile a TypeScript file?",
    options: [
      "node file.ts",
      "tsc file.ts",
      "npm run file.ts",
      "ts-node file.ts",
    ],
    correctAnswer: 1,
  },
  {
    id: 7,
    text: "What is the purpose of `tsconfig.json` in a TypeScript project?",
    options: [
      "To store npm dependencies",
      "To configure TypeScript compiler options",
      "To manage environment variables",
      "To set up Node.js server",
    ],
    correctAnswer: 1,
  },
  {
    id: 8,
    text: "Which command initializes a Node.js project with `package.json`?",
    options: ["npm init", "npm start", "npm install", "npm build"],
    correctAnswer: 0,
  },
  {
    id: 9,
    text: "In TypeScript, which keyword is used to specify a type for a variable?",
    options: ["type", "as", "let", "const"],
    correctAnswer: 0,
  },
  {
    id: 10,
    text: "Which Node.js module is used to handle events?",
    options: ["events", "fs", "path", "http"],
    correctAnswer: 0,
  },
  {
    id: 11,
    text: "How do you define a function's return type in TypeScript?",
    options: [
      "function myFunc(): string",
      "function myFunc: string",
      "function myFunc() -> string",
      "function myFunc(): return string",
    ],
    correctAnswer: 0,
  },
  {
    id: 12,
    text: "What is the use of `async` and `await` in Node.js?",
    options: [
      "To handle synchronous operations",
      "To handle asynchronous operations",
      "To declare a function",
      "To create a new promise",
    ],
    correctAnswer: 1,
  },
  {
    id: 13,
    text: "Which of the following is a TypeScript feature that is not present in JavaScript?",
    options: ["Arrow functions", "Generics", "Promises", "Template literals"],
    correctAnswer: 1,
  },
  {
    id: 14,
    text: "In Node.js, which method is used to read a file synchronously?",
    options: [
      "fs.readFileSync",
      "fs.readFile",
      "fs.syncReadFile",
      "fs.getFileSync",
    ],
    correctAnswer: 0,
  },
  {
    id: 15,
    text: "Which TypeScript utility type is used to make all properties of an object optional?",
    options: ["Partial", "Readonly", "Pick", "Record"],
    correctAnswer: 0,
  },
  {
    id: 16,
    text: "What does `process.env` refer to in Node.js?",
    options: [
      "A built-in Node.js module",
      "An object containing environment variables",
      "A method to start a server",
      "A function to read files",
    ],
    correctAnswer: 1,
  },
  {
    id: 17,
    text: "Which of the following is a TypeScript feature for defining object types?",
    options: ["Union types", "Enums", "Interfaces", "Modules"],
    correctAnswer: 2,
  },
  {
    id: 18,
    text: "In Node.js, how can you import an ES module?",
    options: [
      "require('module')",
      "import module from 'module'",
      "module.import()",
      "export module from 'module'",
    ],
    correctAnswer: 1,
  },
  {
    id: 19,
    text: "What is the purpose of `declare` keyword in TypeScript?",
    options: [
      "To declare a new variable",
      "To declare an external type or variable",
      "To declare a function",
      "To declare a class",
    ],
    correctAnswer: 1,
  },
  {
    id: 20,
    text: "How do you type an array of numbers in TypeScript?",
    options: ["number[]", "Array<number>", "number array", "Both A and B"],
    correctAnswer: 3,
  },
];

// Timer duration in seconds (e.g., 30 minutes = 1800 seconds)
const QUIZ_DURATION = 1800;

export default function QuizPage() {
  const setUsername = localStorage.getItem("username");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    new Array(quizData.length).fill(null)
  );
  const [flaggedQuestions, setFlaggedQuestions] = useState(
    new Array(quizData.length).fill(false)
  );
  const [timeLeft, setTimeLeft] = useState(QUIZ_DURATION);

  // Handle radio button answer change
  const handleAnswerChange = (value) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = parseInt(value);
    setUserAnswers(newAnswers);
  };

  // Jump to a specific question
  const handleJumpToQuestion = (index) => {
    setCurrentQuestion(index);
  };

  // Navigate to the next question
  const handleNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  // Navigate to the previous question
  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Toggle flag/unflag question
  const handleFlagQuestion = () => {
    const newFlags = [...flaggedQuestions];
    newFlags[currentQuestion] = !newFlags[currentQuestion];
    setFlaggedQuestions(newFlags);
  };

  // Clear selected answer
  const handleClearAnswer = () => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = null;
    setUserAnswers(newAnswers);
  };

  // Submit quiz
  const handleSubmitQuiz = () => {
    f7.dialog.confirm("Do you want to submit the Quiz?", () => {
      const correctAnswers = quizData.reduce((total, question, index) => {
        return question.correctAnswer === userAnswers[index]
          ? total + 1
          : total;
      }, 0);
      const score = (correctAnswers / quizData.length) * 100;
      f7.dialog.alert(`You scored ${score.toFixed(2)}%`, () => {
        f7.views.main.router.clearPreviousHistory();
        f7.views.main.router.navigate("/home/", {
          reloadCurrent: true,
        });
      });
    });
  };

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    if (timeLeft === 0) {
      clearInterval(timer);
      handleSubmitQuiz();
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Format time (mm:ss)
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  return (
    
    <Page>
      <div className="tw-flex tw-justify-between tw-mt-3">
        <div className="tw-flex">
        <Button tonal round className="tw-ml-2">
          <span>{formatTime(timeLeft)}</span>
        </Button>
        <Button tonal round className="tw-ml-2">
          <span>{`Q${currentQuestion + 1}/${quizData.length}`}</span>
        </Button>
        </div>
        <Button onClick={handleSubmitQuiz} tonal round className="tw-mr-2">
          Submit
        </Button>
      </div>

      <div className="grid grid-cols-1 large-grid-cols-2">
        <Block>
          <BlockTitle>Question {currentQuestion + 1}</BlockTitle>
          <Card>
            <CardHeader>
              <b>{quizData[currentQuestion].text}</b>
            </CardHeader>
            <CardContent>
              {/* Radio Group for Options */}
              <div>
                <List strongIos outlineIos dividersIos>
                  {quizData[currentQuestion].options.map((option, index) => (
                    <ListItem
                      key={index}
                      radio
                      radioIcon="start"
                      title={option}
                      name={`option-${currentQuestion}`}
                      value={index.toString()}
                      checked={userAnswers[currentQuestion] === index}
                      onChange={() => handleAnswerChange(index.toString())}
                    />
                  ))}
                </List>
              </div>
            </CardContent>

            <CardFooter className="tw-flex tw-justify-between">
              <Button
                onClick={handlePreviousQuestion}
                disabled={currentQuestion === 0}
              >
                Previous
              </Button>
              <Button
                onClick={handleNextQuestion}
                disabled={currentQuestion === quizData.length - 1}
              >
                Next
              </Button>
            </CardFooter>
          </Card>

          <div className="tw-w-full tw-flex tw-justify-center tw-p-0 tw-m-0">
            <Block
              strong
              inset
              className="grid grid-cols-2 grid-gap tw-w-full tw-m-0"
            >
              <Button
                onClick={handleFlagQuestion}
                className={`${
                  flaggedQuestions[currentQuestion]
                    ? "tw-bg-yellow-500 tw-text-white"
                    : "tw-bg-blue-400 tw-text-white"
                }`}
                round
              >
                {flaggedQuestions[currentQuestion] ? "Unflag" : "Flag"}
              </Button>
              <Button
                onClick={handleClearAnswer}
                className="tw-bg-red-500 tw-text-white"
                round
              >
                Clear Answer
              </Button>
            </Block>
          </div>
        </Block>

        {/* Jump to Question Section */}
        <Block>
          <BlockTitle>Jump to Question</BlockTitle>
          <Card>
            <CardContent>
              <div className="tw-grid tw-grid-cols-5 md:tw-grid-cols-8 tw-gap-2">
                {quizData.map((question, index) => (
                  <Button
                    key={index}
                    className={`tw-w-full ${
                      flaggedQuestions[index]
                        ? "tw-bg-yellow-500 tw-text-white"
                        : userAnswers[index] !== null
                        ? "tw-bg-green-500 tw-text-white"
                        : "tw-border tw-border-gray-300"
                    }`}
                    outline={
                      userAnswers[index] === null && !flaggedQuestions[index]
                    }
                    onClick={() => handleJumpToQuestion(index)}
                  >
                    {`Q${index + 1}`}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </Block>
      </div>
    </Page>
  );
}

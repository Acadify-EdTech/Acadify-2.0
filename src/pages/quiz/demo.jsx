import React from "react";
import {
  Navbar,
  Page,
  Card,
  CardContent,
  CardHeader,
  Link,
  Button,
} from "framework7-react";

// Define the subjects array with different subjects and colors
const subjects = [
  { name: "TypeScript", color: "blue" },
  { name: "Node.js", color: "green" },
  { name: "React", color: "skyblue" },
  { name: "Rust", color: "brown" },
  { name: "Python", color: "orange" },
  { name: "Go", color: "teal" },
  { name: "Java", color: "red" },
  { name: "C++", color: "purple" },
  { name: "Kotlin", color: "pink" },
  { name: "Dart", color: "cyan" },
];

function QuizDemo() {
  return (
    <Page>
      <Navbar title="Quiz Demo" backLink="Back" />
      <div className="grid medium-grid-cols-4 grid-cols-2">
        {subjects.map((subject, index) => (
          <Card expandable key={index} style={{ height: "100px" }}>
            <CardContent padding={false}>
              {/* Card Header with subject name and dynamic background color */}
              <div
                style={{
                  backgroundColor: subject.color,
                  height: "100px",
                }}
              >
                <CardHeader
                  textColor="white"
                  className="display-block"
                  style={{ fontSize: "24px", fontWeight: "bold" }}
                >
                  {subject.name}
                </CardHeader>
                <Link
                  cardClose
                  color="white"
                  className="card-opened-fade-in"
                  style={{ position: "absolute", right: "15px", top: "15px" }}
                  iconF7="xmark_circle_fill"
                />
              </div>

              {/* Expanded content with Start Quiz button */}
              <div className="card-content-padding">
                <p className=" tw-font-mono tw-my-10">
                  Are you ready to test your knowledge in {subject.name}?
                </p>
                <Button
                  fill
                  round
                  large
                  cardClose
                  style={{
                    backgroundColor: subject.color,
                    color: "white",
                  }}
                  href="/quiz/start/"
                >
                  Start Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Page>
  );
}

export default QuizDemo;

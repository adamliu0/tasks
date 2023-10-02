import React from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Adam Liu UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>This is a header</h1>
            <p>Hello World</p>
            <img
                src="../assets/images/doraemon1.jpg"
                alt="This is an image of doraemon"
            />
            <ol>
                <li>Thing 1</li>
                <li>Thing 2</li>
                <li>Thing 3</li>
            </ol>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <div>
                <Container>
                    <Row>
                        <Col>
                            First Column
                            <div
                                style={{
                                    width: "50px",
                                    height: "30px",
                                    backgroundColor: "red"
                                }}
                            ></div>
                        </Col>
                        <Col>
                            Second Column
                            <div
                                style={{
                                    width: "50px",
                                    height: "30px",
                                    backgroundColor: "red"
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;

import React from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

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
        </div>
    );
}

export default App;

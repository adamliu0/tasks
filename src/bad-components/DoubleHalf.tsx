import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Doubler({
    setDhValue,
    dhValue
}: {
    setDhValue: (newValue: number) => void;
    dhValue: number;
}): JSX.Element {
    return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
}

function Halver({
    setDhValue,
    dhValue
}: {
    setDhValue: (newValue: number) => void;
    dhValue: number;
}): JSX.Element {
    return <Button onClick={() => setDhValue(dhValue / 2)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState(10);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler setDhValue={setDhValue} dhValue={dhValue}></Doubler>
            <Halver setDhValue={setDhValue} dhValue={dhValue}></Halver>
        </div>
    );
}
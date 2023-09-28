import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [dice1, setDice1] = useState<number>(1);
    const [dice2, setDice2] = useState<number>(2);
    const rollDice = (die: number) => {
        if (die === 1) {
            setDice1(d6());
        } else {
            setDice2(d6());
        }
    };
    return (
        <div>
            <p>
                <span data-testid="dice-1">{dice1}</span>
                <span data-testid="dice-2">{dice2}</span>
            </p>
            <div>
                <Button onClick={() => rollDice(1)}>Roll Left</Button>
                <Button onClick={() => rollDice(2)}>Roll Right</Button>
            </div>
            {dice1 === dice2 && dice1 === 1 && <p>Lose</p>}
            {dice1 === dice2 && dice1 !== 1 && <p>Win</p>}
        </div>
    );
}

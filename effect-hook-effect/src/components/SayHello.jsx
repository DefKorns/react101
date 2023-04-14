import { useEffect } from "react";
import { useState } from "react"

export function SayHello() {
    const greetings = ['olá', 'hello', 'bonjour', 'hola', 'hallo', 'ciao', 'aloha', 'こんにちは', 'Привет', 'buna ziua']

    const [index, setIndex] = useState(0);

    function updateGreeting() {
        setIndex(Math.floor(Math.random() * greetings.length));   
    }

    // componentWillUpdate
    useEffect(() => {
        document.title = greetings[index];
    });

    return (
        <div>
            <p><strong>{index}</strong> {greetings[index]}</p>
            <button onClick={updateGreeting}>Say Hello</button>
        </div>
    )
}
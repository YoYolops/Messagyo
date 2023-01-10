import styled from "styled-components"
import { useState } from "react";
import { emitMessage } from "../services/socket";

export default function Messenger() {
    const [ message, setMessage ] = useState("");

    return (
        <MessengerContainer>
            <input 
                type="text"
                value={message}
                onChange={e => setMessage(e.target.value)}
            />

            <InputSubmit
                type="submit"
                onClick={() => {
                    console.log("Emitting Message")
                    emitMessage(message)
                }}
            />
        </MessengerContainer>
    )
}

const MessengerContainer = styled.div`
    border: 2px solid black;
    display: flex;
    flex-direction: column;

`

const InputSubmit = styled.input`
    max-width: 120px;
`
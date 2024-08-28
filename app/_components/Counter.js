"use client";

import { useState } from "react";

export default function Counter({ users }) {
    const [count, setCount] = useState(0);

    console.log(users);


    return (
        <>
            <p>There have {users.length} people in this room.</p>
            <button onClick={() => setCount(x => x + 1)}>{count}</button>
        </>
    )
}
import React, { useState } from 'react'
import AceEditor from "react-ace";

export default function AlgoInputpage({inputval, setinputval}) {
    
    return (
        <>
            <AceEditor
                theme="light"
                width='100%'
                height='100%'
                fontSize={"20px"}
                value={inputval}
                onChange={(newaval)=> setinputval(newaval)}
            />
        </>
    )
}

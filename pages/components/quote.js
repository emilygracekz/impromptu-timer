import React, { useState, useEffect } from 'react';


const Quote = () => {
    const [responseData, setResponseData] = useState(0);

    useEffect(() => {
        setResponseData('hello')
        console.log(responseData)
    }, [setResponseData, responseData])

    return (
        <div className="quote">

        </div>
    )
}

export default Quote;
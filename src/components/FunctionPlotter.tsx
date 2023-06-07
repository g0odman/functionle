import React, { ChangeEvent, useRef, useState } from 'react';
import functionPlot from 'function-plot';


function FunctionPlotter() {
    const graphRef = useRef(null);

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const plotFunction = () => {
        if (graphRef.current == null) {
            return <div></div>
        }

        functionPlot({
            target: graphRef.current,
            width: 400,
            height: 400,
            yAxis: { domain: [-10, 10] },
            data: [{
                fn: inputValue,
                color: 'blue',
            }],
        });
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                onSubmit={plotFunction}
                placeholder="Enter a value"
            />
            <button onClick={plotFunction}>Plot</button>
            <div ref={graphRef}></div>
        </div>
    );
};

export default FunctionPlotter;

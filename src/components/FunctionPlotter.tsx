import { useEffect, useRef } from 'react';
import functionPlot from 'function-plot';
// import d3, { NumberValue } from 'd3';

function FunctionPlotter(props: { target: string, guesses: string[] }) {
    const graphRef = useRef<HTMLDivElement>(null);
    const data = [{
        fn: props.target,
        color: 'green',
    }]

    props.guesses.forEach((value) => {
        data.push(
            {
                fn: value,
                color: 'red',
            }
        );
    });
    useEffect(() => {

        if (graphRef.current) {

            const plotHeight = graphRef.current.clientHeight * 0.8;
            const plotWidth = graphRef.current.clientWidth * 0.8;

            try {
                functionPlot({
                    target: graphRef.current,
                    width: plotWidth,
                    height: plotHeight,
                    yAxis: { domain: [-10, 10] },
                    data: data,
                })
            } catch (error) {
                // Handle the exception and display an error message to the user
                console.error('Error plotting function:', error);
                console.error('Target:', props.target);
                console.error('Guesses:', props.guesses);
                // Display the error message in the UI
                // You can use a state variable to conditionally render an error message component
            }
        }
        ;
    }, [props.guesses, props.target]);


    return (
        <div ref={graphRef}></div>
    );
};

// Alternate plotting code
// const Plot = (props: { formula: string }) => {
//     const svgRef = useRef(null);

//     useEffect(() => {
//         // Set up the SVG container
//         const svg = d3.select(svgRef.current);
//         const width = 500;
//         const height = 300;
//         const margin = { top: 20, right: 20, bottom: 30, left: 50 };
//         const innerWidth = width - margin.left - margin.right;
//         const innerHeight = height - margin.top - margin.bottom;

//         // Generate x values
//         const xValues = d3.range(-10, 10, 0.1);

//         // Parse and evaluate the formula for each x value
//         const data: [NumberValue, NumberValue][] = xValues.map((x) => ([x, eval(props.formula) as number]));

//         // Set up scales
//         const xScale = d3.scaleLinear()
//             .domain(d3.extent(data, (d) => d[0]))
//             .range([0, innerWidth]);

//         const yScale = d3.scaleLinear()
//             .domain(d3.extent(data, (d) => d[1]))
//             .range([innerHeight, 0]);

//         // Set up the line generator
//         const line = d3.line()
//             .x((d) => xScale(d[0]))
//             .y((d) => yScale(d[1]));

//         // Draw the line
//         svg.append('g')
//             .attr('transform', `translate(${ margin.left }, ${ margin.top })`)
//             .append('path')
//             .datum(data)
//             .attr('fill', 'none')
//             .attr('stroke', 'steelblue')
//             .attr('stroke-width', 2)
//             .attr('d', line);
//     }, [props.formula]);

//     return (
//         <svg ref={svgRef} width="500" height="300">
//             <g transform="translate(50, 20)"></g>
//         </svg>
//     );
// };


export default FunctionPlotter;

function generateRandomPolynomial(degree: number): number[] {
    const coefficients = [];

    for (let i = 0; i <= degree; i++) {
        const randomCoefficient = Math.floor(Math.random() * 5); // Generate a random coefficient (0-5)
        coefficients.push(randomCoefficient);
    }

    return coefficients;
}

function convertPolynomialToFormula(coefficients: number[]): string {
    const degree = coefficients.length - 1;
    let formula = '';

    for (let i = degree; i >= 0; i--) {
        const coefficient = coefficients[i];

        if (coefficient !== 0) {
            const term = coefficient === 1 && i !== 0 ? '' : coefficient;
            const variable = i === 0 ? '' : `x^${ i }`;
            const operator = i !== 0 ? ' + ' : '';
            formula += `${ term }${ variable }${ operator }`;
        }
    }

    return formula;
}

function generateFormula(degree: number): string {
    const coefficients = generateRandomPolynomial(degree);
    const formula = convertPolynomialToFormula(coefficients);

    return formula;
}

export { generateFormula };
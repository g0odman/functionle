function generateRandomPolynomial(degree: number) {
    const coefficients = [];

    for (let i = 0; i <= degree; i++) {
        const randomCoefficient = Math.floor(Math.random() * 10); // Generate a random coefficient (0-9)
        coefficients.push(randomCoefficient);
    }

    return coefficients;
}

const degree = 4; // Specify the degree of the polynomial
const polynomial = generateRandomPolynomial(degree);

console.log(`Random Polynomial (Degree ${ degree }):`);
console.log(polynomial);

/**
 * Randomly generates and returns an array of digits between 0 & choices configured for the game.
 */

export default async function generateSecretCode(pegs = 4, choices = 6) {
    const secretCode = Array(pegs).fill(null);

    for (let peg of secretCode) {
        const index = secretCode.indexOf(peg);

        secretCode[index] = Math.floor(Math.random() * Math.floor(choices) + 1);
    }

    return secretCode.join('');
}

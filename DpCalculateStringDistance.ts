function calculateEditDistance(X: string, Y: string): number {
  const m = X.length;
  const n = Y.length;

  // Create a 2D array (dp table) to store distances
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  // Initialize the dp table for base cases
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i; // Cost of deleting all characters in X to match empty Y
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j; // Cost of inserting all characters in Y to match empty X
  }

  // Fill the dp table for the rest of the cases
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // If characters match, no cost for this position; otherwise, substitution cost = 1
      const cost = X[i - 1] === Y[j - 1] ? 0 : 1;

      // Recurrence relation: minimum of three possibilities
      dp[i][j] = Math.min(
        dp[i - 1][j - 1] + cost, // Substitution
        dp[i - 1][j] + 1,        // Deletion
        dp[i][j - 1] + 1         // Insertion
      );
    }
  }

  // The final answer is in the bottom-right corner of the table
  return dp[m][n];
}

// Example usage
const stringX = "kitten";
const stringY = "sitting";

console.log(`Edit Distance: ${calculateEditDistance(stringX, stringY)}`);
// Output: Edit Distance: 3

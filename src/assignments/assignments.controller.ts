import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {

  // Method to generate Fibonacci sequence up to n terms
  private generateFibonacci(n: number): number[] {
    const sequence = [0, 1]; // Start with the first two numbers of the Fibonacci sequence
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]); // Sum of the previous two numbers
    }
    return sequence.slice(0, n); // Ensure that we return exactly 'n' terms
  }

  // GET endpoint to return Fibonacci sequence
  @Get('fibonacci/:n')
  getFibonacci(@Param('n') n: number): { sequence: number[] } {
    if (n <= 0) {
      return { sequence: [] }; // Return an empty array if n is 0 or negative
    }
    const fibonacciSequence = this.generateFibonacci(n);
    return { sequence: fibonacciSequence };
  }
}

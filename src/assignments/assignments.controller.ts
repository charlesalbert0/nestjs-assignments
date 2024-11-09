import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {

  // Method to check if a number is prime
  isPrime(number: number): boolean {
    if (number <= 1) return false; // Numbers less than or equal to 1 are not prime
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false; // If divisible by any number, it's not prime
      }
    }
    return true; // If no divisors are found, it's prime
  }

  // GET endpoint to check if the number is prime
  @Get('prime/:number')
  checkPrime(@Param('number') number: number) {
    const result = this.isPrime(number);
    return { isPrime: result }; // Return result as JSON
  }
}

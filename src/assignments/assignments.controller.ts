import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {

  // Helper method to calculate factorial
  private calculateFactorial(num: number): number {
    if (num <= 1) return 1;
    return num * this.calculateFactorial(num - 1);
  }

  // Endpoint to calculate the factorial of a number
  @Get('factorial/:number')
  getFactorial(@Param('number') number: string) {
    const num = parseInt(number, 10);

    // Validate the input to ensure it's a valid number and positive
    if (isNaN(num) || num < 0) {
      return { message: 'Please provide a valid non-negative integer' };
    }

    const result = this.calculateFactorial(num);

    return { factorial: result };
  }
}

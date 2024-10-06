import "./App.css";

function App() {
  // 1. Print numbers from 1 to 10
  function printNumbers() {
    return Array.from({ length: 10 }, (_, i) => i + 1).join(", ");
  }

  // 2. Print the odd numbers less than 100
  function printOddNumbers() {
    let oddNumbers = [];
    for (let i = 1; i < 100; i += 2) {
      oddNumbers.push(i);
    }
    return oddNumbers.join(", ");
  }

  // 3. Print the multiplication table with 7
  function multiplicationTable7() {
    let rows = [];
    for (let i = 1; i <= 10; i++) {
      rows.push(
        <tr key={i}>
          <td>7</td>
          <td>x</td>
          <td>{i}</td>
          <td>=</td>
          <td>{7 * i}</td>
        </tr>
      );
    }
    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    );
  }

  // 4. Print all the multiplication tables with numbers from 1 to 10
  function multiplicationTables() {
    let tables = [];
    for (let i = 1; i <= 10; i++) {
      let rows = [];
      for (let j = 1; j <= 10; j++) {
        rows.push(
          <tr key={`${i}-${j}`}>
            <td>{i}</td>
            <td>x</td>
            <td>{j}</td>
            <td>=</td>
            <td>{i * j}</td>
          </tr>
        );
      }
      tables.push(
        <div key={i}>
          <h3>Multiplication Table of {i}</h3>
          <table>
            <tbody>{rows}</tbody>
          </table>
        </div>
      );
    }
    return tables;
  }

  // 5. Calculate the sum of numbers from 1 to 10
  function sumNumbers() {
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
    const sum = numbers.reduce((a, b) => a + b, 0);
    const calculation = numbers.join(" + ") + " = " + sum;
    return calculation;
  }
  // 6. Calculate 10!
  function factorial10() {
    let factorial = 1;
    let calculation = '';
    for (let i = 1; i <= 10; i++) {
      factorial *= i;
      calculation += (i === 1) ? `${i}` : ` x ${i}`;
    }
    calculation += ` = ${factorial}`;
    return calculation;
  }

  // 7. Calculate the sum of even numbers greater than 10 and less than 30
  function sumEvenNumbers() {
    let sum = 0;
    let calculation = '';
    for (let i = 12; i < 30; i += 2) {
      sum += i;
      calculation += (i === 12) ? `${i}` : ` + ${i}`;
    }
    calculation += ` = ${sum}`;
    return calculation;
  }

  // 8. Convert from Celsius to Fahrenheit
  function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  // 9. Convert from Fahrenheit to Celsius
  function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  // 10. Calculate the sum of numbers in an array of numbers
  function sumArray(numbers) {
    const sum = numbers.reduce((a, b) => a + b, 0);
    const calculation = numbers.join(" + ") + " = " + sum;
    return calculation;
  }

  // 11. Calculate the average of the numbers in an array
  function averageArray(numbers) {
    const sum = numbers.reduce((a, b) => a + b, 0);
    const calculation = numbers.join(" + ") + " = " + sum;
    const average = sum / numbers.length;
    return `${calculation} / ${numbers.length} = ${average}`;
  }

  // 12. Filter positive numbers from an array
  function filterPositiveNumbers(numbers) {
    return numbers.filter((number) => number > 0);
  }

  // 13. Find the maximum number in an array
  function maxNumber(numbers) {
    return Math.max(...numbers);
  }

  // 14. Print the first 10 Fibonacci numbers without recursion
  function fibonacci10() {
    let fib = [0, 1];
    for (let i = 2; i < 10; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.join(", ");
  }

  // 15. Find the nth Fibonacci number using recursion
  function nthFibonacci(n) {
    if (n <= 1) return n;
    return nthFibonacci(n - 1) + nthFibonacci(n - 2);
  }

  // 16. Check if a number is prime
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }

  // 17. Sum of digits of a positive integer number
  function sumOfDigits(num) {
    const digits = num.toString().split("");
    const sum = digits.reduce((a, b) => a + parseInt(b), 0);
    const calculation = digits.join(" + ") + " = " + sum;
    return calculation;
  }

  // 18. Print the first 100 prime numbers
  function first100Primes() {
    let primes = [];
    let num = 2;
    while (primes.length < 100) {
      if (isPrime(num)) primes.push(num);
      num++;
    }
    return primes.join(", ");
  }

  // 19. Return the first "p" prime numbers greater than "n"
  function primesGreaterThanN(p, n) {
    let primes = [];
    let num = n + 1;
    while (primes.length < p) {
      if (isPrime(num)) primes.push(num);
      num++;
    }
    return primes.join(", ");
  }

  // 20. Rotate an array to the left 1 position
  function rotateLeft(arr) {
    arr.push(arr.shift());
    return arr;
  }

  // 21. Rotate an array to the right 1 position
  function rotateRight(arr) {
    arr.unshift(arr.pop());
    return arr;
  }

  // 22. Reverse an array
  function reverseArray(arr) {
    return arr.reverse();
  }

  // 23. Reverse a string
  function reverseString(str) {
    return str.split("").reverse().join("");
  }

  // 24. Merge two arrays and return a new array
  function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
  }

  // 25. Return an array of elements either in the first array or the second array but not both
  function arrayDifference(arr1, arr2) {
    return arr1
      .filter((x) => !arr2.includes(x))
      .concat(arr2.filter((x) => !arr1.includes(x)));
  }

  // 26. Return an array with elements that are in the first array but not in the second
  function arrayDifferenceFirstOnly(arr1, arr2) {
    return arr1.filter((x) => !arr2.includes(x));
  }

  return (
    <div >
      <h1>THTuan01_TranThanhTung_21099571</h1>
      <h2>1. Numbers from 1 to 10</h2>
      <p>{printNumbers()}</p>

      <h2>2. Odd numbers less than 100</h2>
      <p>{printOddNumbers()}</p>

      <h2>3. Multiplication table with 7</h2>
      <p>{multiplicationTable7()}</p>

      <h2>4. All multiplication tables from 1 to 10</h2>
      <p>{multiplicationTables()}</p>

      <h2>5. Sum of numbers from 1 to 10</h2>
      <p>{sumNumbers()}</p>

      <h2>6. Factorial of 10</h2>
      <p>{factorial10()}</p>

      <h2>7. Sum of even numbers greater than 10 and less than 30</h2>
      <p>{sumEvenNumbers()}</p>

      <h2>8. Convert 100 Celsius to Fahrenheit</h2>
      <p>{celsiusToFahrenheit(100)}</p>

      <h2>9. Convert 212 Fahrenheit to Celsius</h2>
      <p>{fahrenheitToCelsius(212)}</p>

      <h2>10. Sum of numbers in array [1-10]</h2>
      <p>{sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])}</p>

      <h2>11. Average of numbers in array [1-10]</h2>
      <p>{averageArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])}</p>

      <h2>
        12. Positive numbers in array [-1, 2, -3, 4, -5, 6, -7, 8, -9, 10]
      </h2>
      <p>
        {filterPositiveNumbers([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10]).join(", ")}
      </p>

      <h2>13. Maximum number in array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</h2>
      <p>{maxNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])}</p>

      <h2>14. First 10 Fibonacci numbers</h2>
      <p>{fibonacci10()}</p>

      <h2>15. 10th Fibonacci number (recursion)</h2>
      <p>{nthFibonacci(10)}</p>

      <h2>16. Check if a number is prime</h2>
      <p>Is 29 prime?</p>
      <p>Check: {isPrime(29).toString()}</p>

      <h2>17. Sum of digits of 12345</h2>
      <p>{sumOfDigits(12345)}</p>

      <h2>18. First 100 prime numbers</h2>
      <p>{first100Primes()}</p>

      <h2>19. First 10 primes greater than 100</h2>
      <p>{primesGreaterThanN(10, 100)}</p>

      <h2>20. Rotate [1, 2, 3, 4, 5] left</h2>
      <p>{rotateLeft([1, 2, 3, 4, 5]).join(", ")}</p>

      <h2>21. Rotate [1, 2, 3, 4, 5] right</h2>
      <p>{rotateRight([1, 2, 3, 4, 5]).join(", ")}</p>

      <h2>22. Reverse array [1, 2, 3, 4, 5]</h2>
      <p>{reverseArray([1, 2, 3, 4, 5]).join(", ")}</p>

      <h2>23. Reverse string "Hello World"</h2>
      <p>{reverseString("Hello World")}</p>

      <h2>24. Merge [1, 2, 3] and [4, 5, 6]</h2>
      <p>{mergeArrays([1, 2, 3], [4, 5, 6]).join(", ")}</p>

      <h2>25. Difference between [1, 2, 3, 4] and [3, 4, 5, 6]</h2>
      <p>{arrayDifference([1, 2, 3, 4], [3, 4, 5, 6]).join(", ")}</p>

      <h2>26. Difference from [1, 2, 3, 4] but not in [3, 4, 5, 6]</h2>
      <p>{arrayDifferenceFirstOnly([1, 2, 3, 4], [3, 4, 5, 6]).join(", ")}</p>
    </div>
  );
}

export default App;

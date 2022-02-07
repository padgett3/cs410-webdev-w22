const range = (begin, end) => {
  if (begin >= end) {
    return [];
  } else {
    return [begin].concat(range(begin + 1, end));
  }
}

const primeSieve = (n) => {
  let primes = range(2, n + 1);
  for (let i of range(2, Math.sqrt(n))) {
    primes = primes.filter(x => x % i != 0 || x == i);
  }
  return primes;
}

const getPrimes = () => {
  let primes = primeSieve(100);
  for (let prime of primes) {
    console.log(prime);
  }
};

getPrimes();

// 2
// 3
// 5
// 7
// 11
// 13
// 19
// 23
// 29
// 31
// 37
// 41
// 43
// ...

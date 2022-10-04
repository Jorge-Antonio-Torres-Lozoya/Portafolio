function generarPrimos(n) {
            let primos = [];
            let hayPrimo = [];

            for (let i = 1; i <= n + 1; i++) {
                hayPrimo.push(true);
            }
            for (let i = 2; i <= n; i++) {
                if (hayPrimo[i]) {
                    primos.push(i);
                    // Criba de Eratóstenes:
                    // 2 3 4 5 6 7 8 9 ... n
                    // 2 3 5 7 9 ... n
                    // 2 3 5 7 ... n
                    for (let j = 1; j * i <= n; j++) {
                        hayPrimo[i * j] = false;
                    }
                }
            }
            return primos;
        }
console.log(generarPrimos(35));  


function getPrimes(n){
  var prime_number = [];
  for (var counter =2; counter <= n; counter++){
    not_prime =true;
      var round_number= Math.floor(Math.sqrt (counter));
      for (var i=2; i <= round_number; i++){
        if ((counter % i === 0) && ( i!== counter)){
          not_prime = false;
        }
      }
        if (not_prime ===true){
            prime_number.push (counter);
        }
      
  }
  return prime_number;
}
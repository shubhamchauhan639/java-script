function generateOTP(length = 6) {
  let otp = '';
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10); // random digit 0-9
  }
  return otp;
}

console.log(generateOTP());   // Example: "407913"
console.log(generateOTP(4));  // Example: "5821"

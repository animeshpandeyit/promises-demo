// const GITHUB_API = "https://api.github.com/users/akshaymarch7";

// const user = fetch(GITHUB_API);

// console.log(user);

// // user.then((data) => {
// //   console.log("data",data);
// // });
// //  promise object are immutable

// conatainer for a future value, when value is resolved
// is an object representing a eventul completion or failure of asyn evrnt??/??

// const github = "https://api.github.com/users/akshaymarch7";

// const data = fetch(github);

// data
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("NETWORK RESPONSE ERROR");
//     }
//   })
//   .then((data) => {
//     console.log("data", data);
//   })
//   .catch((error) => console.error("FETCH ERROR:", error));

const cart = ["apple", "android", "android-chrome"];

// const promise = createOrder(cart);
createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .catch((err) => console.log(err.message))
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (PaymentInfo) {
    console.log(PaymentInfo);
  });

//
function createOrder(cart) {
  const pr = new Promise((resolve, reject) => {
    if (!ValidateCart(cart)) {
      const err = new Error("Cart Error");
      reject(err);
    }

    // logic for creating order
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });
  return pr;
}
//
function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    resolve("Payment Successful");
  });
}
//
function ValidateCart(cart) {
  return true;
}

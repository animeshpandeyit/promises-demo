// // // const GITHUB_API = "https://api.github.com/users/akshaymarch7";

// // // const user = fetch(GITHUB_API);

// // // console.log(user);

// // // // user.then((data) => {
// // // //   console.log("data",data);
// // // // });
// // // //  promise object are immutable

// // // conatainer for a future value, when value is resolved
// // // is an object representing a eventul completion or failure of asyn evrnt??/??

// // // const github = "https://api.github.com/users/akshaymarch7";

// // // const data = fetch(github);

// // // data
// // //   .then((response) => {
// // //     if (response.ok) {
// // //       return response.json();
// // //     } else {
// // //       throw new Error("NETWORK RESPONSE ERROR");
// // //     }
// // //   })
// // //   .then((data) => {
// // //     console.log("data", data);
// // //   })
// // //   .catch((error) => console.error("FETCH ERROR:", error));

// // const cart = ["apple", "android", "android-chrome"];

// // // const promise = createOrder(cart);
// // createOrder(cart)
// //   .then(function (orderId) {
// //     console.log(orderId);
// //     return orderId;
// //   })
// //   .catch((err) => console.log(err.message))
// //   .then(function (orderId) {
// //     return proceedToPayment(orderId);
// //   })
// //   .then(function (PaymentInfo) {
// //     console.log(PaymentInfo);
// //   });

// // //
// // function createOrder(cart) {
// //   const pr = new Promise((resolve, reject) => {
// //     if (!ValidateCart(cart)) {
// //       const err = new Error("Cart Error");
// //       reject(err);
// //     }

// //     // logic for creating order
// //     const orderId = "12345";
// //     if (orderId) {
// //       setTimeout(function () {
// //         resolve(orderId);
// //       }, 5000);
// //     }
// //   });
// //   return pr;
// // }
// // //
// // function proceedToPayment(orderId) {
// //   return new Promise((resolve, reject) => {
// //     resolve("Payment Successful");
// //   });
// // }
// // //
// // function ValidateCart(cart) {
// //   return true;
// // }

// // createOrder;
// // proceedtoPayment;
// // showOrderSummary;
// // updateWallet;

// const fruitcart = ["carrots", "spinach", "cookies", "lettuce"];

// createOrder(fruitcart)
//   .then(function (orderId) {
//     console.log(orderId);
//     return orderId;
//   })
//   .then((orderId) => {
//     return proceedtoPayment(orderId);
//   })
//   .then((message, amount) => {
//     return showOrderSummary(message, amount);
//   });

// // createOrder
// function createOrder(fruitcart) {
//   const promise = new Promise((resolve, reject) => {
//     if (!cartNotValid(fruitcart)) {
//       const err = new Error("fruitcart not valid");
//       reject(err);
//     }
//     const orderId = "12123143423123";
//     if (orderId) {
//       setTimeout(function () {
//         resolve(orderId);
//       }, 5000);
//     }
//   });
//   return promise;
// }

// function proceedtoPayment(orderId) {
//   return new Promise((resolve, reject) => {
//     resolve({ message: `payment to ${orderId} is Successful`, amount: 2500 });
//   });
// }

// function showOrderSummary(paymentInfo, amount) {
//   return new Promise((resolve, reject) => {
//     if (amount >= 200) {
//       resolve({
//         message: `You have ordered items that cost ${amount} RS`,
//         amt,
//       })
//     } else {
//       reject(new Error("Please buy more for discount"));
//     }
//   });
// }

// function cartNotValid(fruitcart) {
//   return true;
// }

// function PaymentInfo(orderId) {
//   return true;
// }

//

const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderID) {
    return proceedToPayment(orderID);
  })
  .then(function ({ message, amt }) {
    console.log(message, "of amount:", amt);
    return showOrderSummary(message, amt);
  })
  .then(function ({ message, amt }) {
    console.log("Your wallet has beed debited by:", amt);
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function () {
    console.log("No matter what happens, I will get executed");
  });

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // create order
    // Validate Cart
    // orderId
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid!");
      reject(err);
    }
    // logic for createOrder
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

function proceedToPayment(orderID) {
  // Logic for handling payment.
  // This function returns a promise
  return new Promise(function (resolve, reject) {
    // logic
    resolve({
      message: `Payment Successful for order id: ${orderID}`,
      amt: 2500,
    });
  });
}

function showOrderSummary(paymentInfo, amt) {
  return new Promise(function (resolve, reject) {
    // console.log(amt);
    if (amt >= 2000) {
      resolve({ message: "You have ordered items that cost ${amt} RS", amt });
    } else {
      reject(new Error("Please buy more for discount"));
    }
  });
}

function validateCart(cart) {
  // code to validate cart.
  return true;
  // return false;
}

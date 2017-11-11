function defaultDiscountRate() {
  return .10;
}

function applyDiscount(cost, discount = defaultDiscountRate()) {
  console.log(cost - cost * discount);
}

applyDiscount(100);

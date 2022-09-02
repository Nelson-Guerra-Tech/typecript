"use strict";
// These are NOT tuples:
// const stuff: (string | number)[] = [1,'asd', 'asdasd', 'asdasd', 2]
// const color: number[] = [23,45,234,234]
// This is a tuple!
const color = [255, 0, 45];
const goodRes = [200, "OK"];
// An array of tuples:
const responses = [
    [404, "Not Found"],
    [200, "OK"],
];
// Enum Example:
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 20] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 10] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
const myStatus = OrderStatus.DELIVERED;
function isDelivered(status) {
    return status === OrderStatus.DELIVERED;
}
console.log(isDelivered(OrderStatus.RETURNED));
// String Enum:
var ArrowKeys;
(function (ArrowKeys) {
    ArrowKeys["UP"] = "up";
    ArrowKeys["DOWN"] = "down";
    ArrowKeys["LEFT"] = "left";
    ArrowKeys["RIGHT"] = "right";
})(ArrowKeys || (ArrowKeys = {}));
console.log(ArrowKeys.DOWN);
console.log(ArrowKeys.DOWN);

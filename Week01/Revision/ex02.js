const paymentStatus = "APPROVED";

//if (paymentStatus === 'APPROVED') {
    //console.log("Pet-care service confirmed")
//} else if (paymentStatus === 'PENDING') {
    //console.log("Payment is being processed")
//} else if (paymentStatus === 'DECLINED') {
    //console.log("Payment unsuccessful")
//} else {
    //console.log("Unknown value")
//}

//For further info, use JS switch//
let message = ''
switch (paymentStatus) {
    case 'APPROVED':
        message = "Pet-care service confirmed";
        break;
    case 'PENDING':
        message = "Payment is being processed";
        break;
    case 'DECLINED':
        message = "Payment unsuccessful";
        break;
    default:
        message = "Unknown value";
}

console.log(message)
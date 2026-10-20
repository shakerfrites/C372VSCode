const payments = [
    {petName: "Chester", amount: 50, status: "APPROVED"},
    {petName: "Mochi", amount: 80, status: "PENDING"},
    {petName: "Mira", amount: 40, status: "DECLINED"}
];
//mochis print
mo_name = payments[1].petName
mo_status = payments[1].status
console.log(mo_name+"'s payment status: "+mo_status)

// if loops for printing
for (let i = 0; i < payments.length; i++) {
    if (payments[i].status === 'APPROVED') {
    console.log("Pet-care service for "+payments[i].petName+" confirmed")

} else if (payments[i].status === 'PENDING') {
    console.log("Payment for "+payments[i].petName+" is being processed")

} else if (payments[i].status === 'DECLINED') {
    console.log("Payment for "+payments[i].petName+" unsuccessful")

} else {
    console.log("Unknown value")
}};
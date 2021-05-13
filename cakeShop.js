function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {

    // Check if we're serving orders first-come, first-served

    // Push served orders to specific served arrays; if doesn't belong in either, return false
    let takeOutServed = [];
    let dineInServed = []

    for (let i = 0; i < servedOrders.length; i++) {

        if (takeOutOrders.includes(servedOrders[i])) {
            takeOutServed.push(servedOrders[i])
        } else if (dineInOrders.includes(servedOrders[i])) {
            dineInServed.push(servedOrders[i])
        } else {
            return false;
        }
    }

    // For both, if the value of the Orders index does not match the value of the Served index, or if there isn't an index at the Served, return false
    for (let i = 0; i < takeOutOrders.length; i++) {
        if (!takeOutServed[i] || takeOutOrders[i] !== takeOutServed[i]) {
            return false
        }
    }

    for (let i = 0; i < dineInOrders.length; i++) {
        if (!dineInServed[i] || dineInOrders[i] !== dineInServed[i]) {
            return false
        }
    }

    return true
}
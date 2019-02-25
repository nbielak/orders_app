export const fetchAllUnshippedOrders = () => (
    $.ajax({
        method: 'GET',
        url: '/api/orders/?shipped=false'
    })
)
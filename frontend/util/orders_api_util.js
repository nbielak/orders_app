export const fetchAllOrders = () => (
    $.ajax({
        method: 'GET',
        url: '/api/orders'
    })
)
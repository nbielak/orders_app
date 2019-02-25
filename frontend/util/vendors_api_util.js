export const fetchAllVendors = () => (
    $.ajax({
        method: 'GET',
        url: '/api/vendors'
    })
)
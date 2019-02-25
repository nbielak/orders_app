import * as VendorsApiUtil from '../util/vendors_api_util';

export const RECEIVE_ALL_VENDORS = "RECEIVE_ALL_VENDORS";

const receiveAllVendors = vendors => ({
    type: RECEIVE_ALL_VENDORS,
    vendors
})

export const fetchAllVendors = () => dispatch => (
    VendorsApiUtil.fetchAllVendors().then(
        vendors => dispatch(receiveAllVendors(vendors))
    )
);

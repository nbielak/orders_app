class Api::ShipmentsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        @shipments = Shipment.all
    end
    
    def create
        @shipment = Shipment.new(shipment_params)
        @vendor = Vendor.find(params[:shipment][:vendor_id])
        order = Order.find(params[:shipment][:order_id])
        order.ship!
        @shipment.delivered ||= false
        @shipment.delivery_time = set_delivery_time
        @shipment.delivery_status = set_delivery_status(@shipment, @vendor)
        if @shipment.save
            render 'api/shipments/show'
        else
            render json: @shipment.errors.full_messages, status: 401
        end
    end

    private

    def shipment_params
        params.require(:shipment).permit(:order_id, :tracking_number, :vendor_id, :address, :delivered)
    end

    def set_delivery_time
        res = []

        10.times do
            res << 3
        end

        5.times do
            res << 5
        end

        2.times do
            res << 10
        end

        res.shuffle.sample
    end

    def set_delivery_status(shipment, vendor)
        diff = shipment.delivery_time - vendor.avg_delivery
        if diff <= 3
            return 'normal'
        elsif diff <= 5
            return 'not normal'
        else
            return 'very late'
        end
    end
end

class Api::ShipmentsController < ApplicationController
    def index
        @shipments = Shipment.all
    end
    
    def create
        @shipment = Shipment.new(shipment_params)
        if @shipment.save
            render 'api/shipments/show'
        else
            render json: @shipment.errors.full_messages, status: 401
        end
    end

    private

    def shipment_params
        params.require(:shipment).permit(:order_number, :tracking_number, :vendor, :address, :delivered, :delivery_time)
    end
end

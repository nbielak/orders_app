class Api::VendorsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        @vendors = Vendor.all
    end

    def show
        @vendor = Vendor.find(params[:id])
    end

    def create
        @vendor = Vendor.new(vendor_params)
        if @vendor.save
            render 'api/vendors/show'
        else
            render json: @vendor.errors.full_messages, status: 401
        end
    end

    private

    def vendor_params
        params.require(:vendor).permit(:address, :name)
    end
end

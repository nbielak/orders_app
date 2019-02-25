class Api::OrdersController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        @orders = Order.all
    end

    def show
        @order = Order.find(params[:id])
    end

    def create
        @order = Order.new(order_params)
        if @order.save
            render 'api/orders/show'
        else
            render json: @order.errors.full_messages, status: 401
        end
    end

    private

    def order_params
        params.require(:order).permit(:information, :vendor_id, :shipped)
    end
end

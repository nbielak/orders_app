# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

Order.delete_all
Shipment.delete_all
Vendor.delete_all

20.times do
    Vendor.create!(
        name: Faker::Company.unique.name,
        address: Faker::Address.unique.full_address
    )
end

vendors = Vendor.all

vendors.each do |vendor|
    50.times do
        Order.create!(
            vendor_id: vendor.id,
            information: Faker::Hipster.sentence(4),
            shipped: Faker::Boolean.boolean
        )
    end
end

orders = Order.all.shuffle

def calc_delivery_status(vendor_id, delivery_time)
    vendor = Vendor.find(vendor_id)
    diff = delivery_time - vendor.avg_delivery
    if diff <= 3
        return 'normal'
    elsif diff <= 5
        return 'not normal'
    else
        return 'very late'
    end
end

(0..500).each do |i|
    order = orders[i]
    delivery = (1..15).to_a.sample
    Shipment.create!(
        tracking_number: Faker::Number.unique.number(8),
        address: Faker::Address.unique.full_address,
        delivered: Faker::Boolean.boolean,
        order_id: order.id,
        vendor_id: order.vendor_id,
        delivery_time: delivery,
        delivery_status: calc_delivery_status(order.vendor_id, delivery)
    )
    order.ship!
end
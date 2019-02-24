@shipments.each do |shipment|
    json.set! shipment.id do
        json.partial! 'shipment', shipment: shipment
    end
end
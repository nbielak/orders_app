Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :shipments, only: [:index, :create]
    resources :vendors, only: [:index, :show, :create]
    resources :orders, only: [:index, :show, :create]
  end
end

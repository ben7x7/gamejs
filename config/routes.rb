Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'pages#home'
  get 'jackpot', to: 'pages#jackpot', as: :jackpot
  get 'memory', to: 'pages#memory', as: :memory
  # get 'projects', to: 'pages#projects', as: :projects
  # get 'contact', to: 'pages#contact', as: :contact
end

require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Gig360
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

    config.browserify_rails.commandline_options = [
      '-t [ babelify --presets [ latest ] --plugins [ add-module-exports ] ]',
      '-t vueify',
    ]
    Rails.application.config.assets.paths << Rails.root.join('node_modules')

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end

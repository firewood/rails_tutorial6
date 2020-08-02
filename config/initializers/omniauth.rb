Rails.application.config.middleware.use OmniAuth::Builder do
  twitter_config = Rails.application.credentials.twitter
  abort("Twitter config does not exist") unless twitter_config
  provider :twitter, twitter_config[:consumer_key], twitter_config[:consumer_secret]
end

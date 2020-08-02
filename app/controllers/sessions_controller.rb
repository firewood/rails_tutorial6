class SessionsController < ApplicationController

  def callback
    params = user_params
    provider = params['provider']
    uid = params['uid']
    user = User.find_or_create_by(provider: provider, uid: uid)
    unless user
      failure
      return
    end
    info = params['info']

    if logger
      logger.info "OMNIAUTH USER: #{user && user.id}, INFO: #{info}"
    end

    if user && info
      puts "INFO: #{info}"
      session[:user_id] = user.id
    end

    origin = request.env['omniauth.origin']
    redirect_to (origin || root_path), status: 301
  rescue => e
    failure
  end



  private
    def user_params
      ActionController::Parameters.new(request.env['omniauth.auth']).permit('provider', 'uid', 'info' => ['name', 'nickname'])
    end
end

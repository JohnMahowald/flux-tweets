class UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save!
      redirect_to user_url(@user)
    else
      render :new
    end
  end

  def show
    begin
      @user = User.find(params[:id])
    rescue 
      render :new if @user.nil?
      return
    end

    render :show
  end

  private

  def user_params
    params.require(:user).permit(:username)
  end
end

class Api::TweetsController < ApplicationController
  def index
    @tweets = Tweet.all
    render json: @tweets
  end

  def show
    @tweet = Tweet.find(params[:id])
    render json: @tweet
  end

  def create
    @tweet = Tweet.new(tweet_params)

    if @tweet.save
      render json: @tweet
    else
      render @tweet.errors.full_messages, status: unprocessable_entity
    end
  end

  def destroy
    @tweet = Tweet.find(params[:id])
    @tweet.destroy
    render json: @tweet
  end

  private

  def tweet_params
    params.require(:tweet).permit(:content, :user_id)
  end
end

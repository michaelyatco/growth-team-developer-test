class StaticPagesController < ApplicationController

  def root
  	 search_result = params[:search_result]
  	 @gems = Unirest.get("https://rubygems.org/api/v1/search.json?query=#{search_result}").body
  	 if search_result == nil
  	   flash[:warning] = "Oh no! Looks like this gem cannot be found!"
  	 end
  end

  def favorites
  end

end

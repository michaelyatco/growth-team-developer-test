class StaticPagesController < ApplicationController

  def root
  	search_result = params[:search_result]
  	@gems = Unirest.get("https://rubygems.org/api/v1/search.json?query=#{search_result}").body
  end

  def favorites
  end

end

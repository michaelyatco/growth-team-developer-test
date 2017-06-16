class StaticPagesController < ApplicationController

  def root
  	search_result = params[:search_result]
  	if search_result
	    @gems = Unirest.get("https://rubygems.org/api/v1/search.json?query=#{search_result}").body
  	else
  	  @gems = []
  	end
  end

  def favorites
    # @favorites = gems.favorites.create
  end

end

class StaticPagesController < ApplicationController

  def root
    search_result = params[:search_result]
    if search_result
      api = Unirest.get("https://rubygems.org/api/v1/search.json?query=#{search_result}").body
      @gem = []
      api.each do |gem|
        @gem.push(gem) if gem['name'].downcase == search_result
      end
  	else
  	  @gems = []
    end
  end

  def favorites
  end
end

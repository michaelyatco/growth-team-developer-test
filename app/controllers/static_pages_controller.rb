class StaticPagesController < ApplicationController

  def root
  	gems = open('http://rubygems.org')
  end

  def favorites
  end

end

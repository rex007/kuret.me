require 'test_helper'

class BioControllerTest < ActionController::TestCase
  test "should get content:text" do
    get :content:text
    assert_response :success
  end

end

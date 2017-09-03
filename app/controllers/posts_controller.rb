class PostsController < ApplicationController
skip_before_action :verify_authenticity_token
  before_action :set_post, only: [:show, :edit, :update, :destroy]


  # GET /posts
  # GET /posts.json
  def index
    posts = Post.all
    render json: posts.to_json
  end

  # GET /posts/1
  # GET /posts/1.json
  def show
    @post = Post.find(params[:id])
  end

  # GET /posts/new
  def new
    @post = post.new
  end


  def feed
    @blog_articles = Post.all
    respond_to do |format|
      format.rss { render :layout => false }
    end
  end


  # GET /posts/1/edit
  def edit
  end

  # POST /posts
  # POST /posts.json
  def create
    @post = post.new(post_params)

    respond_to do |format|
      if @post.save
        format.html { redirect_to @post, notice: 'post was successfully created.' }
        format.json { render :show, status: :created, location: @post }
      else
        format.html { render :new }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /posts/1
  # PATCH/PUT /posts/1.json
  def update
    respond_to do |format|
      if @post.update(post_params)
        format.html { redirect_to @post, notice: 'post was successfully updated.' }
        format.json { render :show, status: :ok, location: @post }
      else
        format.html { render :edit }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /posts/1
  # DELETE /posts/1.json
  def destroy
    @post.destroy
    respond_to do |format|
      format.html { redirect_to posts_url, notice: 'post was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def post_params
      params.require(:post).permit(:title, :id, :content)
    end
end


# Post.getAll().forEach(function(post) {
#  fetch('posts', {
#   method: 'post', 
#   headers: {
#     'X-CSRF-Token': $('[name="csrf-token"]')[0].content, 
#     'authenticity_token': $('[name="csrf-token"]')[0].content, 
#     'Content-Type': 'application/json',
#     'Accept': 'application/json'
#   },
#   body: JSON.stringify({
#       credentials: 'same-origin',
#     "post": {
#       "title" :"bye"
#     },
#     'X-CSRF-Token': $('[name="csrf-token"]')[0].content
#     'authenticity_token': $('[name="csrf-token"]')[0].content, 
#   })
# })
#  })

class PostsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    def index
        post = Post.all
        render json: post
    end

    def show
        post = Post.find(params[:id])
        render json:post
    end

    def create
        post = Post.create!(post_params)
        render json: post, status: :created
    end

    def destroy
        post = Post.find(params[:id])
        post.destroy
        head :no_content
    end

    private

    def render_not_found_response
        render json: { error: "post not found" }, status: :not_found
      end

      def post_params
        params.permit(:title, :description, :image)
    end

end

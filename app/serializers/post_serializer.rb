class PostSerializer < ActiveModel::Serializer
  attributes :id, :title , :image , :description


  has_many:likes
end

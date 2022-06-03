# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

p1 = Post.create(title:"Nature Beauty",
    image:"https://media.istockphoto.com/photos/moraine-lake-at-sunrise-banff-national-park-canada-picture-id471926619?s=612x612",
    description:"Beautiful Moraine Lake in Banff National Park, Canada. Photographed at sunrise.")

p2 = Post.create(title:"Rivers in Iceland",
    image:"https://media.istockphoto.com/photos/beautiful-emeraldcolored-glacial-rivers-of-iceland-taken-from-a-picture-id1202227531?s=612x612",
    description:"Helicopter view of wonderful turquoise-colored glacial rivers in Iceland..")

p3 = Post.create(title:"K2 mountain",
        image:"https://media.istockphoto.com/photos/snowcapped-k2-peak-picture-id1288385045?s=612x612",
        description:"K2 the second tallest mountain in the world")


p4 = Post.create(title:"Silhouette of Taj Mahal",
        image:"https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
        description:"An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife")




# seeds for likes

l1 = Like.create(like:10,post_id:p1.id)
l1 = Like.create(like:12,post_id:p2.id)
l1 = Like.create(like:8,post_id:p3.id)
l1 = Like.create(like:17,post_id:p4.id)



puts '🌱 Seeding Done!'
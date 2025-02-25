module.exports = (sequelize, DataTypes) => {

    const Posts = sequelize.define("Posts", {
        title: {
            type: DataTypes.STRING, 
            allowNull: false,
        },
        postText: {
            type: DataTypes.STRING, 
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING, 
            allowNull: false,
        }
    })

    Posts.associate = (models) => {
        Posts.hasMany(models.Comments, { 
           onDelete: "CASCADE",
        }); 
    };

    Posts.associate = (models) => {
        Posts.hasMany(models.Likes, { 
           onDelete: "CASCADE",
        }); 
    };

    return Posts;
}
module.exports = (sequelize, DataTypes)=>{

    const NewsBlogs = sequelize.define("NewsBlogs", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        Reporter_name :{
            type: DataTypes.STRING,
            allowNull: false,
        },
        video :{
            type: DataTypes.STRING,
            allowNull: true,
        },
        category :{
            type: DataTypes.STRING,
            allowNull: false,
        },
        views :{
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue : 0,
        },
        newsCity :{
            type: DataTypes.STRING,
            allowNull: false,
        },
        isDeleted :{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue : false
        },        
    },
    
    {
        created_at: {
            allowNull: false,
        type: DataTypes.DATE,
        defaultValue: sequelize.fn('NOW'),
          },
        // createdAt : true,
        updatedAt : false
    }
    );
    return NewsBlogs;
}
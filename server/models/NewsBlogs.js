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
            allowNull: true,
            defaultValue : 'Null'
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue : 'Null'
        },
        content: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue : 'Null'
        },
        Reporter_name :{
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue : 'Null'
        },
        video :{
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue : 'Null'
        },
        category :{
            type: DataTypes.STRING,
            allowNull: true,
        },
        views :{
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue : 0
        },
        newsCity :{
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'Null'
        },
        isDeleted :{
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue : false
        },
        
    },
    {
        createdAt : true,
        updatedAt: false
    }
    );
    return NewsBlogs;
}
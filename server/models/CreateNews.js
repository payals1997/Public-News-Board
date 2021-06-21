module.exports = (sequelize,DataTypes) =>{
    const CreateNews = sequelize.define("CreateNews",{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true
    },
    title:
    {
       type:DataTypes.STRING,
       allowNull:false
    },
    content:
    {
       type:DataTypes.STRING,
       allowNull:false
    },
   ReporterName:
    {
       type:DataTypes.STRING,
       allowNull:false
    },
},
    {
        createdAt:false,
        updatedAt:false
    }
    );
    
    return CreateNews;
    }
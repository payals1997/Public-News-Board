module.exports = (sequelize,DataTypes)=>{
const Register = sequelize.define("Register",{
id:{
    primaryKey:true,
    type:DataTypes.INTEGER,
    autoIncrement:true
},

name:
{
   type:DataTypes.STRING,
   allowNull:false
},
email:
{
   type:DataTypes.STRING,
   allowNull:false
},
city:
{
   type:DataTypes.STRING,
   allowNull:false
},
password:
{
   type:DataTypes.STRING,
   allowNull:false
},
phone:
{
   type:DataTypes.STRING,
   allowNull:false
},
role:
{
   type:DataTypes.STRING,
   allowNull:false
},
isApproved:
{
   type:DataTypes.BOOLEAN,
   allowNull:false
}
},
{
    createdAt:false,
    updatedAt:false
})

return Register;
}
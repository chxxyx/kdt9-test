// user에 대한 테이블 정의

const User = function (sequelize, DataTypes) {
    //1. sequelize는 models/index.js에 있는 sequlize
    //2. DataTypes는  models/index.js에 있는 Sequlize

    const model = sequelize.define(
        'user', // 1. 테이블 
        { // 2. 컬럼 값들 각각 정의
            id: {
                type: DataTypes.INTEGER, // int
                allowNull: false, // not null
                primaryKey: true,
                autoIncrement: true
            },
            userid: {
                type: DataTypes.STRING(20), // varchar(10)
                allowNull: false,
            }, 
            name: {
                type: DataTypes.STRING(10), // varchar(10)
                allowNull: false,
            }, 
            pw: {
                type: DataTypes.STRING(20), // varchar(10)
                allowNull: false,
            }, 
        }, 
        
        // {
        //     tableName: 'user',
        //     freezeTableName: true, // 이건 true로 안 하면 visitors와 같이 복수형이 된다.
        //     timestamps: false

        // }
        
        );

        return model;
}

module.exports = User;
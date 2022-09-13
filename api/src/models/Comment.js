const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('comment', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    texto: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {
    timestamps: true
  });
};
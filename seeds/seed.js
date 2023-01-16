const sequelize = require('../config/connection');
const { User, Blog } = require('../models');

const userData = require('./userData.json');
const BlogData = require('./BlogData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const postMessage = [] 

  const postMessage = []

  for (const project of projectData) {
    const newpost = await Project.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
    postMessage.push(newpost)
  }

  process.exit(0);
};

seedDatabase();
  
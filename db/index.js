Sequelize = require('sequelize');
const { petNames, ownerNames } = require('./seed');

const db = new Sequelize('postgres://localhost:5432/pets', { logging:false })

const Pet = db.define('pet', {
	name: Sequelize.STRING
})

const Owner = db.define('owner', {
	name: Sequelize.STRING
})

const seed = async () =>{
	const [ charlie, bubba, forest ] = await Promise.all(petNames.map(pet => {
		return Pet.create({name: pet})
	}))
	// console.log(charlie)
	const [ kevin, kylie, leo ] = await Promise.all(ownerNames.map(owner => {
		return Owner.create({name: owner})
	}))

	kevin.setPet(charlie);
	bubba.setOwner(kylie);
	leo.setPet(forest);

}

Pet.belongsTo(Owner)
Owner.hasOne(Pet)

module.exports = {
	db,
	Owner,
	Pet,
	seed
}


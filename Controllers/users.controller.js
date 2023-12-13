import User from "../Models/users.model.js";

// User.belongsTo(reviews,genders)

export class UsersController {

    listall = async () => {
        const result = await User.findAll();
        return result;
    }

    getone = async (id) => {
        const result = await User.findByPk(id);
        return result;
    }

    create = async (data) => {
        console.log(data)
        const result = await User.create(data);
        return result;
    }

    update = async (data) => {
        const result = await User.update(data, { where: {id: data.id} });
        return result;
    }

    delete = async id => {
        const result = await User.destroy({ where: { id: id } });
        return result;
    }

}


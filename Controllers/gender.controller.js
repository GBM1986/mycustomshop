import Gender from "../Models/gender.model.js";

export class GendersController {

    listall = async () => {
        const result = await Gender.findAll();
        return result;
    }

    getone = async (id) => {
        const result = await Gender.findByPk(id);
        return result;
    }

    create = async (data) => {
        console.log(data)
        const result = await Gender.create(data);
        return result;
    }

    update = async (data) => {
        const result = await Gender.update(data, { where: { id: data.id } });
        return result;
    }

    delete = async id => {
        const result = await Gender.destroy({ where: { id: id } });
        return result;
    }

}


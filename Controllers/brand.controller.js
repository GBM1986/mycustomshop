import Brand from "../Models/brand.model.js";

export class BrandController {

    listall = async () => {
        const result = await Brand.findAll();
        return result;
    }

    getone = async (id) => {
        const result = await Brand.findByPk(id);
        return result;
    }

    create = async (data) => {
        console.log(data)
        const result = await Brand.create(data);
        return result;
    }

    update = async (data) => {
        const result = await Brand.update(data, { where: {id: data.id} });
        return result;
    }

    delete = async id => {
        const result = await Brand.destroy({ where: { id: id } });
        return result;
    }

}


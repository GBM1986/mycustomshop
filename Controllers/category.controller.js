import Category from "../Models/category.model.js";

export class CategoryController {

    listall = async () => {
        const result = await Category.findAll();
        return result;
    }

    getone = async (id) => {
        const result = await Category.findByPk(id, {
			include: {
				model: Product,
				attributes: ['id', 'name']
			}
		});
		return result
	}

    create = async (data) => {
        console.log(data)
        const result = await Category.create(data);
        return result;
    }

    update = async (data) => {
        const result = await Category.update(data, { where: {id: data.id} });
        return result;
    }

    delete = async id => {
        const result = await Category.destroy({ where: { id: id } });
        return result;
    }

}


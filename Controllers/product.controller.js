import Product from "../Models/product.model.js";

export class ProductController {

    listall = async () => {
        const result = await Product.findAll();
        return result;
    }

    getone = async (id) => {
        const result = await Product.findByPk(id);
        return result;
    }

    create = async (data) => {
        console.log(data)
        const result = await Product.create(data);
        return result;
    }

    update = async (data) => {
        const result = await Product.update(data, { where: {id: data.id} });
        return result;
    }

    delete = async id => {
        const result = await Product.destroy({ where: { id: id } });
        return result;
    }

}


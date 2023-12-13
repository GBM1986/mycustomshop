import Review from "../Models/review.model.js";

// Review.belongsTo(reviews,genders)

export class ReviewsController {

    listall = async () => {
        const result = await Review.findAll();
        return result;
    }

    getone = async (id) => {
        const result = await Review.findByPk(id);
        return result;
    }

    create = async (data) => {
        console.log(data)
        const result = await Review.create(data);
        return result;
    }

    update = async (data) => {
        const result = await Review.update(data, { where: {id: data.id} });
        return result;
    }

    delete = async id => {
        const result = await Review.destroy({ where: { id: id } });
        return result;
    }

}


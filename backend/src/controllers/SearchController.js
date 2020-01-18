const Dev = require('../models/Dev');
const parseStringAsArray = require("../utils/parseStringAsArray");


module.exports = {
    async index(request, response)
    {
        //console.log(reques.query);
        const{ latitude, longitude, techs } = request.query;

        const techsArray = parseStringAsArray(techs);
        //console.log(techsArray);

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
        });

        return response.json({ devs });
    }
}
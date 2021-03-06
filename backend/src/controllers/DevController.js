const axios = require("axios");
const Dev = require('../models/Dev');
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {

    async index(request, response)
    {
        const devs = await Dev.find();
        return response.json(devs);
    },

    async store(request, response)
    {
    
        const { github_username, techs, longitude, latitude} = request.body;
        
        let dev = await Dev.findOne({github_username});

        if(!dev)
        {
            const gitResponse = await axios.get(`https://api.github.com/users/${github_username}`);

            //console.log(request.body);
            const{ name = login, avatar_url, bio} = gitResponse.data;
            //console.log(name, avatar_url, bio); 
            const techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };

            dev = await Dev.create({
                name,
                github_username,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            });
        }
        
        return response.json(dev);
    }
};
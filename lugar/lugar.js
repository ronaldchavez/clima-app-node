const axios = require('axios');

const getRole = async(direccion) => {

	let encodedUrl = encodeURI(direccion);

 	let resp = await axios.get(`https://auctions.4laender.com/backend/role_all`);

 	return {
 		status: 200,
 		roles: resp.data
 	}

}

module.exports = {
	getRole
}
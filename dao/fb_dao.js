var token = 'EAACEdEose0cBAE7yrS3ZBvhb44wD3t6Twv1jcG5eAlTY2VceX4g0Fm3hVuyaB9MyYaj8Gnf66GmbJuwJcZBAk2sTk59Ne3dOpP2GprvStZB3TwM3UZApJSTzMcjKCSZA6LPXLpHSiGTr7o1YZBq0R7sweZCgfw0GRUa22K3GmNWJBTOeFyIZARXr'
var facebook = require('fb-node');
facebook.token = token;


module.exports = {

	fb_get: function(url) {
		return facebook.get(url);

	}

}
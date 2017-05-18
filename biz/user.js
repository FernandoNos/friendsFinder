var fb_dao = require("../dao/fb_dao")


module.exports = {

	get_user_likes: function() {
		return fb_dao.fb_get("/me/likes").then(function(data) {
			return data;
		}).catch(function(e) {
			return e;
		});

	},
	get_user_next_likes: function(data){

	}

}

const InvalidAccess = use('App/Exceptions/InvalidAccessException')
const InvalidResource = use('App/Exceptions/ResourceNotExistException')
class AuthorizationService {
	verifyPermission(resource, user) {
		if(!resource) {
			throw new InvalidResource()
		}
		if(resource.user_id !== user.id) {
			throw new InvalidAccess()
			// TODO: write  invalid access error message 
		}
	}
}
module.exports = new AuthorizationService()
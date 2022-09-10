class Auth {
	/**
	 * Constructor
	 *
	 * @param  username  string
	 * @param  password  string
	 */
	public constructor(username: string, password: string) {
		return {
			username,
			password,
		};
	}
}

export default Auth;

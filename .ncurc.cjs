module.exports = {
	peer: true,
	// Keep Node typings on the runtime major configured in .tool-versions.
	/** @param {string} name */
	target: (name) => (name === '@types/node' ? 'minor' : 'latest')
};

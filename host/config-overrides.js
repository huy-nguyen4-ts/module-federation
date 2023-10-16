const { ModuleFederationPlugin } = require("webpack").container;
const { dependencies } = require("./package.json");

module.exports = function override(config, env) {
	config.plugins = config.plugins || [];
	config.plugins.push(
		new ModuleFederationPlugin({
			name: "host",
			filename: "remoteEntry.js",
			remotes: {
				header: "header@http://localhost:4001/remoteEntry.js",
				shared: "shared@http://localhost:3001/remoteEntry.js",
				page: "page@http://localhost:5001/remoteEntry.js",
			},
			shared: {
				...dependencies,
				react: {
					singleton: true,
					version: dependencies["react"],
				},
				"react-dom": {
					singleton: true,
					version: dependencies["react-dom"],
				},
			},
		})
	);
	return config;
};

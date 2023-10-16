const { ModuleFederationPlugin } = require("webpack").container;
const { dependencies } = require("./package.json");

module.exports = function override(config, env) {
	config.plugins = config.plugins || [];
	config.plugins.push(
		new ModuleFederationPlugin({
			name: "header",
			filename: "remoteEntry.js",
			exposes: {
				"./Header": "./src/Header.tsx",
			},
			shared: {
				...dependencies,
				react: {
					singleton: true,
					version: dependencies["react"],
					requiredVersion: dependencies["react"],
				},
				"react-dom": {
					singleton: true,
					version: dependencies["react-dom"],
					requiredVersion: dependencies["react-dom"],
				},
			},
		})
	);
	config.output = {
		...config.output,
		publicPath: "auto",
	};

	return config;
};

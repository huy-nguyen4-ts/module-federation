const { ModuleFederationPlugin } = require("webpack").container;

module.exports = function override(config, env) {
	config.plugins = config.plugins || [];
	config.plugins.push(
		new ModuleFederationPlugin({
			name: "shared",
			filename: "remoteEntry.js",
			exposes: {
				"./user": "./src/user.ts",
			},
		})
	);
	config.output = {
		...config.output,
		publicPath: "auto",
	};

	return config;
};

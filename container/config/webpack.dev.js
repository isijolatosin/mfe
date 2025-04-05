const path = require("path");
const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const devConfig = {
	mode: "development",
	devServer: {
		port: 8080,
		historyApiFallback: {
			index: "index.html",
		},
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "container",
			remotes: {
				marketing: `marketing@${process.env.MARKETINGAPP_PRODUCTION_DOMAIN}/remoteEntry.js`,
			},
			shared: packageJson.dependencies,
		}),
	],
};

module.exports = merge(commonConfig, devConfig);

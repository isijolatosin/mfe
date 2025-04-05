const path = require("path");
const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const mrktDomain = process.env.MARKETINGAPP_PRODUCTION_DOMAIN;

const prodConfig = {
	mode: "production",
	output: {
		filename: "[name].[contenthash].js",
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "container",
			remotes: {
				marketing: `marketing@${mrktDomain}/remoteEntry.js`,
			},
			shared: packageJson.dependencies,
		}),
	],
};

module.exports = merge(commonConfig, prodConfig);

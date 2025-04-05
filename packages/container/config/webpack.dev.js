const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/moduleFederationPlugin");
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
				marketing: `marketing@${process.env.DEPLOY_PRIME_URL}/remoteEntry.js`,
			},
			shared: packageJson.dependencies,
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "../public/index.html"),
		}),
	],
};

module.exports = merge(commonConfig, devConfig);

module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			"@babel/plugin-proposal-export-namespace-from",
			"react-native-reanimated/plugin",
			"module:react-native-dotenv",
			[
				"module-resolver",
				{
					root: [__dirname],
					alias: {
						"@assets": "./assets",
						"@components": "./components",
						"@constants": "./constants",
						"@locales": "./locales",
					},
				},
			],
			require.resolve("expo-router/babel"),
		],
	};
};

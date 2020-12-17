module.exports = {
	ci: {
		collect: {
            /* Add configuration here */
			numberOfRuns: 3,
            startServerCommand: 'npm run start',
            url: ['http://localhost:9000']
		},
		// assert: {
		// 	assertions: {
		// 	  'categories:performance': ['warn', {minScore: 1}],
		// 	  'categories:accessibility': ['error', {minScore: 1}]
		// 	}
		//   },
		upload: {
            /* Add configuration here */
            target: 'temporary-public-storage',
		},
	},
};

module.exports = {
  ci: {
    collect: {
      url: ["http://localhost:3000"],
      collect: {
        numberOfRuns: 2
      }
    },
    upload: {
      startServerCommand: "yarn dev",
      target: "temporary-public-storage"
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { minScore: 0.3 }],
        "categories:accessibility": ["error", { minScore: 0.7 }]
      }
    }
  }
};

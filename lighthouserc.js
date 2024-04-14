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
        "categories:performance": ["warn", { minScore: 50 }],
        "categories:accessibility": ["error", { minScore: 50 }]
      }
    }
  }
};

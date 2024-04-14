module.exports = {
  prompt: ({ prompter, args }) =>
    prompter
      .prompt({
        type: "input",
        name: "root",
        message: "Enter the root path where the project should be created:"
      })
      .then(({ root }) =>
        prompter
          .prompt({
            type: "input",
            name: "name",
            message: "Enter the project name:"
          })
          .then(({ name }) => {
            if (!root) throw new Error("Root path is required. Please enter a root path.");
            if (!name) throw new Error("Project name is required. Please enter a project name.");

            return { root, name, args };
          })
      )
};

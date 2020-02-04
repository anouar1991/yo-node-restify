'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const PATH = {
  models: 'models/',
  services: 'services/',
  controllers: 'controllers/',
  routes: 'routes/'
};
const PREFIXES = {
  models: ".model.ts",
  services: ".service.ts",
  controllers: ".controller.ts",
  routes: '.routes.ts'
};
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.substr(1)
};
module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the best ${chalk.red('generator-node-restify')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'endpoint',
        message: 'the model name',
        default: false
      }
    ];

    return this.prompt(prompts).then(answers => {
      this.endpoint = answers.endpoint;

      this.modelName = capitalize(answers.endpoint);
    });
  }

  writing() {
    let generate = (fromTemplate, toTemplate, withOptions) => {
      this.fs.copyTpl(
        this.templatePath(fromTemplate),
        this.destinationPath(toTemplate), withOptions
      );
    };

    let generateModels = () => {
      generate('_model.ts', PATH.models + this.endpoint + PREFIXES.models, {
        endpoint: this.endpoint,
        model: this.modelName
      });
    };

    let generateServices = () => {
      generate('_service.ts', PATH.services + this.endpoint + PREFIXES.services, {
        endpoint: this.endpoint,
        model: this.modelName
      });
    };

    let generateControllers = () => {
      generate('_controller.ts', PATH.controllers + this.endpoint + PREFIXES.controllers, {
        endpoint: this.endpoint,
        model: this.modelName
      });
    };
    let generateRoutes = () => {
      generate('_route.ts', PATH.routes + this.endpoint + PREFIXES.routes, {
        endpoint: this.endpoint,
      });
    };
    let updateRoutesIndex = () => {
      const routesImportHook = '/*ROUTES imports*/';
      const routesExportHook = '*ROUTES exports*/';
      const path = 'routes/index.ts';
      let file = this.fs.read(path);
      const importStatement = 'import '+ this.endpoint +'Routes from \'./'+this.endpoint+'.routes\';';
      const exportStatement = '    '+this.endpoint+'Routes,';
      file = file.replace(routesImportHook, routesImportHook + '\n' + importStatement);
      file = file.replace(routesExportHook, routesExportHook + '\n' + exportStatement);
      this.fs.write(path, file);
    };
    generateModels();
    generateServices();
    generateControllers();
    generateRoutes();
    updateRoutesIndex();
  }

  install() {
    //this.installDependencies();
  }
};

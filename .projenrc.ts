import { awscdk, javascript } from 'projen'
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'motoish',
  authorAddress: 'yuan.zhang@gmx.com',
  cdkVersion: '2.156.0',
  constructsVersion: '10.3.0',
  projenVersion: '0.87.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.4.0',
  name: 'projen-sample',
  projenrcTs: true,
  repositoryUrl: 'git@github.com-motoish:motoish/projen-sample.git',
  depsUpgrade: true,
  releaseToNpm: false,
  pullRequestTemplate: true,
  pullRequestTemplateContents: [
    'Fix#',
    '',
    '## :classical_building: Background',
    '',
    '### :bookmark: URL',
    '',
    '## :point_right: Checkpoint',
    '',
    '### :white_check_mark: Flow',
    '',
    '### :warning: Impact',
    '',
    '## :memo: Changelog',
    '',
  ],
  prettier: true,
  prettierOptions: {
    settings: {
      semi: false,
      singleQuote: true,
    },
  },
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: ['husky@^9.1.5', 'lint-staged@^15.2.10'],
  packageName: 'projen-sample',
  packageManager: javascript.NodePackageManager.BUN,
})
project.synth()

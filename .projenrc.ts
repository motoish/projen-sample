import { awscdk, javascript } from 'projen'
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'motoish',
  authorAddress: 'yuan.zhang@gmx.com',
  cdkVersion: '2.186.0',
  constructsVersion: '10.4.2',
  projenVersion: '0.92.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.8.0',
  name: 'projen-sample',
  projenrcTs: true,
  repositoryUrl: 'git@github.com-motoish:motoish/projen-sample.git',
  depsUpgrade: true,
  autoApproveUpgrades: true,
  autoApproveOptions: {
    allowedUsernames: ['github-actions'],
    secret: 'PROJEN_GITHUB_TOKEN',
  },
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
  devDeps: ['husky@^9.1.5', 'lint-staged@^15.5.0', '@types/node@^22.13.14'],
  packageName: 'projen-sample',
  packageManager: javascript.NodePackageManager.BUN,
})
project.synth()

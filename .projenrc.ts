import { awscdk } from 'projen'
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'motoish',
  authorAddress: 'yuan.zhang@gmx.com',
  cdkVersion: '2.154.0',
  projenVersion: '0.86.7',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.4.0',
  name: 'projen-sample',
  projenrcTs: true,
  repositoryUrl: 'git@github.com-motoish:motoish/projen-sample.git',
  depsUpgrade: true,
  releaseToNpm: false,
  prettier: true,
  prettierOptions: {
    settings: {
      semi: false,
      singleQuote: true,
    },
  },
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
})
project.synth()

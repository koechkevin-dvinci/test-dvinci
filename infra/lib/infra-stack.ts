import * as cdk from '@aws-cdk/core';
import * as amplify from "@aws-cdk/aws-amplify";

export class InfraStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // create amplify app
    const amplifyApp = new amplify.App(this, "storybook", {
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: "Dvinci1",
        repository: "storybook",
        oauthToken: cdk.SecretValue.secretsManager("dev/dvinci1/github-token"),
      }),
      basicAuth: amplify.BasicAuth.fromCredentials("dvinci1", cdk.SecretValue.secretsManager("dev/storybook/basicAuth")),
      autoBranchDeletion: true,
    });

    // set the main branch
    const developBranch = amplifyApp.addBranch("develop");

    // add the rewrite rules 
    amplifyApp.addCustomRule(amplify.CustomRule.SINGLE_PAGE_APPLICATION_REDIRECT);

    // add env variable for npm registry 
    const npmToken = cdk.SecretValue.secretsManager("dev/npm/read-access-token").toString();
    amplifyApp.addEnvironment("NPM_TOKEN", npmToken);
    
  }
}

declare module Forge {
    var context: string;
    var hash: string;
    var pluginName: string;
    var pluginPath: string;
    var templatePath: string;
    var log: Logging.Logger;
    var defaultIconUrl: string;
    var gogsServiceName: string;
    var orionServiceName: string;
    var loggedInToGogs: boolean;
    function isForge(workspace: any): boolean;
    function initScope($scope: any, $location: any, $routeParams: any): void;
    function commandLink(projectId: any, name: any, resourcePath: any): string;
    function commandsLink(resourcePath: any, projectId: any): string;
    function reposApiUrl(ForgeApiURL: any): string;
    function repoApiUrl(ForgeApiURL: any, path: any): string;
    function commandApiUrl(ForgeApiURL: any, commandId: any, ns: any, projectId: any, resourcePath?: any): string;
    function executeCommandApiUrl(ForgeApiURL: any, commandId: any): string;
    function validateCommandApiUrl(ForgeApiURL: any, commandId: any): string;
    function commandInputApiUrl(ForgeApiURL: any, commandId: any, ns: any, projectId: any, resourcePath: any): string;
    function setModelCommands(ForgeModel: any, resourcePath: any, commands: any): void;
    function getModelCommands(ForgeModel: any, resourcePath: any): any;
    function getModelCommandInputs(ForgeModel: any, resourcePath: any, id: any): any;
    function setModelCommandInputs(ForgeModel: any, resourcePath: any, id: any, item: any): any;
    function enrichRepo(repo: any): void;
    function createHttpConfig(): {
        headers: {};
    };
    function createHttpUrl(projectId: any, url: any, authHeader?: any, email?: any): any;
    function commandMatchesText(command: any, filterText: any): any;
    function isSourceSecretDefinedForProject(ns: any, projectId: any): any;
    function redirectToSetupSecretsIfNotDefined($scope: any, $location: any): void;
}

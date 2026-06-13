import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureBlueprintBlueprintassignment implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Blueprint Blueprintassignment',
                name: 'N8nDevAzureBlueprintBlueprintassignment',
                icon: { light: 'file:./azure-blueprint-blueprintassignment.png', dark: 'file:./azure-blueprint-blueprintassignment.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Azure Blueprints Client manages blueprint definitions, assignments, artifacts, and operations.',
                defaults: { name: 'Azure Blueprint Blueprintassignment' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureBlueprintBlueprintassignmentApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}

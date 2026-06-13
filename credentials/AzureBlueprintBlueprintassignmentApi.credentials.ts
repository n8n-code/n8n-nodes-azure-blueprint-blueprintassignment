import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureBlueprintBlueprintassignmentApi implements ICredentialType {
        name = 'N8nDevAzureBlueprintBlueprintassignmentApi';

        displayName = 'Azure Blueprint Blueprintassignment API';

        icon: Icon = { light: 'file:../nodes/AzureBlueprintBlueprintassignment/azure-blueprint-blueprintassignment.png', dark: 'file:../nodes/AzureBlueprintBlueprintassignment/azure-blueprint-blueprintassignment.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Blueprint Blueprintassignment API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}

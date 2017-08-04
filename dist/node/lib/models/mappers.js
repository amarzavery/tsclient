"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mappers = {
    CheckNameAvailabilityResult: {
        required: false,
        serializedName: 'CheckNameAvailabilityResult',
        type: {
            name: 'Composite',
            className: 'CheckNameAvailabilityResult',
            modelProperties: {
                nameAvailable: {
                    required: false,
                    readOnly: true,
                    serializedName: 'nameAvailable',
                    type: {
                        name: 'Boolean'
                    }
                },
                reason: {
                    required: false,
                    readOnly: true,
                    serializedName: 'reason',
                    type: {
                        name: 'Enum',
                        allowedValues: ['AccountNameInvalid', 'AlreadyExists']
                    }
                },
                message: {
                    required: false,
                    readOnly: true,
                    serializedName: 'message',
                    type: {
                        name: 'String'
                    }
                }
            }
        }
    },
    StorageAccountCheckNameAvailabilityParameters: {
        required: false,
        serializedName: 'StorageAccountCheckNameAvailabilityParameters',
        type: {
            name: 'Composite',
            className: 'StorageAccountCheckNameAvailabilityParameters',
            modelProperties: {
                name: {
                    required: true,
                    serializedName: 'name',
                    type: {
                        name: 'String'
                    }
                },
                type: {
                    required: true,
                    isConstant: true,
                    serializedName: 'type',
                    defaultValue: 'Microsoft.Storage/storageAccounts',
                    type: {
                        name: 'String'
                    }
                }
            }
        }
    }
};
//# sourceMappingURL=mappers.js.map
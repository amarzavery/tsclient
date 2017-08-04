export declare const Mappers: {
    CheckNameAvailabilityResult: {
        required: boolean;
        serializedName: string;
        type: {
            name: string;
            className: string;
            modelProperties: {
                nameAvailable: {
                    required: boolean;
                    readOnly: boolean;
                    serializedName: string;
                    type: {
                        name: string;
                    };
                };
                reason: {
                    required: boolean;
                    readOnly: boolean;
                    serializedName: string;
                    type: {
                        name: string;
                        allowedValues: string[];
                    };
                };
                message: {
                    required: boolean;
                    readOnly: boolean;
                    serializedName: string;
                    type: {
                        name: string;
                    };
                };
            };
        };
    };
    StorageAccountCheckNameAvailabilityParameters: {
        required: boolean;
        serializedName: string;
        type: {
            name: string;
            className: string;
            modelProperties: {
                name: {
                    required: boolean;
                    serializedName: string;
                    type: {
                        name: string;
                    };
                };
                type: {
                    required: boolean;
                    isConstant: boolean;
                    serializedName: string;
                    defaultValue: string;
                    type: {
                        name: string;
                    };
                };
            };
        };
    };
};

export const config = {
    ShowInformation: 1,
    Information: [
        {
            Author: 'www.blackdayz.de',
            Version: '0.0.1',
            Licensce: 'OpenSource',
            Type: 'Game'
        }
    ],
    Game: [
        {
            ShopItems: [
                {
                    AutoClicker: {
                        Status: 1,
                        Count: 0,
                        NextItem: 0,
                        NextItemIncrease: 3,
                        Price: 10,
                        PriceIncrease: 1.3
                    },
                    Grandma: {
                        Status: 0,
                        Count: 0,
                        NextItem: 0,
                        NextItemIncrease: 8,
                        Price: 50,
                        PriceIncrease: 1.6
                    },
                    Wizard: {
                        Status: 0,
                        Count: 0,
                        NextItem: 0,
                        NextItemIncrease: 11,
                        Price: 200,
                        PriceIncrease: 1.9
                    },
                }
            ], ShopConfig: [
                {
                    Interval: 1,
                    Debug: 1,
                    DefaultValues: [
                        {
                            Score: 0,
                            Cpc: 1,
                            Csps: 0,
                            CspsValue: 0.2,
                            
                        }
                    ]
                }
            ]
        }
    ],
    ChangeLog: [
        {
            Version: "0.0.1" [
                {

                }
            ]
        }
    ]
};

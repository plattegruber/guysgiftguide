/** @type {import('./$types').PageLoad} */
export function load() {
    return {
        products: [
            {
                title: 'Groove Life Wallet',
                imageUrl: 'https://ucarecdn.com/bb138619-556c-4a2b-a234-697644612faa/-/preview/-/quality/smart/-/format/auto/',
                imageAltText: 'Groove Life wallet product image',
                description: 'It\'s like Ridge Wallet but better. Slim and sleek with a cool slide-out feature that displays all your cards.',
                link: 'https://groovelife.com/products/the-groove-wallet-black?variant=39974706970691'
            },
            {
                title: 'Solo Stove Bonfire 2.0',
                imageUrl: 'https://ucarecdn.com/14bffa9e-e3c0-4db2-942f-ebc5c5fc3de9/-/preview/-/quality/smart/-/format/auto/',
                imageAltText: 'Solo Stove Bonfire 2.0 product image',
                description: 'Smokeless, portable fire pit for the backyard or travel.',
                link: 'https://www.solostove.com/en-us/p/solo-stove-bonfire'
            }
        ]
    };
}
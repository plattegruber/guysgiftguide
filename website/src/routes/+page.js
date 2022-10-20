/** @type {import('./$types').PageLoad} */
export function load() {
    return {
        products: [
            {
                title: 'Basic Tee 8-Pack',
                imageUrl: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg',
                description: 'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.'
            },
            {
                title: 'Basic Tee',
                imageUrl: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg',
                description: 'Look like a visionary CEO and wear the same black t-shirt every day.'
            }
        ]
    };
}
export const products = [
    {
        id: 1,
        title: 'Universe',
        description: 'prints in format jpg about the universe',
        price: 15,
        stock: 5,
        category: 'Prints',
        img: 'image1.jpg',
    },
    {
        id: 2,
        title: 'Plants',
        description: 'prints in format jpg about plants and planets',
        price: 14,
        stock: 7,
        category: 'Prints',
        img: 'image2.jpg',
    },
    {
        id: 3,
        title: 'Botanical',
        description: 'prints in format jpg about flowers',
        price: 10,
        stock: 12,
        category: 'Prints',
        img: 'image3.jpg',
    },
];

export const getProducts  = new Promise((res, rej) => {
    setTimeout(() => res(products), 2000);
});
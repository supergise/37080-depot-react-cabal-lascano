export const products = [
    {
        id: 1,
        title: 'Universe',
        description: 'prints in format jpg',
        price: 15,
        stock: 5,
        category: 'Prints',
        img: '../img/image1.jpg',
    },
    {
        id: 2,
        title: 'Plants',
        description: 'prints in format jpg',
        price: 14,
        stock: 7,
        category: 'Prints',
        img: '../img/image2.jpg',
    },
    {
        id: 3,
        title: 'Botanical',
        description: 'prints in format jpg',
        price: 10,
        stock: 12,
        category: 'Prints',
        img: '../img/image3.jpg',
    },
];

export const getProducts  = new Promise((res, rej) => {
    setTimeout(() => res(products), 2000);
});
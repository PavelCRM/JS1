// Задание 1
const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
};
const task1Result = [];
for (let key in numbers) {
    if (numbers[key] >= 3) {
        console.log(numbers[key]);
        task1Result.push(numbers[key]);
    }
}
document.getElementById('task1').innerHTML = '<pre>' + task1Result.join(', ') + '</pre>';

// Задание 2
const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};
console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);
document.getElementById('task2').innerHTML = `
    <pre>
        ${post.author}<br>
        ${post.comments[0].rating.dislikes}<br>
        ${post.comments[1].userId}<br>
        ${post.comments[1].text}
    </pre>
`;

// Задание 3
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
products.forEach(product => {
    product.price *= 0.85;
});
console.log(products);
document.getElementById('task3').innerHTML = '<pre>' + JSON.stringify(products, null, 2) + '</pre>';

// Задание 4
const productsWithPhotos = products.filter(product => product.photos && product.photos.length > 0);
console.log(productsWithPhotos);
document.getElementById('task4').innerHTML = '<pre>' + JSON.stringify(productsWithPhotos, null, 2) + '</pre>';

const sortedProducts = products.sort((a, b) => a.price - b.price);
console.log(sortedProducts);
document.getElementById('task4').innerHTML += '<pre>' + JSON.stringify(sortedProducts, null, 2) + '</pre>';

// Задание 5
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
const weekDays = {};
en.forEach((day, index) => {
    weekDays[day] = ru[index];
});
console.log(weekDays);
document.getElementById('task5').innerHTML = '<pre>' + JSON.stringify(weekDays, null, 2) + '</pre>';

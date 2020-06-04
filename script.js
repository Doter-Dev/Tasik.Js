const money = prompt("Ваш бюджет на месяц");
const time = prompt("Введите дашу в формуте YYYY-MM-DD");
const article = prompt("Введите обязательную статью" +
"расходов в этом месяце");
const price = prompt("Во сколько обойдется");
const appData = {
    "budget": money,
    "timeData": new Date(time),
    "expenses": {
       article: price
    },
    "income" : [],
    "savings": false
}
alert(+appData.budget / 30)

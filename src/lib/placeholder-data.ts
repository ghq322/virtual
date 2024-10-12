// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
    {
        id: '410544b2-4001-4271-9855-fec4b6a6442a',
        name: 'User',
        email: 'user@nextmail.com',
        password: '123456',
    },
];

const customers = [
    {
        id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
        name: 'Evil Rabbit',
        email: 'evil@rabbit.com',
        image_url: '/customers/evil-rabbit.png',
    }
];

const invoices = [
    {
        customer_id: customers[0].id,
        amount: 15795,
        status: 'pending',
        date: '2022-12-06',
    }
];

const revenue = [
    { month: 'Jan', revenue: 2000 }
];

export { users, customers, invoices, revenue };

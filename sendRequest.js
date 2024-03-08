import axios from 'axios';

const data = {
    amount: 1,  // Specify the amount
    phone: '254792568658',  // Specify the phone number
    Order_ID: '123456789'  // Specify the order ID
};

axios.post('http://localhost:3000/api/stkPush', data)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });

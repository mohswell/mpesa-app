# 📱 Lipa na Mpesa Integration with Node.js

This Node.js application integrates **Lipa na Mpesa** STK Push functionality, allowing users to make payments seamlessly using Safaricom's Mpesa API. It provides secure access to Safaricom's sandbox environment for testing, and handles requests, callbacks, and payment confirmation.

## 🚀 Features

- 🛡️ **STK Push Integration**: Securely initiate STK push requests to Mpesa.
- 🔄 **Payment Confirmation**: Confirm the status of the Mpesa payment.
- 📞 **Callback Handling**: Efficiently process Mpesa callbacks.
- 🔑 **Access Token Generation**: Securely generate and use access tokens for Safaricom API.
- 🌐 **Ngrok Integration**: Use Ngrok for creating secure tunnels for testing callbacks.

## 🛠️ Technologies Used

- ![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen?style=for-the-badge&logo=node.js) 
- ![Express.js](https://img.shields.io/badge/Express.js-4.x-lightgrey?style=for-the-badge&logo=express)
- ![Request](https://img.shields.io/badge/Request-v2.88.2-ff69b4?style=for-the-badge)
- ![Ngrok](https://img.shields.io/badge/Ngrok-3.x-blueviolet?style=for-the-badge)
- ![Dotenv](https://img.shields.io/badge/Dotenv-v16.0.3-yellowgreen?style=for-the-badge)
- ![Mpesa API](https://img.shields.io/badge/Mpesa%20API-Safaricom-red?style=for-the-badge&logo=safaricom)

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/mohswell/mpesa-app.git
cd mpesa-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory of your project and fill in the following details:

```env
PORT=3000
BUSINESS_SHORT_CODE=123456
PASS_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
SAFARICOM_CONSUMER_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
SAFARICOM_CONSUMER_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 4. Start the application

```bash
npm start
```

---

## 📜 Endpoints

| HTTP Method | Endpoint                            | Description                                      |
|-------------|-------------------------------------|--------------------------------------------------|
| `POST`      | `/api/stkPush`                      | Initiates an STK push to a given phone number    |
| `POST`      | `/api/stkPushCallback/:Order_ID`    | Handles callback data from Safaricom             |
| `POST`      | `/api/confirmPayment/:CheckoutRequestID` | Confirms the status of a payment                 |

---

## 🔧 Project Structure

```
.
├── controllers
│   └── controllers.lipanampesa.js  # Contains Lipa Na Mpesa logic
├── middlewares
│   └── middlewares.generateAccessToken.js  # Handles access token generation
├── routes
│   └── routes.lipanampesa.js  # Defines API routes for Mpesa
├── utils
│   └── utils.timestamp.js  # Utility function for generating timestamps
├── .env  # Example environment configuration
├── server.js  # Main application file
└── README.md  # Project documentation
```

---

## 📝 How It Works

### Initiate STK Push
The user triggers an STK push request via the `/stkPush` endpoint. The application sends the necessary details to Safaricom's API, initiating the push request on the user's phone.

### Handle Callback
Safaricom sends a callback once the transaction is completed. The callback is processed via the `/stkPushCallback/:Order_ID` route, updating the transaction status.

### Confirm Payment
You can confirm the payment status by querying Safaricom’s API through the `/confirmPayment/:CheckoutRequestID` route.

---

## 🎯 Future Improvements

- 💼 **Production Environment Setup**
- 📲 **User Interface for Payment Initiation**
- 🖥️ **Admin Dashboard for Viewing Transactions**
- 🛡️ **Webhook Security**

---

## 🏷️ License

This project is licensed under the MIT License.

---

## 👥 Contributors

- [Muhammad Said](https://github.com/mohswell)

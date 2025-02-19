# NailIt - Service & Product Management App

NailIt is a mobile application designed for managing various services, products, daily activities, messaging, and personal space. It aims to provide an intuitive and efficient way for business owners and clients to interact, book services, and manage their business seamlessly.

## 📌 Features
- **Service Management**: List available services with pricing.
- **Product Store**: Sell and manage all kinds of products.
- **Daily Activities**: Track and manage appointments and tasks.
- **Messaging**: Communicate with clients and staff within the app, discuss the price and being updated in the basket directly
- **Personal Space**: Users can manage their profiles and preferences.

## 🛠️ Technologies Used
- **Frontend**: React Native
- **State Management**: ... / SWR (for data fetching)
- **Backend**: NestJs with Express.js (REST API)
- **Database**: PostgreSQL (via TypeORM) && MongoDB (via mongoose)
- **Authentication**: JWT-based authentication
- **Hosting**: Yet to be determined

## 📂 Project Structure
```
NailIt/
│── client/       # React Native app (frontend)
│── server/       # Backend (NestJs + GraphQl)
│── docs/         # Documentation files
│── README.md     # Project documentation
```

## 🚀 Getting Started
### Prerequisites
Ensure you have the following installed:
- Node.js & npm
- NestJs 
- React Native CLI && EXPO CLI
- PostgreSQL database

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/NailIt.git
   cd NailIt
   ```
2. Install dependencies for both frontend and backend:
   ```sh
   cd client && npm install
   cd ../server && npm install
   ```
3. Configure environment variables:
   - Create a `.env` file in the `server/` directory with database and JWT secrets.
   
4. Run the backend:
   ```sh
   cd server
   npm run dev
   ```
5. Run the frontend:
   ```sh
   cd client
   npm run android  # or npm run ios (not optimised for ios)
   ```

## 🛠 Contribution
Contributions are welcome! To contribute:
1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

## 📜 License
This project is licensed under the MIT License.

## 📞 Contact
For inquiries, reach out via email: `juniorbisim@gmail.com`


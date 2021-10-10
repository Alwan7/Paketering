# Paketering
OnlineShop
ladda ner koden.

I Frontend mappen, skapa en .env fil med texten:
REACT_APP_API_URL=http://localhost:8000/api
PORT= 3000
BROWSER=none
SKIP_PREFLIGHT_CHECK=true

I backend mappen, skapa en .env fil med texten:
DATABASE = 'mongodb+srv://Username:Username@cluster0.euayj.mongodb.net/Cluster0?retryWrites=true&w=majority'
PORT = 8000
JWT_SECRET = asd123
BRAINTREE_MERCHANT_ID=dwj5gfdcp59skhtr
BRAINTREE_PUBLIC_KEY=d42n7v3xp5rr8fcg
BRAINTREE_PRIVATE_KEY=f667c134787de059a42b5b6d69f7a09d


öppna 2 terminaler.
Ena terminalen skriv: cd backend. Sedan: npm install. sedan: npm start
Andra terminalen skriv: cd frontend. Sedan npm install. Sedan: npm run dev

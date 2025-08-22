# Assignment_Educase

A basic React assignment project that demonstrates a simple **login flow** using temporary local storage.  
(
    Here ,i have tried to make it somewhat pixel perfect and for a basic login i have used local storage to store data for signup and login , the userdata gets cleared when the profile page is refreshed or closed
) 

---

## 🚀 Features

- **Landing Page** – Introduction to the app  
- **Login Page** – User enters email & password  
- **Signup Page** – Register with basic details  
- **Profile Page** – Accessible only after login  
- **Temporary Local Storage** – Used to store user data on the client side  
- **Auto Logout** – User is logged out automatically when the page is refreshed or closed  

---

## 🛠️ Login Mechanism

1. **Signup**  
   - When a user signs up, the details (e.g., email, password, name) are stored in `localStorage`.  
   - Example structure:  
     ```json
     {
       "email": "test@example.com",
       "password": "123456",
       "name": "Test User"
     }
     ```

2. **Login**  
   - On login, the app checks `localStorage` for stored credentials.  
   - If the email/password match, the user object is saved in `localStorage` under `"user"` key.  
   - The user is then redirected to the **Profile page**.

3. **Profile Access**  
   - The Profile page fetches the `user` data from `localStorage`.  
   - If no user is found, it redirects back to **Login**.  
   - This prevents unauthorized access.

4. **Temporary Session (Auto Logout)**  
   - The login session is temporary.  
   - If the user refreshes or closes the tab, `localStorage` clears automatically (simulating logout).  
   - On the next visit, the user has to log in again.

---

## 📦 Tech Stack

- **React.js** – Component-based UI  
- **React Router** – Navigation between pages  
- **CSS Modules** – Scoped styling  
- **LocalStorage API** – Temporary client-side storage  

---

## ⚡ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/Noobie0805/Assignment_Educase.git

# Navigate into the project
cd Assignment_Educase

# Install dependencies
npm install

# Start development server
npm start

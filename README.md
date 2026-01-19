## 📓 E-Notebook

E-Notebook is a secure, cloud-based note management web application built using the MERN Stack. It allows users to create, edit, delete, and manage personal notes from anywhere with complete data security.


## 🚀 Features

### 🔐 User Authentication

- Secure login & signup using JWT (JSON Web Token)

### 📝 Note Management

- Create, edit, delete notes
- Notes stored securely in MongoDB

### ☁️ Cloud Storage

- Access notes from any device

### 📱 Responsive UI

- Works smoothly on desktop, tablet, and mobile

### ⚡ Fast & Scalable

- RESTful APIs using Express & Node.js

### 🧠 Modern React Concepts

- Context API
- Hooks (useState, useEffect, useContext, useRef)
- Lazy loading & code splitting (where applicable)



## 🛠️ Tech Stack

- Frontend

- React.js

- React Router

- Context API

- Bootstrap / Custom CSS

- Font Awesome Icons

- Backend

- Node.js

- Express.js

- MongoDB

- Mongoose

- JWT Authentication

- bcrypt.js



## ⚙️ Installation & Setup


### 1️⃣ Clone the repository
    git clone https://github.com/your-github-username/E-Notebook.git

### 2️⃣ Install Backend Dependencies
    cd E-Notebook/Backend
    npm install

### 3️⃣ Install Frontend Dependencies
    cd ../
    npm install



## 🔐 Environment Variables

Create a .env file inside the Backend folder:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

## ▶️ Running the Project

### Run Backend

    cd Backend
    npm run dev

### Run Frontend

    npm run dev

### Run Both (Optional)

    npm run both

 
## 🌐 API Endpoints (Sample)
```
Method	            Endpoint	                    Description
POST	            /api/auth/createuser	        Register user
POST	            /api/auth/login	                Login user
GET	                /api/notes/fetchallnotes	    Get user notes
POST	            /api/notes/addnote	            Add new note
PUT	                /api/notes/updatenote/:id	    Update note
DELETE	            /api/notes/deletenote/:id	    Delete note

```

## 🧑‍💻 Developer Information

Name: Aditya Patel

Email: apatel89329@gmail.com

GitHub: https://github.com/lifelinecoding

## 🧩 Future Enhancements

- 🌙 Dark Mode

- 🔍 Search & Filter Notes

- 📁 Note Categories & Tags

- 🔔 Reminders & Notifications

- 📊 Admin Dashboard

- ☁️ File Upload Support

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the repository and submit a pull request.

## 📜 License

This project is licensed under the MIT License.

## ⭐ Support

If you like this project, please consider giving it a ⭐ on GitHub!
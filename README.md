# eSports Arena - Tournament Management API

🚀 **eSports Arena** is a tournament management platform designed for eSports competitions. It allows players to register, participate in tournaments, track results, and manage scores.

## 📌 Features
- **Player Management**: Register, update, and delete player profiles.
- **Tournament Management**: Create and manage tournaments with start and end dates.
- **Match Results**: Record and retrieve match results, including winners and scores.
- **Secure Authentication**: User authentication with role-based access control.

## 🛠️ Tech Stack
- **Backend**: NestJS (TypeScript)
- **Database**: PostgreSQL (TypeORM)
- **Authentication**: JWT & bcrypt
- **API Documentation**: Swagger
- **Containerization**: Docker & Docker Compose
- **Version Control**: Git & GitHub

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Docker & Docker Compose](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/) (if running locally)

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/esports-arena.git
cd esports-arena

# Install dependencies
npm install
```

### Installed Dependencies
```bash
$ npm i --save @nestjs/config
$ npm install --save @nestjs/typeorm pg
$ npm i --save class-validator class-transformer
$ npm install --save @nestjs/swagger
$ npm install --save @nestjs/jwt
$ npm i bcrypt
$ npm i -D @types/bcrypt
```

### Environment Variables
Create a `.env` file in the root directory and configure it as follows:
```env
POSTGRES_HOST="localhost"
POSTGRES_PORT=5432
POSTGRES_USER=your_user
POSTGRES_PASSWORD=your_password
POSTGRES_DB=your_database
JWT_SECRET=your_jwt_secret
PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/database
```

### Running the Application
#### Using Docker (Recommended)
```bash
docker-compose up -d
```
#### Running Locally
```bash
# Start the server
npm run start:dev
```

### API Documentation
Once the server is running, access **Swagger UI** at:
```
http://localhost:3000/api
```

## 🛠️ Development & Contribution
Feel free to fork the repository and submit pull requests. Any contributions are welcome! 🎮

---

💡 **Author:** [Luis Eugenio Rubio Romero](https://github.com/luisruro)  
💎 **Contact:** lerubioromero@gmail.com


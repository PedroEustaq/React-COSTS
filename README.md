# Tutorial: How to Configure and Run the Project

## Prerequisites
- Node.js installed (LTS version recommended)
- npm (Node Package Manager) or yarn
- Git installed

## Step by Step

### 1. Clone the Repository
In the terminal, run the following command to clone the repository:

```bash
git clone [REPOSITORY_URL]
cd [PROJECT_FOLDER_NAME]
```
## 2. Install Dependencies
Install project dependencies with npm or yarn:
```
npm install
# or
yarn install
```
## 3. Configure the Environment
The project uses a backend server simulated with json-server (REST API) and a frontend in React + Vite.

## 4. Start Backend & Frontend
In a terminal, run the command to launch the backend and frontend:
```
npx concurrently "npm run dev" "npm run backend"
```
## 6. Access the Application
After starting the frontend, the application will be available at:

Frontend: http://localhost:5173 (or the port indicated in the terminal)
Backend (API): http://localhost:5234

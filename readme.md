# Member Club System

This project is a full-stack membership management application featuring a **Jakarta EE/Java** backend and an **Angular** frontend. It is designed to handle member registration, profile management, and list views.

---

## Backend Setup (Java & Jetty)

The backend provides a RESTful API to manage club members, typically accessible at `http://localhost:8080/club-api/api/members`.

### Prerequisites
* **Java JDK** (e.g., JDK 21 or 25).
* **Apache Maven**.

### Build and Run
1. Navigate to the backend directory:
   ```bash
   cd member-club/backend
   
2 Generate Eclipse project files (Optional):
	```bash
	mvn eclipse:eclipse
	
3. Build the project:
	```bash
	mvn clean install
	
4. Start the Jetty server:
	```bash
	mvn clean install
	
# Frontend Setup (Angular)

The frontend is a standalone Angular application styled with **Bootstrap**.

### Prerequisites
1. **Install Node.js:** Download the latest version from [nodejs.org](https://nodejs.org/en/download).
2. **Verify Installation:**
   ```bash
   node -v
   npm -v
3. Install Angular CLI Globally:
	```bash
	npm install -g @angular/cli
4. Verify Angular CLI:
	```bash
	ng version
	
### Project Initialization
1. **Create the workspace:**
   ```bash
   ng new frontend --routing --style css --ssr false
   
2. Install Dependencies:
   ```bash
	npm install
   
3. Install Bootstrap & Icons:
   ```bash
	npm install bootstrap bootstrap-icons
	
### Running the Frontend
Start the development server on port **4201** to avoid conflicts with the backend:
	```bash
	ng serve --port 4201

Access the application at http://localhost:4201.
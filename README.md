## Usage

> Make sure you have installed Node and MongoDB on your machine

Create a `.env` file in the root folder.

Add your Mongo URI, Port, and JWT key into the `.env` file as shown in the `.env.example` file.

### 1. Install Dependencies

Run the following command to install all the required dependencies:

This will start your application in development mode, and it should be accessible on the specified port.

### 3. Run Tests

To run tests, use the following command:

This will run Jest tests in watch mode, automatically re-running tests as you make changes to your code.

### 4. Swagger Documentation

You can view the Swagger API documentation by navigating to the following URL in your browser:

This will open the Swagger UI, where you can see all the available API endpoints and their details.

---

### Swagger Configuration

Swagger documentation is set up using `swagger-jsdoc` and `swagger-ui-express`. API routes are automatically documented based on special comments added above route definitions. You can view and interact with the API via Swagger UI at `/api-docs`.

To configure Swagger, the following file was created:

- **swagger.ts**: Handles Swagger setup.

Swagger comments are added to route files like `signInRouter.ts` to auto-generate documentation.

Example Swagger comment in `signInRouter.ts`:

```ts
/**
 * @swagger
 * /api/signin:
 *   post:
 *     summary: Sign in user and generate JWT token
 *     description: Sign in a user with email and password to get a JWT token
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User signed in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: string
 *                 email:
 *                   type: string
 *                 token:
 *                   type: string
 *       400:
 *         description: Invalid credentials
 */
```

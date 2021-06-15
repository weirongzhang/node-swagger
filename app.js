
const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const app = express();
const swaggerOptions = {
	swaggerDefinition: {
	info: {
		title: 'Library API Deploy with AWS Code Pipeline',
		version: '1.0.0'
	}
	},
	apis: ['app.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
//console.log(swaggerDocs);

app.use('/api-docs',swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/**
 * @swagger
 * /books:
 *   get:
 *    description: Get all books
 *    responses:
 *     200:
 *      description: Success
 *
 */

app.get('/books', (req, res) => {
	res.send([
		{
			id:1,
			title: 'title'
	        }
	]);
 
});

/**
 * @swagger
 * /books:
 *   post:
 *    description: Create a new book
 *    parameters:
 *      - name: title
 *        description: title of the book
 *        in: formData
 *        required: true
 *        type: string
 *    responses:
 *      201:
 *
 */
 
app.post('/boots', (req,res) => {
	res.status(201).send();
})

const port = process.env.port || 3000;
app.listen(port, () => console.log("Listening on port 3000"));
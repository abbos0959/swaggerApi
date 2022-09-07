/**
 *
 
 *  @swagger
 * /book:
 *   get:
 *     summary: all books.
 *     description: bu kitob api
 *     responses:
 *       200:
 *         description: kitoblar
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 book:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: kitob idsi
 *                         example: 3230232032
 *                       name:
 *                         type: string
 *                         description: kitob name
 *                         example: abdulla qodiriy
 *                       price:
 *                         type: string
 *                         description: kitob narxi
 *                         example: 1000
 * 
 * 
 * 
 * 
 * 
 * 
 */                    

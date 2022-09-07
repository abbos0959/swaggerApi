/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - name
 *         - author
 *         - price
 *       properties:
 *         name:
 *           type: string
 *           description: kitob nomi
 *         author:
 *           type: string
 *           description: kitob authori
 *         price:
 *           type: string
 *           description: kitob narxi
 *       example:
 *         name: ivan vasilevich
 *         author: hamid olimjon
 *         price: 200
 */

/**
 * @swagger
 * tags:
 *   name: Books
 *   description:  book api
 */

/**
 * @swagger
 * /book:
 *   get:
 *     summary: hamma kitob
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: kitoblar ro`yhati
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */

/**
 * @swagger
 * /book/{id}:
 *   get:
 *     summary: id orqali kitob
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id orqali kitobni topish
 *     responses:
 *       200:
 *         description: shu idli kitob
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: bunday kitob yo`q
 */

/**
 * @swagger
 * /book:
 *   post:
 *     summary: kitob yaratish
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: kitob chotki yaratildi
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       500:
 *         description: kitob yaratilmadi
 */

/**
 * @swagger
 * /book/{id}:
 *  patch:
 *    summary: id orqali update
 *    tags: [Books]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: kitob id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Book'
 *    responses:
 *      200:
 *        description: bu kitob update bo`ldi
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Book'
 *      404:
 *        description: bunday kitob yo`q
 *      500:
 *        description: error server
 */

/**
 * @swagger
 * /book/{id}:
 *   delete:
 *     summary:  id orqali delete
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description:   kitob id
 *
 *     responses:
 *       200:
 *         description: kitob delete
 *       404:
 *         description:  bunday kitob yo`q
 */

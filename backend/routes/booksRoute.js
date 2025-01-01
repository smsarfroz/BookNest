import express from 'express';
import { Book } from '../models/bookModel.js';

import mongoose from 'mongoose';

const router = express.Router();

//here /books becomes redundant as /books is already defined in index.js that it will be handled by booksRoute
// Route for saving a new book
router.post('/', async( request, response) => {
    try {
        if(
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        };

        const book = await Book.create(newBook);

        return response.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ messag: error.message });
    }
});

// Route for Get All Books from database 
router.get('/', async (request, response) => {
  try {
    const books = await Book.find({});

    return response.status(200).json({
      count: books.length,
      data: books,
    });

  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message});
  }
});

//Route for Get One Book from database by id
router.get('/:id', async (request, response) => {
  try {

    const { id } = request.params;

    //ensure it's a valid objectid
    if(!mongoose.Types.ObjectId.isValid(id)){
      return response.status(200).json({message: 'Invalid book ID format'});
    }

    const idx = new mongoose.Types.ObjectId(id);
    const book = await Book.findById(idx);

    console.log(book);
    return response.status(200).json(book);

  } catch (error) {
    console.log('hello 1');
    const { id } = request.params;
    console.log(id);
    console.log(error.message);
    console.log('hello 2');
    response.status(500).send({ message: error.message});
  }
});

//Route for update a book
router.put('/:id',async(request, response) =>{
  try {
    if(
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: 'Send all required fields: title, author, publishYear',
      });
    }

    const { id } = request.params;

    const result = await Book.findByIdAndUpdate(id, request.body);

    if(!result) {
      return response.status(404).json( { message: 'Book not found'});
    }

    return response.status(200).send({ message: 'Book updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message});
  }
});

//Route for Delete a book
router.delete('/:id', async(request,response) =>{
  try{

    const { id } = request.params;

    const result = await Book.findByIdAndDelete(id);

    if(!result) {
      return response.status(404).json({ message: 'Book not found'});
    }

    return response.status(200).send({ message: 'Book deleted successfully'});
  } catch (error) {
    console.log(error.message);
    response.status(500).send({message: error.message });
  }
});

export default router;
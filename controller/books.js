import Book from "../schema/book.js"

// create
export const Create = async (req, res) => {
    try {
        const newbook = new Book(req.body);
        await newbook.save();
        res.status(201).json({ msg: 'saved!' });
    }
    catch (error) {
        res.status(500).json({ msg: `Error: ${error}` });
    }
}
// getall
export const getAll = async (req, res) => {
    let category = req.query.genre;
    let books
    try {
        if (category) {
            books = await Book.find({ genre: category });
        }
        else {
            books = await Book.find({});
        }
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ msg: `Error: ${error}` });
    }
}
// get by id
export const Get = async (req, res) => {
    try {
        let book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json('Not found!');
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ msg: `Error: ${error}` });
    }
}
// update
export const Update = async (req, res) => {
    try {
        let book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ msg: 'Not found!' });
        await Book.findByIdAndUpdate(req.params.id, { $set: req.body })
        res.status(200).json({ msg: 'Updated!' });
    }
    catch (error) {
        res.status(500).json({ msg: `Error: ${error}` });
    }
}
// delete
export const Delete = async (req,res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.status(200).json({msg:'Deleted!'});
    }
    catch (error) {
        res.status(500).json({msg:`Error:${error}`});
    }
}
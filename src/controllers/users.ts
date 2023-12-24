import { Request, Response } from "express";
import { createUser, findAndUpdate, deleteUser, findUserByID, findUser } from "../service/user.service";

const addProduct = async (req: Request, res: Response) => {
    try {
        const myData = await createUser({ name: req.body.name, price: req.body.price })
        res.status(201).json({
            message: "Data added successfully",
            myData: myData
        })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const productsDetail = async (req: Request, res: Response) => {
    try {
        const myData = await findUser();
        res.status(200).json({
            message: "Details found",
            myData: myData
        })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const productDetailById = async (req: Request, res: Response) => {
    try {
        const myData = await findUserByID({ _id: req.params.id })
        res.status(200).json({
            message: "Detail found",
            myData: myData
        })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const updateProduct = async (req: Request, res: Response) => {
    try {
        const myData = await findAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true })
        res.status(200).json({
            message: "Detail Updated successfully",
            myData: myData
        })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const deleteProduct = async (req: Request, res: Response) => {
    try {
        await deleteUser({ _id: req.params.id })
        res.status(200).json({
            message: "Detail deleted Successfully."
        })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export {
    addProduct,
    productsDetail,
    productDetailById,
    updateProduct,
    deleteProduct
}
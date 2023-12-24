import { DocumentDefinition, FilterQuery, UpdateQuery, QueryOptions } from "mongoose";
import user, { ProductDocument } from '../models/users';

export function createUser(input: DocumentDefinition<ProductDocument>) {
    return user.create(input);
}

export function findUser(options: QueryOptions = { lean: true }) {
    return user.find({}, {}, options);
}

export function findUserByID(query: FilterQuery<ProductDocument>, options: QueryOptions = { lean: true }) {
    return user.find(query, {}, options);
}

export function findAndUpdate(
    query: FilterQuery<ProductDocument>,
    update: UpdateQuery<ProductDocument>,
    options: QueryOptions
) {
    return user.findOneAndUpdate(query, update, options);
}

export function deleteUser(
    query: FilterQuery<ProductDocument>
) {
    return user.deleteOne(query);
}

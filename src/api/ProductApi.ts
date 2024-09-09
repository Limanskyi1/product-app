import axios from "axios";
import { IComment, IProduct } from "../types";

class ProductApi {
    private apiUrl: string;

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    async getAllProducts():Promise<IProduct[]>{
        try {
            const response = await axios.get(this.apiUrl);
            return response.data;
        } catch (error) {
            console.error("Failed to get all product", error);
            return [];
        }
    }

    async getProductsByParams(pathname:string):Promise<IProduct[]> {
        try {
            const response = await axios.get(`${this.apiUrl}${pathname}`);
            return response.data;
        } catch (error) {
            console.error("Failed to get product suggestions:", error);
            return [];
        }
    }

    async getProduct(id:string):Promise<IProduct | null>{
        try {
            const response = await axios.get(`${this.apiUrl}${id}`);
            const product = response.data;
            return product;
        } catch (error) {
            console.error("Failed to get product suggestions:", error);
            return null;
        }
    }

    async createNewProduct(product: IProduct): Promise<IProduct | null> {
        try {
            const response = await axios.post(this.apiUrl, product);
            return response.data;
        } catch (error) {
            console.error("Failed to create new product:", error);
            return null;
        }
    }

    async sendComment(comments:IComment[],id:string){
        try {   
            await axios.put(this.apiUrl + id, {comments});
        } catch (error) {
            console.error("Failed to send a comment.", error);
        }
    }

    async updateProduct(id:string,fields:{}){
        try {
            await axios.put(this.apiUrl + id, fields);
        } catch (error) {
            console.error("Failed to update a product", error);
        }
    }

    async deleteProduct(id:string){
        try {
            await axios.delete(this.apiUrl + id);
        } catch (error) {
            console.error("Failed to delete a product", error);
        }
    }

    async upvoteProduct(id:string | number,upvotes:number){
        try {
            await axios.put(this.apiUrl + id, {
                upvotes: upvotes,
            });
        } catch (error) {
            console.error("Failed to upvote a product", error);
        }
    }

}

export const productApi = new ProductApi('https://66d39aa9184dce1713d08d80.mockapi.io/products/');

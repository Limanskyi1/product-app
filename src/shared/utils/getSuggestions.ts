import { IProduct } from "@/entities/product/model/types";

export const getSuggestions = (products:IProduct[]):IProduct[] => {
    return products.filter(product => product.status === "suggestion");
}

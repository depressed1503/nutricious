import Axios from "./axiosConfig";
import { CustomUser, Meal, MealPost, MealTemplate } from "./types";

export async function getCurrentUser() {
    return await Axios.get<CustomUser>("api/current_user/")
}

export async function getMeals() {
    return (await Axios.get<Meal[]>("api/meal/")).data
}

export async function getMealTemplates() {
    return (await Axios.get<MealTemplate[]>("api/meal/templates/")).data
}

export async function postMeal(meal:MealPost) {
    return await Axios.post("api/meal/", meal)
}

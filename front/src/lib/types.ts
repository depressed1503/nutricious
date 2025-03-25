export type CustomUser = {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    login: string,
    user_permissions: string[],
    groups: string[], 
}

export type Meal = {
    user: CustomUser,
    name: string,
    mass: number,
    calories_per_100_gramm: number,
    proteins: number,
    fats: number,
    carbs: number,
}

export type MealPost = {
    name: string,
    mass: number,
    calories_per_100_gramm: number,
    proteins: number,
    fats: number,
    carbs: number,
}

export type MealTemplate = {
    user: CustomUser,
    name: string,
    calories_per_100_gramm: number,
    proteins: number,
    fats: number,
    carbs: number,
}

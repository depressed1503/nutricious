export type CustomUser = {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    login: string,
    user_permissions: string[],
    groups: string[], 
    max_proteins_per_day: number,
    max_fats_per_day: number,
    max_carbs_per_day: number,
    max_calories_per_day: number,
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

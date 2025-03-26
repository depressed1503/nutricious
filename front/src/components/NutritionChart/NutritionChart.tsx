import "./NutritionChart.css"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import NutritionChartValue from "./NutritionChartValue"
import { Meal, MealTemplate } from "@/lib/types"
import { getMeals, getMealTemplates, postMeal } from "@/lib/queryFunctions"
import { useMemo, useState } from "react"
import { useAuth } from "@/context/AuthContext"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

export default function NutritionChart() {
    const { user } = useAuth()
    const queryClient = useQueryClient()
    const { data: meals } = useQuery<Meal[]>({
        queryKey: ["meals"],
        queryFn: getMeals
    })

    const { data: mealTemplates } = useQuery<MealTemplate[]>({
        queryKey: ["meal_templates"],
        queryFn: getMealTemplates
    })

    const addMealMutation = useMutation({
        mutationFn: postMeal,
        onSuccess: () => queryClient.invalidateQueries({queryKey: ["meals"]})   
    })

    const calories = useMemo(() => {
        return meals?.reduce((n, { mass, calories_per_100_gramm }) => {
            return n + mass / 100 * calories_per_100_gramm
        }, 0) || 0
    }, [meals])
    const proteins = useMemo(() => {
        return meals?.reduce((n, { proteins }) => n + proteins, 0) || 0
    }, [meals])
    const fats = useMemo(() => {
        return meals?.reduce((n, { fats }) => n + fats, 0) || 0
    }, [meals])
    const carbs = useMemo(() => {
        return meals?.reduce((n, { carbs }) => n + carbs, 0) || 0
    }, [meals])

    const [mealName, setMealName] = useState<string>()
    const [mealProteins, setMealProteins] = useState<number>()
    const [mealFats, setMealFats] = useState<number>()
    const [mealCarbs, setMealCarbs] = useState<number>()
    const [mealCalories, setMealCalories] = useState<number>()
    const [mealGramms, setMealGramms] = useState<number>()
    return (
        <div className="chart">
            <div className="chart__filters">
                <Button variant={"outline"}>Сегодня</Button>
                <Button variant={"outline"}>Неделя</Button>
                <Button variant={"outline"}>Кастом</Button>
            </div>
            <div className="chart__data">
                <NutritionChartValue type={"calories"} value={calories} maxValue={user?.max_calories_per_day || 1}></NutritionChartValue>
                <NutritionChartValue type={"proteins"} value={proteins} maxValue={user?.max_proteins_per_day || 1}></NutritionChartValue>
                <NutritionChartValue type={"fats"} value={fats} maxValue={user?.max_fats_per_day || 1}></NutritionChartValue>
                <NutritionChartValue type={"carbs"} value={carbs} maxValue={user?.max_carbs_per_day || 1}></NutritionChartValue>
            </div>
            <div className="chart__popup">
                <Input value={mealName} onChange={(e) => setMealName(e.target.value)} type="text" placeholder="Название" />
                <Input value={mealProteins} onChange={(e) => setMealProteins(Number(e.target.value))} type="number" placeholder="Белки на 100 грамм"/>
                <Input value={mealFats} onChange={(e) => setMealFats(Number(e.target.value))} type="number" placeholder="Жиры на 100 грамм" />
                <Input value={mealCarbs} onChange={(e) => setMealCarbs(Number(e.target.value))} type="number" placeholder="Углеводы на 100 грамм" />
                <Input value={mealCalories} onChange={(e) => setMealCalories(Number(e.target.value))} type="number" placeholder="ККал на 100 грамм"/>
                <Input value={mealGramms} onChange={(e) => setMealGramms(Number(e.target.value))} type="number" placeholder="Грамм"/>
                <Button onClick={() => addMealMutation.mutate({
                    name: mealName || "",
                    proteins: mealProteins || 0,
                    fats: mealFats || 0,
                    carbs: mealCarbs || 0,
                    calories_per_100_gramm: mealCalories || 0,
                    mass: mealGramms || 0
                })}>+</Button>
            </div>
        </div>
    )
}

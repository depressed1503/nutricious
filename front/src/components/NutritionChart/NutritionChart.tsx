import "./NutritionChart.css"
import NutritionChartValue from "./NutritionChartValue"

export default function NutritionChart() {
    return (
        <div className="chart">
            <div className="chart__filters">
                <button>Сегодня</button>
                <button>Неделя</button>
                <button>Кастом</button>
            </div>
            <div className="chart__data">
                <NutritionChartValue type={"proteins"} value={0} maxValue={100}></NutritionChartValue>
                <NutritionChartValue type={"fats"} value={20} maxValue={100}></NutritionChartValue>
                <NutritionChartValue type={"carbs"} value={10} maxValue={200}></NutritionChartValue>
            </div>
            <button>+</button>
            <div className="chart__popup">
                <input type="text" placeholder="Название" />
                <input type="number" placeholder="Белки на 100 грамм"/>
                <input type="number" placeholder="Жиры на 100 грамм" />
                <input type="number" placeholder="Углеводы на 100 грамм" />
                <input type="number" placeholder="ККал на 100 грамм"/>
                <input type="number" placeholder="Грамм"/>

                <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="3">3</option>
                </select>
            </div>
        </div>
    )
}

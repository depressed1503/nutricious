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
        </div>
    )
}

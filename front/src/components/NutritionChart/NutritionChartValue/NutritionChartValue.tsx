import "./NutritionChartValue.css"

type NutritionChartValueProps = {
    type: "proteins" | "fats" | "carbs"
    value: number
    maxValue: number,
}

export default function NutritionChartValue(props: NutritionChartValueProps) {
    return (
        <div className={`chart__value ${props.type}`}>
            <span>
                {props.type === "proteins" ? "Б" :
                props.type === "fats" ? "Ж" : "У"}
            </span>
            <div className="chart__value__bar">
                <div
                    style={{
                        width: `${props.value / props.maxValue * 100}%`,
                    }}
                />
            </div>
            <span>{props.value}/{props.maxValue}</span>
        </div>
    )
}

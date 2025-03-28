import "./NutritionChartValue.css"

type NutritionChartValueProps = {
    type: "calories" | "proteins" | "fats" | "carbs"
    value: number
    maxValue: number,
}

export default function NutritionChartValue(props: NutritionChartValueProps) {
    return (
        <div className={`chart__value`}>
            <span>
                {props.type === "calories" ? "К" :props.type === "proteins" ? "Б" :
                props.type === "fats" ? "Ж" : "У"}
            </span>
            <div className={`chart__value__bar`}>
                <div className={`chart__value__bar__line ${props.type} ${props.value >= props.maxValue ? "extra" : ""}`}
                    style={{
                        width: `${props.value / props.maxValue * 100}%`,
                    }}
                />
            </div>
            <span className="chart__value__value">{props.value}/{props.maxValue}</span>
        </div>
    )
}

import "./NutritionChartValue.css"

type NutritionChartValueProps = {
    type: "proteins" | "fats" | "carbs"
    value: number
    maxValue: number,
}

export default function NutritionChartValue(props: NutritionChartValueProps) {
    return (
        <div className={`chart__value`}>
            <span>
                {props.type === "proteins" ? "Б" :
                props.type === "fats" ? "Ж" : "У"}
            </span>
            <div className={`chart__value__bar__circle ${props.type}`}></div>
            <div className={`chart__value__bar ${props.type} ${props.value >= props.maxValue ? "extra" : ""}`}>
                <div className="chart__value__bar__line"
                    style={{
                        width: `${props.value / props.maxValue * 100}%`,
                    }}
                />
            </div>
            <span>{props.value}/{props.maxValue}</span>
        </div>
    )
}

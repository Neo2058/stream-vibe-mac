import './PlanCard.scss'
import planCard from "@/components/PlanCard/index";
import Button from "@/components/Button";

const PlanCard = (props) => {
    const {
        title,
        description,
        price,
    } = props


    return (
        <div className="plan-card">
            <div className="plan-card__info">
                <h3 className="plan-card__title h4">{title}</h3>
                <div className="plan-card__description">
                    <p>{description}</p>
                </div>
            </div>
            <div className="plan-card__conditions">
                <span className="plan-card__price">{price.value}</span>
                <span className="plan-card__period">{price.label}</span>
            </div>
            <div className="plan-card__actions">
                <Button
                    label="Start Free Trial"
                    href="/subscriptions"
                />
                <Button
                    label="Choose Plan"
                    href="/subscriptions"
                    mode="black-08"
                />
            </div>
        </div>
    )
}

export default PlanCard
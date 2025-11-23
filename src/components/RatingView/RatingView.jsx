import './RatingView.scss'

const RatingView = (props) => {
  const {
    value = 5,
    label,
  } = props

  const ariaLabel = `Rating: ${value} stars`

  return (
    <div
      className="rating-view"
      aria-label={ariaLabel}
      title={ariaLabel}
      style={{
        '--ratingViewValue': value,
      }}
    >
      <div className="rating-view__stars">
        <img
          className="rating-view__stars-unfilled"
          src="/rating/stars_unfilled.svg"
          alt=""
          width={98}
          height={18}
        />

        <img
          className="rating-view__stars-filled"
          src="/rating/stars_filled.svg"
          alt=""
          width={98}
          height={18}
        />
      </div>
      {label && (
        <div className="rating-view__label">{label}</div>
      )}
    </div>
  )
}

export default RatingView
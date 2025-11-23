import './MovieBannerCard.scss'
import {Image} from "minista";
import Button from "@/components/Button/index.js";
import classNames from "classnames";

const MovieBannerCard = (props) => {
  const {
    title,
    titleId,
    TitleTag = 'h2',
    description,
    imgSrc,
    isSmallPaddingY = false,
  } = props

  return (
    <div
      className="movie-banner-card"
    >
      <Image
        className="movie-banner-card__image"
        src={imgSrc}
      />
      <div
        className={classNames("movie-banner-card__inner", {
          'movie-banner-card__inner--small-padding-y': isSmallPaddingY,
        })}
      >
        <div className="movie-banner-card__body">
          <TitleTag
            className="movie-banner-card__title h3"
            id={titleId}
          >
            {title}
          </TitleTag>
          <div className="movie-banner-card__description hidden-mobile">
            <p>{description}</p>
          </div>
        </div>
        <footer className="movie-banner-card__footer">
          <Button
            className="movie-banner-card__play-button"
            iconName="play"
            label="Play Now"
          />
          <div className="movie-banner-card__actions">
            <Button
              iconName="plus"
              label="Add Movie"
              isLabelHidden
              mode="black-06"
            />
            <Button
              iconName="like"
              label="Add Like"
              isLabelHidden
              mode="black-06"
            />
            <Button
              iconName="volume"
              label="Off Volume"
              isLabelHidden
              mode="black-06"
            />
          </div>
        </footer>
      </div>
    </div>
  )
}

export default MovieBannerCard
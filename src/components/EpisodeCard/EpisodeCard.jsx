import './EpisodeCard.scss'
import classNames from 'classnames'

const EpisodeCard = (props) => {
  const {
    className,
  } = props

  return (
    <div
      className={classNames(className, 'episode-card')}
    >
      EpisodeCard
    </div>
  )
}

export default EpisodeCard
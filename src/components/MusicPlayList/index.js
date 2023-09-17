import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const MusicPlayList = props => {
  const {playListDetails, deleteMusicPlayListItem} = props
  const {id, imageUrl, name, genre, duration} = playListDetails

  const onClickDeleteBtn = () => {
    deleteMusicPlayListItem(id)
  }

  return (
    <li className="list-item" key={id}>
      <img src={imageUrl} alt="track" className="image" />
      <div className="content-card">
        <div>
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
        <div className="delete-card">
          <p className="duration">{duration}</p>
          <button
            data-testid="delete"
            type="button"
            className="delete-btn"
            onClick={onClickDeleteBtn}
          >
            <AiOutlineDelete className="delete-icon" />
          </button>
        </div>
      </div>
    </li>
  )
}

export default MusicPlayList

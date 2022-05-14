import s from './Profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({ name, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div class={s.profile}>
      <div class={s.description}>
        <img src={avatar} alt="Аватар пользователя" class={s.avatar} />
        <p class={s.name}>{name}</p>
        <p class={s.tag}>@{tag}</p>
        <p class={s.location}>{location}</p>
      </div>
      <ul class={s.stats}>
        <li>
          <span class={s.label}>Followers</span>
          <span class={s.quantity}>{followers}</span>
        </li>
        <li>
          <span class={s.label}>Views</span>
          <span class={s.quantity}>{views}</span>
        </li>
        <li>
          <span class={s.label}>Likes</span>
          <span class={s.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};


export default Profile;

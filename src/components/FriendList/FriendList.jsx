import s from './FriendList.module.css';
import PropTypes from 'prop-types';

function friendOnline(status) {
  if (status) {
    return '#2ECC71';
  } else {
    return '#E74C3C';
  }
}

const FriendList = ({ friends }) => {
  return (
    <div class={s.friends}>
      <ul class={s.friendlist}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <li class={s.item} key={id}>
            <span
              class={s.status}
              style={{ color: friendOnline(isOnline) }}
            >
              {' '}
              ●
            </span>
            <img
              class={s.avatar}
              src={avatar}
              alt={name}
              width="48"
            />
            <p class={s.name}>{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
FriendList.defaultProps = {
  avatar: 'https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg',
  name: 'User name',
  isOnline: false,
};

export default FriendList;

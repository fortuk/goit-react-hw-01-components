import s from './Statistics.module.css';
import PropTypes from 'prop-types';

const randomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16)

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      <h2 class={s.title}>{title}</h2>
      <ul class={s.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            class={s.item}
            style={{ backgroundColor: randomColor() }}
          >
            <span class={s.label}>{label}</span>
            <span class={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};


export default Statistics;

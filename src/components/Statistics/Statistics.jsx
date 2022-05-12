import s from './Statistics.module.css';
import PropTypes from 'prop-types';

const color = item => {
  const colorArray = ['#E74C3C', '#8E44AD', '#3498DB', '#27AE60', '#F39C12'];
  return `${colorArray[Number(item.id.replace(/[^0-9]/g, '')) % 5]}`;
};

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      <h2 class={s.title}>{title}</h2>
      <ul class={s.statList}>
        {stats.map(({ id, label, percentage,})=> (
          <li
            key={id}
            class={s.item}
            style={{ backgroundColor: color(item) }}
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

Statistics.defaultProps = {
  title: '',
  label: 'format',
};

export default Statistics;

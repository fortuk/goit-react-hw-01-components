import s from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

function upperFirstLetter(string) {
  let newStr = string[0].toUpperCase() + string.slice(1);
  return newStr;
}
const TransactionHistory = ({ items }) => {
  return (
    <div class={s.transTable}>
      <table class="transaction-history">
        <thead class={s.table}>
          <tr>
            <th>TYPE</th>
            <th>AMOUNT</th>
            <th>CURRENCY</th>
          </tr>
        </thead>
        <tbody class={s.tableBody}>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td class={s.tableData}>{upperFirstLetter(type)}</td>
              <td class={s.tableData}>{amount}</td>
              <td class={s.tableData}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  amount: PropTypes.string.isRequired,
      currency: PropTypes.string,
   }),
  ).isRequired,
};
TransactionHistory.defaultProps = {
  type: 'Type',
  currency: 'Currency',
};

export default TransactionHistory;

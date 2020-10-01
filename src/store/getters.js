import { DateTime } from 'luxon';

export const boxesVisible = state => {
  return state.boxesVisible;
}

export const date = state => {
  return state.date.minus({days: 7}).toLocaleString(DateTime.DATE_MED)
}


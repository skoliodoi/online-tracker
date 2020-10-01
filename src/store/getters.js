import { DateTime } from 'luxon';

export const boxesVisible = state => {
  return state.boxesVisible;
}

export const date = state => {
  return state.date.toLocaleString(DateTime.DATE_MED)
}


import { genres } from '../genres';

export function getGenreByLabel(label: string) {
  return genres.find((genre) => genre.label === label);
}

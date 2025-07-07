import PhotoList from '../components/PhotoList';
import { getDictionary } from './dictionaries';

export default async function Home({ params: { lang } }) {
  const dictionary = await getDictionary(lang);

  const response = await fetch(`${process.env.BASE_API_URL}/photos`);
  if (!response.ok) {
    throw new Error('Failed to fetch photos');
  }
  const photos = await response.json();
  return (
    <div>
      <PhotoList photos={photos} />
    </div>
  );
}

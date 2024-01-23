import { redirect } from 'react-router-dom';
import { loggedIn } from '../firebaseConfig';

export async function loader() {
  const islogged = await loggedIn((user) => {
    if (user) {
      return true;
    }
    return false;
  });

  if (!islogged) {
    return redirect('/login');
  }
  return null;
}

import { redirect } from 'react-router-dom';
import { loggedIn } from './firebaseConfig';

export async function loader() {
  let islogged = false;
  await loggedIn((user) => {
    if (user) {
      islogged = true;
    }
  });
  if (!islogged) {
    return redirect('/login');
  }
  return null;
}

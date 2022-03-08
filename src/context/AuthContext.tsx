import { createContext, FunctionComponent, useContext, useEffect, useReducer } from 'react';
import { Action, initialState, reducer } from './reducer';
import { useNavigate, useLocation } from 'react-router';
import { onAuthStateChanged } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';
import { auth, db } from '../utils/firebaseConfig';

const AuthContext = createContext<[IFirebaseUser, React.Dispatch<Action>]>([initialState, () => null]);

const AppWrapper: FunctionComponent = ({ children }): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in
        const id = auth.currentUser?.uid;
        if (id) {
          const docRef = doc(db, 'users', id);
          const query = await getDoc(docRef);
          const data = query.data();

          if (data) {
            const currentUser = {
              name: data.name,
              email: data.email,
              count: data.count,
              milestones: data.milestones,
              photo: data.photo,
              stack: data.stack,
              notificationFrequency: data.notificationFrequency,
              startDate: data.startDate,
            };

            dispatch({
              type: 'CHECK_USER',
              payload: currentUser,
            });
          }
        }
      } else if (pathname === '/join') {
      } else if (pathname === '/roadmap') {
      } else {
        // User is signed out
        navigate('/landing');
      }
    });
  }, [navigate, pathname]);

  return <AuthContext.Provider value={[state, dispatch]}>{children}</AuthContext.Provider>;
};

export default AppWrapper;

export const useAuthContext = () => useContext(AuthContext);

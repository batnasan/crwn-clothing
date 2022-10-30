import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase.utils';

import SingUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SingUpForm />
    </div>
  );
};

export default SignIn;

import { useActionState } from 'react';
import { updateName } from './actions/updateName';

interface UpdateNameProps {
  name: string;
  setName: string;
}

export const UpdateName: React.FC<UpdateNameProps> = ({ name, setName }) => {
  const [error, submitAction, isPending] = useActionState(
    async (previousState: string, formData: FormData) => {
      const error = await updateName(formData.get('name'));
      if (error) {
        return error;
      }
      return null;
    },
    null
  );

  return (
    <form action={submitAction}>
      <input type="text" name="name" />
      <button type="submit" disabled={isPending}>
        Update
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

import MultipleSelector from '../../../components/ui/MultipleSelector';
import useUsersSelect from '../hooks/useUsersSelect';

const SelectUser = () => {
    const {users,isLoading} = useUsersSelect()
    console.log(users)
  return (
    <div className="flex w-full flex-col gap-5 px-10">
      Form
      {!isLoading &&<MultipleSelector
        defaultOptions={users}
        placeholder="Seleccione los Usuarios para agregarlos al proyecto"
        emptyIndicator={
          <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
            no results found.
          </p>
        }
        
      />
    }
    </div>
  );
};

export default SelectUser;
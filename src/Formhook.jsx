
import { useForm } from "react-hook-form";

function Formhook() {
  let {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Adınızı qeyd edin</label>
        <input {...register("name", { required: true })} />
        {errors.name && <span>Ad boş ola bilməz</span>}
        <label htmlFor="">Emailinizi qeyd edin</label>
        <input
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <span>Email ola bilməz</span>}

        <button type="submit">Göndər</button>
      </form>
    </div>
  );
}

export default Formhook;

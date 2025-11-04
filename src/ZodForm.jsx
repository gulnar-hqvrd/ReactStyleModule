import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';

let schema = z.object({
  name: z.string().min(3, { message: "Ad ən az 3 simvol olmalıdır" }), 
  email: z.string().email({ message: "Mail düzgün deyil" }),
  age: z.number().min(18, { message: "yaş min 18 olmalıdır" }),
});
function ZodForm() {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  let onSubmit = (data) => {
    console.log("Form melumati:", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Ad:</label>
          <input {...register("name")} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label>Yaş:</label>
          <input type="number" {...register("age", { valueAsNumber: true })} />
          {errors.age && <p>{errors.age.message}</p>}
        </div>

        <button type="submit">Göndər</button>
      </form>
    </div>
  );
}

export default ZodForm;

import FormSubmitButton from "@/components/FormSubmitButton";
import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";
import { title } from "process";
import React from "react";

export const metadata = {
  title: "Add Product - WizCommerce",
};

async function addProduct(formData: FormData) {
  "use server";
  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!name || !description || !imageUrl || !price) {
    throw new Error("Missing required fields");
  }

  await prisma.product.create({
    data: { name, description, imageUrl, price },
  });

  redirect("/");
}

function AddProductPage() {
  return (
    <div>
      <h1 className="text-lg mb-3 font-bold ">AddProductPage</h1>
      <form action={addProduct}>
        <input
          className="mb-3 w-full input input-bordered"
          required
          name="name"
          placeholder="Name"
        />
        <textarea
          required
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered mb-3 w-full"
        />
        <input
          className="mb-3 w-full input input-bordered"
          required
          name="imageUrl"
          placeholder="Image URL"
          type="url"
        />
        <input
          className="mb-3 w-full input input-bordered"
          required
          name="price"
          placeholder="Price"
          type="number"
        />

        <FormSubmitButton type="submit" className="btn-block">
          Add Product
        </FormSubmitButton>
      </form>
    </div>
  );
}

export default AddProductPage;

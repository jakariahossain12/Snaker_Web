"use client";
import { useSession, signIn } from "next-auth/react";
import { useState } from "react";
import Swal from "sweetalert2";

export default function AddSnake() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);

  if (status === "loading")
    return (
      <div className="h-screen flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  if (!session) {
    signIn();
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const species = form.species.value;
    const habitat = form.habitat.value;
    const diet = form.diet.value;
    const dangerLevel = form.danger.value;
    const facts = form.facts.value;

    // 1. Upload image to imgbb
    const imageFile = form.image.files[0];
    let imageUrl = "";
    if (imageFile) {
      const formData = new FormData();
      formData.append("image", imageFile);

      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      
      imageUrl = data.data.url;
      
    }

    // 2. Send data to API
    const snakeData = {
      name,
      species,
      habitat,
      diet,
      dangerLevel,
      facts,
      imageUrl,
    };
    const response = await fetch("/api/snakes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(snakeData),
    });

    if (response.ok) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "✅ Snake added successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      
      form.reset();
    } else {
      alert("❌ Failed to add snake");
    }

    setLoading(false);
  };

  return (
    <div className="p-8 w-10/12 md:min-h-[600px] mx-auto">
      <h1 className="text-2xl text-center font-bold mb-4">Add a New Snake</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="name"
          type="text"
          placeholder="Name"
          className="border p-2 rounded"
          required
        />
        <input
          name="species"
          type="text"
          placeholder="Species"
          className="border p-2 rounded"
          required
        />
        <input
          name="habitat"
          type="text"
          placeholder="Habitat"
          className="border p-2 rounded"
          required
        />
        <input
          name="diet"
          type="text"
          placeholder="Diet"
          className="border p-2 rounded"
          required
        />
        <select
          name="danger"
          className="border p-2 rounded bg-[#1d232a] text-white"
        >
          <option>Venomous</option>
          <option>Non-venomous</option>
        </select>
        <textarea
          name="facts"
          placeholder="Facts / Description"
          className="border p-2 rounded"
          required
        ></textarea>
        <input
          name="image"
          type="file"
          accept="image/*"
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          {loading ? "Adding..." : "Add Snake"}
        </button>
      </form>
    </div>
  );
}

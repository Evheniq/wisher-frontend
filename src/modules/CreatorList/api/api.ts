import axiosInstance from "@/api";
import type { IWishItem, IWishlist } from "@/components/Wishlist";

export async function getHints() {
  const response = await axiosInstance.get("/hints");
  return response.data.data;
}

export async function getWishlist(id: string) {
  return await axiosInstance.get(`/wishlists/${id}`);
}

export async function publishWishlist(data) {
  // return await axiosInstance.post("/wishlists", {
  //   wishlist,
  // });

  await axiosInstance.post("/wishlists", data);
}

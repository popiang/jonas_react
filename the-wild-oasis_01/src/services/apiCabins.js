import supabase from "./supabase";

export async function getCabins() {
    const { data: cabins, error } = await supabase.from("cabins").select("*");

    if (error) {
        console.log(error.message);
        throw new Error("Cabins could not be loaded");
    }

    return cabins;
}

export async function deleteCabin(id) {
    const { data, error } = await supabase
        .from("cabins")
        .delete()
        .eq("id", id);

	if (error) throw new Error(error.message);

	return data;
}

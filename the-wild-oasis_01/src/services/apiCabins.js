import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
    const { data: cabins, error } = await supabase.from("cabins").select("*");

    if (error) {
        console.log(error.message);
        throw new Error("Cabins could not be loaded");
    }

    return cabins;
}

export async function createEditCabin(newCabin, id) {
    const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
        "/",
        ""
    );

    const imagePath = hasImagePath
        ? newCabin.image
        : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

    let query = supabase.from("cabins");

    // create
    if (!id) {
        query = query.insert([{ ...newCabin, image: imagePath }]);
    }

    // update
    if (id) {
        query = query.update([{ ...newCabin, image: imagePath }]).eq("id", id);
    }

    const { data, error } = await query.select().single();

    if (error) {
        console.log(error.message);
        throw new Error("Cabin cannot be created");
    }

	if (hasImagePath) return data;

    // upload image
    const { error: storageError } = await supabase.storage
        .from("cabin-images")
        .upload(imageName, newCabin.image);

    // delete the cabin if there's an error uploading the image
    if (storageError) {
        await supabase.storage.from("cabin-images").remove([imageName]);
        console.log(storageError.message);
        throw new Error("Image file to be uploaded");
    }

    return data;
}

export async function deleteCabin(id) {
    const { data, error } = await supabase.from("cabins").delete().eq("id", id);

    if (error) throw new Error(error.message);

    return data;
}

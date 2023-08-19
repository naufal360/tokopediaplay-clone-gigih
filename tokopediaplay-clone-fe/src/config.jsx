const base_url = import.meta.env.VITE_BASE_API_URL;
if (!base_url) {
    throw new Error("base url not defined!");
}

export {base_url};
export const formatNameToId = (name) => {
    return name.toLowerCase().split(" ").join("_").replace(/\W/g, "");
};

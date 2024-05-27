
import categoriesService from './CategoriesService';

//Fetch Categories By ID Service
const getCategoriesID = async () => {
    try {
        const data = await fetch(
            'https://ix-blog-app-2d5c689132cd.herokuapp.com/api/blogs/category?iid=[category-id]',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        const categoriesIDData = await data.json();
        return categoriesIDData.data;
    }
    catch (error) {
        throw new Error(error);
    }
};

const categoriesIDService = {
    getCategoriesID,
};

export default categoriesIDService;
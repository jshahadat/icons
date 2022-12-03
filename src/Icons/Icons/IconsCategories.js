import Category from '../Category/Category';

const IconsCategories = ({ category }) => {
    console.log(category);
    const { categories } = category



    return (
        <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-10 mr-10 mt-10'>
            {
                categories.map((cate) => <Category

                    cate={cate}
                ></Category>)
            }
        </div>
    );
};

export default IconsCategories;
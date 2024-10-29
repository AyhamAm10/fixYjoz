import addComment from "../../assets/productDetails/plus.svg"
import object from "../../assets/productDetails/OBJECT.png"
import { useSelector } from "react-redux";
const Comment = () => {

  const handleImageClick = () => {
    const form = document.getElementById("commentForm") as HTMLFormElement;
    if (form) {
      form.submit(); 
    }
  };

  const product = useSelector(
    (state: any) => state.productDetailsSlice
  ).productDetailsState;

  console.log(product)

  return (
    <div className="w-full flex flex-col">
      <form id="commentForm" className="relative overflow-hidden rounded-md">
        <input
          type="text"
          className="w-full placeholder:text-#BABCC1 text-lg md:text-2xl font-medium bg-white px-8 py-4"
          placeholder="write a comment ..."
        />
        <img
          src={addComment}
          alt="add comment"
          className="absolute right-4 top-1/2 translate-y-[-50%] cursor-pointer"
          onClick={handleImageClick} 
        />
      </form>
      <div className="py-10 flex-center">
        {
          product.questions.length > 0 ?
          <div>
            <h1>that is comment</h1>
          </div>:
          <img src={object} alt="coments not fund img" />
        }
        
      </div>
    </div>
  );
};

export default Comment;

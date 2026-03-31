import BookCard from "@/components/card/BookCard";
import "./Book.css";
import { designBook } from "@/data/designBook";

const Book = () => {
  return (
    <div className="Book">
      <div className="inner">
        <h3 className="page_title">Design Book</h3>
        <div className="book_list">
          {designBook.map((item) => (
            <BookCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Book;

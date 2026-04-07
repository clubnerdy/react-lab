import BookCard from "@/components/card/BookCard";
import "@/styles/sections/Book.css";
import { designBook } from "@/data/designBook";

const Book = () => {
  return (
    <section id="Book" className="Book">
      <div className="inner">
        <h3 className="page_title">Design Book</h3>
        <div className="book_list">
          {designBook.map((item) => (
            <BookCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Book;

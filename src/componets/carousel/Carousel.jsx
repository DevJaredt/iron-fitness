import "./Carousel.css"

const Carousel = () => {
  return (
    <form>
      <input type="radio" name="fancy" autoFocus value="clubs" id="clubs" />
      <input type="radio" name="fancy" value="hearts" id="hearts" />
      <input type="radio" name="fancy" value="spades" id="spades" />
      <input type="radio" name="fancy" value="diamonds" id="diamonds" />

      <label htmlFor="clubs">&#9827; Clubs</label>
      <label htmlFor="hearts">&#9829; Hearts</label>
      <label htmlFor="spades">&#9824; Spades</label>
      <label htmlFor="diamonds">&#9830; Diamonds</label>

      <div className="keys">Use left and right keys to navigate</div>
    </form>
  );
};

export default Carousel;
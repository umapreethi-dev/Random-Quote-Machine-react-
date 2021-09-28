import quotesData from './quotesData';
//import t from 'image/t.png';

function QuotesAuthor(props){
    
    const {quote, handleClick,randomColor} = props;
    let color = randomColor();
    document.body.style.backgroundColor = color;
    
    return(
        <div className="container">
          <div className="quotes" style={{color:color}}><p>"{quote.quote}</p></div>
          <div><p className="author" style={{color:color}}>-{quote.author}</p></div>
          
          <button className="button" style={{backgroundColor: color,color:"#fff"}} onClick={()=>{handleClick(quotesData)}} type="submit">
              Generate Quote
          </button>
        </div>
    )
}
export default QuotesAuthor;
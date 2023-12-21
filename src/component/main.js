import Quotes from "../component/quote.js"
import jsonData from '../component/quote.json'

export default function main(){
    return (
        <>

        <div className="main-page">
            {
                jsonData.map(data=>(
                    <Quotes quote={data.quote}  author={data.author}/>
                ))
            }
        </div>
        </>
    );
}
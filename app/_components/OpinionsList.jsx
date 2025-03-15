import OpinionCard from "./OpinionCard"

export default function OpinionsList({opinions}){
    return(
        opinions.map((opinion)=>(
            <OpinionCard key={opinion.id} opinion={opinion}/>
        ))
    )
}
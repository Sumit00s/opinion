import AdminOpinionCard from "./AdminOpinionCard"

export default function AdminOpinionsList({opinions}){
    return(
        opinions.map((opinion)=>(
            <AdminOpinionCard key={opinion.id} opinion={opinion}/>
        ))
    )
}
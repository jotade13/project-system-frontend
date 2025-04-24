import { TableHead } from "./ui/table"

export interface head {
    head: string[]
}


const TableHeads = ({head}:head) =>
{
    return (
        <>
            {head.map((item)=><TableHead>{item}</TableHead>)}
        </>
    )
}
export default TableHeads